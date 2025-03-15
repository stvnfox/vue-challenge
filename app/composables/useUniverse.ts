import { extractPokemonId } from '~/utils/extract-pokemon-id'
import { useLordOfTheRingsData } from './useLordOfTheRingsData'
import { useNatureData } from './useNatureData'

export type UniverseKey = 'pokemon' | 'rick-and-morty' | 'lord-of-the-rings' | 'nature'

export interface OverviewItem {
  name: string
  id: string
  url: string
  image?: string
  icon?: string
}
export interface OverviewApiResponse {
  results: unknown[]
}

interface UniverseHandler {
  fetchOverviewData: () => { data: Ref<OverviewApiResponse | null>, status: Ref<string> }
  fetchDetailData: (id: string | number) => { data: Ref<unknown | null>, status: Ref<string> }
  formatOverviewItems: (items: OverviewApiResponse) => OverviewItem[]
}

const universes: Record<UniverseKey, UniverseHandler> = {
  'pokemon': {
    fetchOverviewData: () => usePokemonData('pokemon'),
    fetchDetailData: id => usePokemonData(`pokemon/${id}`),
    formatOverviewItems: (items: OverviewApiResponse) => {
      if (!items || !items.results)
        return []

      const results = items.results as { name: string, url: string }[]
      return results.map(item => ({
        name: item.name,
        id: crypto.randomUUID(),
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractPokemonId(item.url)}.png`,
        url: `/pokemon/${item.name}`,
      })) || []
    },
  },
  'rick-and-morty': {
    fetchOverviewData: () => useRickAndMortyData('character'),
    fetchDetailData: id => useRickAndMortyData(`character/${id}`),
    formatOverviewItems: (items: OverviewApiResponse) => {
      if (!items || !items.results)
        return []

      const results = items.results as { name: string, image: string, id: string }[]
      return results.map(item => ({
        name: item.name,
        id: crypto.randomUUID(),
        image: item.image,
        url: `/rick-and-morty/${item.id}`,
      })) || []
    },
  },
  'lord-of-the-rings': {
    fetchOverviewData: () => useLordOfTheRingsData(),
    fetchDetailData: id => useLordOfTheRingsDetailData(id as string),
    formatOverviewItems: (items: OverviewApiResponse) => {
      if (!items || !items.results)
        return []

      const results = items.results as { nameFirst: string, nameLast: string, image: string, id: string }[]
      return results.map((item) => {
        const name = [item.nameFirst, item.nameLast].filter(Boolean).join(' ').toLowerCase()
        const urlParam = item.nameFirst.toLowerCase()

        return {
          name,
          id: crypto.randomUUID(),
          image: item.image,
          url: `/lord-of-the-rings/${urlParam}`,
        }
      })
    },
  },
  'nature': {
    fetchOverviewData: () => useNatureData(),
    fetchDetailData: id => useNatureDetailData(id as string),
    formatOverviewItems: (items: OverviewApiResponse) => {
      if (!items || !items.results)
        return []

      const results = items.results as { name: string, icon: string, id: string }[]
      return results.map((item) => {
        const urlParam = item.name.toLowerCase()

        return {
          name: item.name,
          id: crypto.randomUUID(),
          icon: item.icon,
          url: `/nature/${urlParam}`,
        }
      }) || []
    },
  },
}

export function useUniverse(universe: UniverseKey) {
  const universeHandler = universes[universe]
  const { data, status } = universeHandler.fetchOverviewData()

  const formattedItems = computed(() => {
    try {
      if (!data.value)
        return [] as OverviewItem[]
      return universeHandler.formatOverviewItems(data.value)
    }
    catch (error) {
      console.error(`Error formatting items for universe ${universe}:`, error)
      return [] as OverviewItem[]
    }
  })

  return {
    items: formattedItems,
    status,
    universe,
  }
}

export function useUniverseDetail(universe: UniverseKey, id: string | number) {
  const universeHandler = universes[universe]
  const { data, status } = universeHandler.fetchDetailData(id)

  return {
    data,
    status,
  }
}
