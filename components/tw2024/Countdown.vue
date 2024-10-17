<template>
  <div
    id="countDown"
    class="flex justify-center rounded-xl border-2 p-5 text-lg"
  >
    <div>
      <span class="font-bold">Time till election: </span>
      <span>
        {{ countdown.days }} days {{ countdown.hours }} hours
        {{ countdown.minutes }} minutes {{ countdown.seconds }} seconds
      </span>
    </div>
  </div>
</template>

<script setup>
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

const countdown = computed(() => calculateTimeDifference(targetDate.value));

onMounted(() => {
  const intervalId = setInterval(() => {
    if (countdown.value.past) {
      clearInterval(intervalId);
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
