<template>
  <div class="font-sans bg-gray-100">
    <AppHeader />
    <main
      class="container mx-auto w-full px-5 py-20 leading-relaxed text-gray-800 md:max-w-3xl lg:max-w-4xl"
    >
      <article class="rounded-lg bg-white p-8 shadow-lg">
        <slot />
      </article>
    </main>
    <LazyFooter />
  </div>
</template>

<style>
main {
  h1,
  h2,
  h3 {
    @apply text-gray-900;
  }

  h1 {
    @apply my-12 text-3xl font-bold md:text-center md:text-4xl;
  }

  h2 {
    @apply mb-6 mt-8 text-2xl font-medium md:text-center;
  }

  h3 {
    @apply mb-5 mt-6 text-xl font-medium
     md:text-center;
  }

  p,
  ul,
  ol {
    @apply my-3 text-base text-gray-700 md:text-lg;
  }

  ul,
  ol {
    @apply list-inside list-disc;
  }

  ol {
    @apply list-decimal;
  }

  img {
    @apply mx-auto my-5 h-auto max-w-full;
  }

  hr {
    @apply my-6 border-t-2 border-gray-300;
  }
}
</style>
