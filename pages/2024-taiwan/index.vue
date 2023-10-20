<template>
  <GeneralTitle page="election" />
  <MyChart />
  <OpList :show_all="false" />
</template>

<script setup>
const { t } = useI18n();

useHead({
  title: t("page.election.title"),
  meta: [
    {
      name: "description",
      content: t("page.election.subtitle"),
    },
    { property: "og:title", content: t("page.election.title") },
    { property: "og:description", content: t("page.election.subtitle") },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://2024-tw-presidential.vercel.app/" },
    { property: "og:locale", content: "en" },
    {
      property: "og:image",
      content:
        "https://doqvf81n9htmm.cloudfront.net/data/crop_article/150317/2024election_1140(1).jpg_1140x855.jpg_1140x855.jpg",
    },
    { property: "og:image:alt", content: t("page.election.title") }, // Alt text for the image
    { property: "og:image:type", content: "image/jpeg" }, // MIME type of the image
    { property: "og:image:width", content: "1140" }, // Width of the image in pixels
    { property: "og:image:height", content: "855" }, // Height of the image in pixels
    { name: "twitter:title", content: t("page.election.title") }, // Title for Twitter card
    { name: "twitter:description", content: t("page.election.subtitle") }, // Description for Twitter card
    {
      name: "twitter:image",
      content:
        "https://doqvf81n9htmm.cloudfront.net/data/crop_article/150317/2024election_1140(1).jpg_1140x855.jpg_1140x855.jpg",
    }, // Image for Twitter card
  ],
  htmlAttrs: { lang: "en" },
});
</script>
