<template>
  <q-bar
    id="header"
    class="fixed z-10 w-full bg-transparent p-7 backdrop-blur-md md:px-20 md:py-7"
  >
    <div class="flex w-full justify-between">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="flex text-xl font-bold">
        {{ $t("components.header.title") }}
      </NuxtLink>

      <!-- Desktop navbar -->
      <div id="nav-content" class="w-auto">
        <ul
          class="flex flex-row justify-end space-x-8 rounded-lg bg-transparent align-middle font-medium"
        >
          <!-- Links -->
          <li v-for="page in pages" :key="page.label" class="hidden md:block">
            <NuxtLink
              :to="localePath(page.to)"
              class="block rounded py-2 pl-3 pr-4 md:bg-transparent md:p-0"
            >
              {{ $t(`components.header.${page.label}`) }}
            </NuxtLink>
          </li>

          <!-- Language button -->
          <li>
            <HeaderLanguageButton />
          </li>

          <!-- Mobile dropdown -->
          <li class="block md:hidden">
            <HeaderMobileDropdown :pages="pages" />
          </li>
        </ul>
      </div>
    </div>
  </q-bar>
</template>

<script setup>
const localePath = useLocalePath();
const pages = [
  {
    label: "taiwan",
    to: "/tw2024",
  },
  {
    label: "blog",
    to: "/blog",
  },
];
</script>
