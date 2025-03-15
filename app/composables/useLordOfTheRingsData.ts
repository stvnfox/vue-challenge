export function useLordOfTheRingsData() {
  const status = ref('loading')
  const { data } = useAsyncData<ApiResponse>('lord-of-the-rings-characters', async () => {
    try {
      status.value = 'loading'
      const result = await queryCollection('lordOfTheRingsCharacter')
        .all()

      if (!result || result.length === 0) {
        status.value = 'error'
        throw new Error('No Lord of the Rings characters found')
      }

      status.value = 'success'
      return { results: result }
    }
    catch (e) {
      status.value = 'error'
      console.error('Error fetching Lord of the Rings characters:', e)
      return { results: [] }
    }
  })

  return {
    data: data as Ref<ApiResponse | null>,
    status,
  }
}
