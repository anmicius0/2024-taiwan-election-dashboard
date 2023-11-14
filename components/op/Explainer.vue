<template>
  <div class="px-1 py-8">
    <UAccordion
      color="primary"
      variant="outline"
      size="lg"
      :items="accordionItems"
    />
  </div>
</template>

<script setup>
const { t } = useI18n();

const accordionItems = [
  {
    label: t("components.explainer.0.title"),
    defaultOpen: true,
    content: t("components.explainer.0.content", {
      url: "https://hackmd.io/@billy3321/BJepntX3N?type=view",
    }),
  },
  ...[1, 2, 3, 4, 5].map((i) => ({
    label: t(`components.explainer.${i}.title`),
    content: t(`components.explainer.${i}.content`),
  })),
];
</script>
