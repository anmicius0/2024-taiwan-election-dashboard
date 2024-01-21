<template>
  <q-bar
    id="header"
    class="fixed z-10 w-full bg-transparent p-7 backdrop-blur-md transition duration-700 ease-in-out md:px-20 md:py-7"
  >
    <div class="flex w-full justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="font-sans flex text-2xl font-bold">
        ALLEN SPRING
      </NuxtLink>

      <!-- Desktop navbar -->
      <div id="nav-content">
        <ul
          class="flex flex-row justify-end space-x-8 bg-transparent align-middle"
        >
          <!-- Links -->
          <li
            v-for="page in pages"
            :key="page.label"
            class="mx-4 my-2 hidden md:block"
          >
            <NuxtLink :to="page.to" class="bg-transparent md:p-0">
              {{ page.label }}
            </NuxtLink>
          </li>

          <!-- Mobile dropdown -->
          <li class="block md:hidden">
            <HeaderMobileDropdown :pages="pages" />
          </li>
        </ul>
      </div>
    </div>
  </q-bar>
</template>

<script setup>
const pages = [
  {
    label: "TW2024",
    to: "/tw2024",
  },
  {
    label: "Blog",
    to: "/blog",
  },
];

let header = null;
let lastScroll = 0;

const handleScroll = () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    // Scrolling down, move the header upward
    header.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up, bring the header back down
    header.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
};

onMounted(() => {
  header = document.getElementById("header");
  window.addEventListener("scroll", handleScroll);
});
</script>
