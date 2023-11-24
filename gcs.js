import { Storage } from "@google-cloud/storage";
import "dotenv/config";

const bucketName = "op-data-2024";
const localDirectory = "./assets"; // Where you want to store the files locally

async function downloadFiles() {
  try {
    const storage = new Storage({
      projectId: process.env.GCP_PROJECT_ID,
      credentials: {
        client_email: process.env.GCP_SERVICE_ACCOUNT_EMAIL,
        private_key: JSON.parse(`"${process.env.GCP_PRIVATE_KEY}"`),
      },
    });

    const [files] = await storage.bucket(bucketName).getFiles();

    // Filter to download only p3.json
    const fileToDownload = files.find((file) => file.name === "p3.json");

    if (fileToDownload) {
      await downloadFile(fileToDownload, localDirectory);
      console.log("File downloaded successfully");
    } else {
      console.log("p3.json not found in the bucket");
    }
  } catch (err) {
    console.error("Error downloading file:", err);
  }
}

async function downloadFile(file, localDirectory) {
  const destination = `${localDirectory}/${file.name}`;
  try {
    await file.download({ destination });
    console.log(`Downloaded ${file.name} to ${destination}`);
  } catch (err) {
    console.error(`Error downloading ${file.name}:`, err);
  }
}

downloadFiles();
