export function useNatureData() {
  const status = ref('loading')
  const { data } = useAsyncData<ApiResponse>('nature-animals', async () => {
    try {
      status.value = 'loading'
      const results = await queryCollection('natureAnimal')
        .all()

      if (!results || results.length === 0) {
        status.value = 'error'
        throw new Error('No nature animals found')
      }

      status.value = 'success'
      return { results }
    }
    catch (e) {
      status.value = 'error'
      console.error('Error fetching nature animals:', e)
      return { results: [] }
    }
  })

  return {
    data: data as Ref<ApiResponse | null>,
    status,
  }
}
