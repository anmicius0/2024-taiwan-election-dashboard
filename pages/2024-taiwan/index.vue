<template>
  <LazyGeneralTitle page="election" />
  <LazyOpChart />
  <LazyCountdown />
  <LazyOpExplainer />
  <LazyOpList />
</template>

<script setup>
const { t } = useI18n();
const title = t("pages.election.title");
const subtitle = t("pages.election.subtitle");

useSeoMeta({
  title: title,
  ogTitle: title,
  description: subtitle,
  ogDescription: subtitle,
  ogImage:
    "https://doqvf81n9htmm.cloudfront.net/data/crop_article/150317/2024election_1140(1).jpg_1140x855.jpg_1140x855.jpg",
  twitterCard: "summary_large_image",
});
</script>
