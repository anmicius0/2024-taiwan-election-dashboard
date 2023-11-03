<template>
  <nav
    id="header"
    class="fixed top-0 z-10 w-full bg-transparent px-6 py-4 backdrop-blur-md md:px-20 md:py-5"
  >
    <div class="flex w-full justify-between">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="text-xl font-bold">
        {{ $t("header.title") }}
      </NuxtLink>

      <!-- Desktop navbar -->
      <div id="nav-content" class="w-auto">
        <ul
          class="flex flex-row justify-end space-x-8 rounded-lg bg-transparent font-medium"
        >
          <!-- Links -->
          <li
            v-for="page in pages[0]"
            :key="page.label"
            class="hidden md:block"
          >
            <NuxtLink
              :to="localePath(page.to)"
              class="block rounded py-2 pl-3 pr-4 md:bg-transparent md:p-0"
            >
              {{ $t(`header.${page.label}`) }}
            </NuxtLink>
          </li>

          <!-- Mobile dropdown -->
          <li class="block md:hidden">
            <HeaderMobileDropdown :pages="pages" />
          </li>

          <!-- Language button -->
          <li>
            <HeaderLanguageButton />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const pages = [
  [
    {
      label: "taiwan",
      to: "/2024-taiwan",
    },
    {
      label: "blog",
      to: "/blog",
    },
  ],
];
</script>
<style></style>
