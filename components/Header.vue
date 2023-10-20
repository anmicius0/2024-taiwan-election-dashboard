<template>
  <nav
    id="header"
    class="fixed top-0 z-10 w-full bg-transparent backdrop-blur-md"
  >
    <div
      class="mx-auto flex flex-wrap items-center justify-between px-3 py-3 md:max-w-4xl"
    >
      <!-- Logo -->
      <div class="flex w-full justify-between pl-4 md:flex-grow-0">
        <NuxtLink
          :to="localePath('/')"
          class="flex items-center text-xl font-bold"
        >
          {{ $t("header.title") }}
        </NuxtLink>

        <!-- Mobile dropdown -->
        <HeaderMobileDropdown />

        <!-- Desktop navbar -->
        <div id="nav-content" class="hidden w-full md:block md:w-auto">
          <ul
            class="flex flex-row space-x-8 rounded-lg bg-transparent font-medium"
          >
            <li v-for="page in pages" :key="page.label" class="">
              <NuxtLink
                :to="localePath(page.to)"
                class="block rounded py-2 pl-3 pr-4 md:bg-transparent md:p-0"
              >
                {{ $t(`header.${page.label}`) }}
              </NuxtLink>
            </li>
            <li class="">
              <HeaderLanguageButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const pages = [
  {
    label: "taiwan",
    to: "/2024-taiwan",
  },
  {
    label: "blog",
    to: "/blog",
  },
];
</script>
<style></style>
