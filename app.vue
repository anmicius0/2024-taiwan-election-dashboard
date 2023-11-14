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
const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale,
  },
});

useSeoMeta({
  charset: "utf-8",
  author: "Allen Spring",
  creator: "Allen Spring",
  robots: "index, follow",
  googleSiteVerification: "d1e-XaWdje3IjMVq1UjHI7kV6BjaIXJw6eZNwDg4eOY",
  themeColor: "#64EF68",
});
</script>
