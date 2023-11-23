<template>
  <q-btn dense flat icon="language">
    <q-menu>
      <q-list>
        <q-item clickable v-close-popup
          ><q-item-section>
            <NuxtLink :to="switchLocalePath('en')"
              >English</NuxtLink
            ></q-item-section
          >
        </q-item>
        <q-item clickable v-close-popup
          ><q-item-section>
            <NuxtLink :to="switchLocalePath('zh')"
              >中文</NuxtLink
            ></q-item-section
          >
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath();
</script>
