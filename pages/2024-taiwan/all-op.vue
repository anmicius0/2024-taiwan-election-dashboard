<template>
  <GeneralTitle page="2024-taiwan.all-op" />
  <OpList :show_all="true" />
</template>

<script setup>
const { t } = useI18n();

useSeoMeta({
  title: t("page.2024-taiwan.all-op.title"),
  ogTitle: t("page.2024-taiwan.all-op.title"),
  description: t("page.2024-taiwan.all-op.subtitle"),
  ogDescription: t("page.2024-taiwan.all-op.subtitle"),
});
</script>

<style lang="scss" scoped></style>
