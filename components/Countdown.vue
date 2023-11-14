<template>
  <div>
    <UAlert
      :title="$t('components.countdown.title')"
      color="primary"
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

const calculateTimeDifference = (endDate) => {
  const now = new Date();
  const diff = endDate.getTime() - now.getTime();

  if (diff < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, past: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    past: false,
  };
};

const countdown = ref(calculateTimeDifference(targetDate.value));

onMounted(() => {
  intervalId = setInterval(() => {
    countdown.value = calculateTimeDifference(targetDate.value);
    if (countdown.value.past) {
      clearInterval(intervalId);
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
