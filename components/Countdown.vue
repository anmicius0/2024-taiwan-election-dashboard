<template>
  <div>
    <UAlert
      :title="$t('components.countdown.title')"
      color="amber"
      variant="subtle"
    >
      <template #title="{ title }">
        <span class="text-base" v-html="title" />
      </template>

      <template #description>
        <span class="text-lg font-bold">
          {{ countdown.days }} {{ $t("components.countdown.days") }}
          {{ countdown.hours }} {{ $t("components.countdown.hours") }}
          {{ countdown.minutes }} {{ $t("components.countdown.minutes") }}
          {{ countdown.seconds }}
          {{ $t("components.countdown.seconds") }}
        </span>
      </template>
    </UAlert>
  </div>
</template>

<script setup>
let intervalId;
const targetDate = ref(new Date("2024-01-12 16:00:00"));

const updateTime = () => {
  const now = new Date();
  const diff = targetDate.value.getTime() - now.getTime(); // Move this line up
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const countdown = ref(updateTime());

onMounted(() => {
  intervalId = setInterval(() => {
    countdown.value = updateTime();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
