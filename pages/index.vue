<template>
  <div class="flex flex-col items-center justify-center space-y-4 text-center">
    <UAvatar
      size="3xl"
      src="/Tater.gif"
      alt="Avatar of Tater eating a potato"
    />
    <h1 class="py-4 text-3xl font-bold">{{ $t("page.home.title") }}</h1>
  </div>
  <div class="mx-auto px-10 py-8">
    <ul class="w-full space-y-4">
      <li>👋 {{ $t("page.home.subtitle") }}</li>
      <li>
        🛠️ Currently making:
        <NuxtLink :to="localePath('2024-taiwan')" class="underline">{{
          $t("page.home.making")
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { t } = useI18n();
const localePath = useLocalePath();

const pageTitle = t("page.home.tab");
const pageDescription = t("page.home.subtitle");

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  robots: "index, follow",
  ogType: "website",
});
</script>
