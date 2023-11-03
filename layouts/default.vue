<template>
  <div class="font-serif">
    <Header />
    <main
      class="container mx-auto w-full px-4 pt-20 leading-normal text-gray-800 md:max-w-4xl md:px-6"
    >
      <NuxtPage />
    </main>
    <LazyFooter />
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
  author: "Allen Spring",
  creator: "Allen Spring",
  robots: "index, follow",
  googleSiteVerification: "TODO",
});
</script>
