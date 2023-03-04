<script setup>
import JokeCard from '@/components/JokeCard.vue'
import useJokes from '@/composables/useJokes'
const { jokes, fetchJokes } = useJokes()</script>

<template>
   <button
    title="Load Jokes"
    class="z-90 fixed bottom-8 right-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-4xl text-white drop-shadow-lg duration-300 hover:scale-110 hover:bg-green-700 hover:drop-shadow-2xl"
    @click="fetchJokes"
  >
    🚀
  </button>
  <main class="min-h-screen bg-gradient-to-r from-fuchsia-900 to-red-700">
    <div class="container mx-auto grid grid-cols-4 gap-4 py-8">
      <JokeCard
        v-for="jokes in jokes"
        :key="jokes._id"
        :joke="joke"
      />
    </div>
  </main>
</template>
