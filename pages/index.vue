<template>
  <div
    class="text-centerjustify-center flex flex-col items-center space-y-4 text-center"
  >
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

<script setup></script>

<style lang="scss" scoped>
/* Improved code with the use of Tailwind CSS classes */
</style>
