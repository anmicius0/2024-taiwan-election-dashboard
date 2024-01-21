<template>
  <q-btn dense flat icon="menu">
    <q-menu>
      <q-list>
        <q-item clickable v-close-popup v-for="page in pages" :key="page.label"
          ><q-item-section>
            <NuxtLink :to="page.to">{{ page.label }}</NuxtLink></q-item-section
          >
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup>
const props = defineProps({
  pages: { type: Array, required: true },
});
</script>
