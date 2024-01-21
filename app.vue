<template>
  <div>
    <VitePwaManifest />
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { charset: "utf-8" },
    { name: "author", content: "Allen Spring" },
    { name: "creator", content: "Allen Spring" },
    { name: "robots", content: "index, follow" },
    {
      name: "google-site-verification",
      content: "d1e-XaWdje3IjMVq1UjHI7kV6BjaIXJw6eZNwDg4eOY",
    },
    { name: "theme-color", content: "#64EF68" },
  ],
});
</script>
