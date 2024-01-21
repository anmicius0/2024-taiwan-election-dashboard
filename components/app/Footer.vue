<template>
  <footer class="border-t border-gray-400 bg-white pb-10 shadow">
    <div
      class="container mx-auto flex w-full max-w-4xl flex-wrap justify-center py-8"
    >
      <!-- About Section -->
      <section class="w-full px-8 md:w-1/2">
        <h3 class="font-bold text-gray-900">About Allen Spring</h3>
        <p id="footer-intro" class="text-gray-600">
          I am an engineering student who is interested in social issues. I like
          programming and creating some interesting things. I think programming
          is an art that can express one's thoughts and emotions. I hope to be
          able to express myself through My skills can bring positive impact to
          society.
        </p>
      </section>

      <!-- Donation Section -->
      <section class="w-full px-8 md:w-1/2">
        <h3 class="font-bold text-gray-900">Donate to save poor students</h3>
        <ul>
          <li>
            <NuxtLink
              id="revolut"
              class="hover:text-underline text-gray-600 no-underline hover:text-gray-900"
              to="https://revolut.me/shaohey22h"
              aria-label="Donate via Revolut"
            >
              Revolut (credit card donation)
            </NuxtLink>
          </li>
        </ul>
      </section>

      <!-- Made with heart -->
      <div class="w-full px-8 pt-10 text-center md:w-1/2">
        <p class="py-1 text-gray-600 no-underline hover:text-gray-900">
          Made with ❤️ in Finland 🇫🇮
        </p>
      </div>
    </div>
  </footer>
</template>
