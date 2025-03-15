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
export interface ApiResponse {
  results: unknown[]
}

interface UniverseHandler {
  fetchData: () => { data: Ref<ApiResponse | null>, status: Ref<string> }
  formatItems: (items: ApiResponse) => OverviewItem[]
}

const universes: Record<UniverseKey, UniverseHandler> = {
  'pokemon': {
    fetchData: () => usePokemonData('pokemon'),
    formatItems: (items: ApiResponse) => {
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
    fetchData: () => useRickAndMortyData('character'),
    formatItems: (items: ApiResponse) => {
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
    fetchData: () => useLordOfTheRingsData(),
    formatItems: (items: ApiResponse) => {
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
    fetchData: () => useNatureData(),
    formatItems: (items: ApiResponse) => {
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
  const { data, status } = universeHandler.fetchData()

  const formattedItems = computed(() => {
    try {
      if (!data.value)
        return [] as OverviewItem[]
      return universeHandler.formatItems(data.value)
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
