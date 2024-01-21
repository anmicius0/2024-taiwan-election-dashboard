<template>
  <LazyAppTitle
    title="2024 Taiwan Election Polls: Accurate Aggregation & Analysis"
    subtitle="Unbiased, comprehensive poll data from diverse sources for a clear view of the 2024 Taiwan election landscape."
  />
  <LazyTw2024Chart />
  <LazyTw2024Countdown />
  <LazyTw2024Explainer />
  <LazyTw2024List />
</template>

<script setup>
const title = "2024 Taiwan Election Polls: Accurate Aggregation & Analysis";
const subtitle =
  "Unbiased, comprehensive poll data from diverse sources for a clear view of the 2024 Taiwan election landscape.";

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
