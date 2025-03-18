export function useLordOfTheRingsData() {
  const status = ref('idle')
  const { data } = useAsyncData<OverviewApiResponse>('lord-of-the-rings-characters', async () => {
    try {
      status.value = 'pending'
      const results = await queryCollection('lordOfTheRingsCharacter')
        .all()

      if (!results || results.length === 0) {
        status.value = 'error'
        throw new Error('No Lord of the Rings characters found')
      }

      status.value = 'success'
      return { results }
    }
    catch (e) {
      status.value = 'error'
      console.error('Error fetching Lord of the Rings characters:', e)
      return { results: [] }
    }
  })

  return {
    data: data as Ref<OverviewApiResponse | null>,
    status,
  }
}

export function useLordOfTheRingsDetailData(id: string) {
  const status = ref('idle')
  const { data } = useAsyncData(`lord-of-the-rings-character-${id}`, async () => {
    try {
      status.value = 'pending'
      const result = await queryCollection('lordOfTheRingsCharacter').where('nameFirst', '=', capitalizeId(id)).first()

      if (!result) {
        status.value = 'error'
        throw new Error('No Lord of the Rings character found')
      }

      status.value = 'success'
      return result
    }
    catch (e) {
      status.value = 'error'
      console.error('Error fetching Lord of the Rings character:', e)
      return null
    }
  })

  return {
    data,
    status,
  }
}
