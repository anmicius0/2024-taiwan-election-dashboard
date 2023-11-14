<template>
  <div class="my-14 w-full justify-center">
    <h2 class="my-4 text-2xl font-bold">
      {{ $t("components.oplist.title") }}
    </h2>

    <UTable :rows="rows" :columns="columns" />
    <div class="flex justify-end px-3 py-3.5">
      <UPagination
        size="lg"
        v-model="page"
        :page-count="pageCount"
        :total="p4.length"
      />
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

const itemsPerPage = 10; // Items per page
const page = ref(1);
const totalItems = p4.length;
const pageCount = computed(() => Math.ceil(totalItems / itemsPerPage));

const rows = computed(() => {
  const startIndex = (page.value - 1) * itemsPerPage;
  const endIndex = page.value * itemsPerPage;
  return p4.slice(startIndex, endIndex);
});
</script>
