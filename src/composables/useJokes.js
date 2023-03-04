import { ref } from 'vue'

const jokes = ref([])

const useJokes = () => {
  const fetchJokes = () => {
    for (let index = 0; index < 12; index++) {
      jokes.value.push({
        _id: jokes.value.length,
        name: `Jokes ${jokes.value.length}`,
        imageUrl: 'https://via.placeholder.com/400x800',
      })
    }
  }
  return { jokes, fetchJokes }
}

export default useJokes