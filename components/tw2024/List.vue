<template>
  <div class="my-4">
    <q-table
      title="Latest poll"
      :rows="p3"
      :columns="columns"
      class="font-medium shadow-none"
    />
  </div>
</template>

<script setup>
import p3 from "assets/p3.json";

const columns = [
  {
    name: "institution",
    field: "institution",
    label: "Institution",
  },
  { name: "date", field: "date", label: "Date" },
  { name: "sample", field: "sample", label: "Sample" },
  { name: "dpp", field: "dpp", label: "DPP" },
  { name: "tpp", field: "tpp", label: "TPP" },
  { name: "kmt", field: "kmt", label: "KMT" },
  {
    name: "undecided",
    field: "undecided",
    label: "Undecided",
  },
];
</script>
