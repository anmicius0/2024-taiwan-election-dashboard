<template>
  <div class="my-4">
    <q-table
      :title="$t('components.oplist.title')"
      :rows="rows"
      :columns="keys"
      class="font-medium shadow-none"
    />
  </div>
</template>

<script setup>
const { t } = useI18n();
import p4 from "assets/p4.json";

const columns = [
  {
    name: "institution",
    field: "institution",
    label: t("components.oplist.institution"),
  },
  { name: "date", field: "date", label: t("components.oplist.date") },
  { name: "sample", field: "sample", label: t("components.oplist.sample") },
  { name: "dpp", field: "dpp", label: t("components.oplist.dpp") },
  { name: "tpp", field: "tpp", label: t("components.oplist.tpp") },
  { name: "kmt", field: "kmt", label: t("components.oplist.kmt") },
  { name: "gtm", field: "gtm", label: t("components.oplist.gtm") },
  {
    name: "undecided",
    field: "undecided",
    label: t("components.oplist.undecided"),
  },
];

const rows = p4;
</script>
