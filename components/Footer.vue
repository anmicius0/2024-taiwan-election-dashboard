<template>
  <footer class="mt-5 border-t border-gray-400 bg-white pb-10 shadow">
    <div
      class="container mx-auto flex w-full max-w-4xl flex-wrap justify-center py-8"
    >
      <!-- About Section -->
      <section class="w-full px-8 md:w-1/2">
        <h3 class="font-bold text-gray-900">
          {{ $t("components.footer.about.title") }}
        </h3>
        <p id="footer-intro" class="py-4 text-sm text-gray-600">
          {{ $t("components.footer.about.description") }}
        </p>
      </section>

      <!-- Donation Section -->
      <section class="w-full px-8 md:w-1/2">
        <h3 class="font-bold text-gray-900">
          {{ $t("components.footer.donation.title") }}
        </h3>
        <ul class="pt-3 text-sm">
          <li>
            <NuxtLink
              id="revolut"
              class="hover:text-underline py-1 text-gray-600 no-underline hover:text-gray-900"
              to="https://revolut.me/shaohey22h"
              aria-label="Donate via Revolut"
            >
              {{ $t("components.footer.donation.revolut") }}
            </NuxtLink>
          </li>
        </ul>
      </section>

      <!-- Made with heart -->
      <div class="w-full px-8 pt-10 text-center md:w-1/2">
        <p class="py-1 text-sm text-gray-600 no-underline hover:text-gray-900">
          Made with ❤️ in Finland 🇫🇮
        </p>
      </div>
    </div>
  </footer>
</template>
