import { Storage } from "@google-cloud/storage";

const storage = new Storage({
  projectId: process.env.GCP_PROJECT_ID,
  credentials: {
    client_email: process.env.GCP_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GCP_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
});

async function downloadFiles() {
  const bucketName = "op-data-2024";
  const localDirectory = "./assets"; // Where you want to store the files locally

  const [files] = await storage.bucket(bucketName).getFiles();

  for (const file of files) {
    const destination = `${localDirectory}/${file.name}`;
    await file.download({ destination });
    console.log(`Downloaded ${file.name} to ${destination}`);
  }
}

downloadFiles()
  .then(() => console.log("Files downloaded successfully"))
  .catch((err) => console.error("Error downloading files:", err));
