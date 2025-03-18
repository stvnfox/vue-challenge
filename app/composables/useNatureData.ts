export function useNatureData() {
  const status = ref('idle')
  const { data } = useAsyncData<OverviewApiResponse>('nature-animals', async () => {
    try {
      status.value = 'pending'
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
    data: data as Ref<OverviewApiResponse | null>,
    status,
  }
}

export function useNatureDetailData(id: string) {
  const status = ref('idle')
  const { data } = useAsyncData(`nature-animal-${id}`, async () => {
    try {
      status.value = 'pending'
      const result = await queryCollection('natureAnimal').where('name', '=', capitalizeId(id)).first()

      if (!result) {
        status.value = 'error'
        throw new Error('No nature animal found')
      }

      status.value = 'success'
      return result
    }
    catch (e) {
      status.value = 'error'
      console.error('Error fetching nature animal:', e)
      return null
    }
  })

  return {
    data,
    status,
  }
}
