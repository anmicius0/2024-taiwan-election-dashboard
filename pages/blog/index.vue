<template>
  <GeneralTitle page="blog" />
  <main>
    <ContentList :path="'/' + locale + '/blog'" v-slot="{ list }">
      <NuxtLink
        v-for="article in list"
        :key="article._path"
        :to="article._path"
        class="py-6"
      >
        {{ console.log(article) }}
        <h2 class="pt-4 text-lg font-bold underline">{{ article.title }}</h2>
      </NuxtLink>
    </ContentList>
  </main>
</template>

<script setup>
const { locale } = useI18n();
</script>
