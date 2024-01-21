<template>
  <AppTitle title="All blog post" subtitle="Where technology meets politics" />
  <main>
    <ContentList path="/blog" v-slot="{ list }">
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

<script setup></script>
