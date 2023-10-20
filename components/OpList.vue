<template>
  <div class="my-14 w-full justify-center">
    <h2
      v-show="!show_all"
      :class="show_all ? 'my-8 text-4xl' : 'my-4 text-2xl'"
      class="font-bold"
    >
      {{ $t("oplist.title") }}
    </h2>

    <div class="overflow-x-auto">
      <table
        class="max-w-max table-auto divide-y divide-gray-200 whitespace-nowrap"
      >
        <thead class="text-s text-left text-gray-500">
          <tr>
            <th class="px-6 py-3">{{ $t("oplist.institution") }}</th>
            <th class="px-6 py-3">{{ $t("oplist.date") }}</th>
            <th class="px-6 py-3">{{ $t("oplist.sample") }}</th>
            <th class="px-6 py-3">{{ $t("oplist.dpp") }}</th>
            <th class="px-6 py-3">{{ $t("oplist.tpp") }}</th>
            <th class="px-6 py-3">{{ $t("oplist.kmt") }}</th>
            <th class="px-6 py-3">{{ $t("oplist.gtm") }}</th>
            <th class="px-6 py-3">{{ $t("oplist.undecided") }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="d in show_all ? p4 : p4.slice(0, 8)" :key="d.institution">
            <td
              class="overflow-auto text-ellipsis px-6 py-4 underline underline-offset-4"
            >
              {{ d.institution }}
            </td>
            <td class="px-6 py-4">
              {{ new Date(d.date).toLocaleDateString("zh-TW") }}
            </td>
            <td class="px-6 py-4">{{ d.sample }}</td>
            <td class="px-6 py-4">{{ d.dpp }}</td>
            <td class="px-6 py-4">{{ d.tpp }}</td>
            <td class="px-6 py-4">{{ d.kmt }}</td>
            <td class="px-6 py-4">{{ d.gtm }}</td>
            <td class="px-6 py-4">{{ d.undecided }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- More button -->
    <div v-show="!show_all" class="m-5 text-center text-xl">
      <NuxtLink :to="localePath('/2024-taiwan/all-op')">
        <button class="underline">{{ $t("oplist.more") }}</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
import p4 from "assets/p4.json";

const props = defineProps({
  show_all: Boolean,
});
</script>

<style lang="scss" scoped></style>
