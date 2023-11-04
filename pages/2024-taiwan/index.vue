<template>
  <GeneralTitle page="2024-taiwan.home" />
  <MyChart />
  <OpList :show_all="false" />
</template>

<script setup>
const { t } = useI18n();

useSeoMeta({
  title: t("page.2024-taiwan.home.title"),
  ogTitle: t("page.2024-taiwan.home.title"),
  description: t("page.2024-taiwan.home.subtitle"),
  ogDescription: t("page.2024-taiwan.home.subtitle"),
  ogImage:
    "https://doqvf81n9htmm.cloudfront.net/data/crop_article/150317/2024election_1140(1).jpg_1140x855.jpg_1140x855.jpg",
  twitterCard: "summary_large_image",
});
</script>
