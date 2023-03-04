<script setup>
const props = defineProps({
  joke: {
    type: Object,
    default: () => ({
      _id: -1,
      name: 'Unknown',
      imageUrl: 'https://via.placeholder.com/150',
    }),
  },
})
</script>

<template>
 <RouterLink
    :to="`/joke/${props.joke._id}`"
    class="rounded-lg bg-white shadow-lg"
  >
    <img
      class="w-full rounded-t-lg object-cover"
      :src="props.joke.imageUrl"
    />
    <div class="p-4">
<h2 class="text-2xl font-semibold text-gray-800">
        {{ props.joke.name }}
      </h2>
      </div>
    </RouterLink>
</template>