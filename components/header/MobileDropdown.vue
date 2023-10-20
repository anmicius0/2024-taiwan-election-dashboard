<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton color="white" icon="i-heroicons-bars-3" class="md:hidden" />
    <template #item="{ item }">
      <NuxtLink :to="localePath(item.to)" :key="item.label">{{
        item.lang ? item.label : $t(`header.${item.label}`)
      }}</NuxtLink>
    </template>
  </UDropdown>
</template>

<script setup>
const { locales } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const items = [
  [
    {
      label: "taiwan",
      to: "/2024-taiwan",
      lang: false,
    },
    {
      label: "blog",
      to: "/blog",
      lang: false,
    },
  ],
  locales.value.map((lang) => {
    return {
      label: lang.name,
      to: switchLocalePath(lang.code),
      lang: true,
    };
  }),
];
</script>
