<template>
  <div class="flex flex-col items-center justify-center space-y-4 text-center">
    <q-avatar
      size="150px"
      src="/Tater.gif"
      alt="Avatar of Tater eating a potato"
    >
      <img src="/Tater.gif" />
    </q-avatar>
    <h1 class="py-4 text-3xl font-bold">Hi, I am Allen Spring</h1>
  </div>
  <div class="mx-auto px-10 py-8">
    <ul class="w-full space-y-4">
      <li>
        👋 Passionate about coding, I thrive on bringing innovative ideas to
        life through programming
      </li>
      <li>
        🛠️ Currently making:
        <NuxtLink to="tw2024" class="underline">
          "2024 Taiwan Election Polls: Accurate Aggregation & Analysis"
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const pageTitle = "Hi, I am Allen Spring";
const pageDescription =
  "👋 Passionate about coding, I thrive on bringing innovative ideas to life through programming";

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  robots: "index, follow",
  ogType: "website",
});
</script>
