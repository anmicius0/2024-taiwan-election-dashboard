<template>
  <div class="my-14 w-full justify-center">
    <h2 class="my-4 text-2xl font-bold">
      {{ $t("components.oplist.title") }}
    </h2>

    <UTable :rows="rows" :columns="columns" />
    <div class="flex justify-end px-3 py-3.5">
      <UPagination v-model="page" :page-count="pageCount" :total="p4.length" />
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();
import p4 from "assets/p4.json";

const columns = [
  { key: "institution", label: t("components.oplist.institution") },
  { key: "date", label: t("components.oplist.date") },
  { key: "sample", label: t("components.oplist.sample") },
  { key: "dpp", label: t("components.oplist.dpp") },
  { key: "tpp", label: t("components.oplist.tpp") },
  { key: "kmt", label: t("components.oplist.kmt") },
  { key: "gtm", label: t("components.oplist.gtm") },
  { key: "undecided", label: t("components.oplist.undecided") },
];

const page = ref(1);
const pageCount = 10;

const rows = computed(() => {
  return p4.slice((page.value - 1) * pageCount, page.value * pageCount);
});
</script>

<style lang="scss" scoped></style>
