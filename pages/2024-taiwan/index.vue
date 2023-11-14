<template>
  <LazyGeneralTitle page="election.home" />
  <LazyOpChart />
  <LazyCountdown />
  <LazyOpExplainer />
  <LazyOpList />
</template>

<script setup>
const { t } = useI18n();

useSeoMeta({
  title: t("pages.election.home.title"),
  ogTitle: t("pages.election.home.title"),
  description: t("pages.election.home.subtitle"),
  ogDescription: t("pages.election.home.subtitle"),
  ogImage:
    "https://doqvf81n9htmm.cloudfront.net/data/crop_article/150317/2024election_1140(1).jpg_1140x855.jpg_1140x855.jpg",
  twitterCard: "summary_large_image",
});
</script>
