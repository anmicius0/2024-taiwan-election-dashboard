<template>
  <div class="font-sans">
    <AppHeader />
    <main
      class="container mx-auto w-full px-4 pt-20 leading-normal text-gray-800 md:max-w-4xl md:px-6"
    >
      <slot />
    </main>
    <LazyAppFooter />
  </div>
</template>
