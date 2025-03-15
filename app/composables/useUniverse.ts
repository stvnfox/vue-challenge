import { extractPokemonId } from '~/helpers/extract-pokemon-id'

type UniverseKey = 'pokemon' | 'rick-and-morty'

export interface OverviewItem {
  name: string
  id: string
  image: string
  url: string
}
interface ApiResponse {
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
      const results = items.results as { name: string, image: string, id: string }[]
      return results.map(item => ({
        name: item.name,
        id: crypto.randomUUID(),
        image: item.image,
        url: `/rick-and-morty/${item.id}`,
      })) || []
    },
  },
}

export function useUniverse(universe: UniverseKey) {
  const universeHandler = universes[universe]
  const { data, status } = universeHandler.fetchData()

  const formattedItems = computed(() => {
    if (!data.value)
      return [] as OverviewItem[]
    return universeHandler.formatItems(data.value)
  })

  return {
    items: formattedItems,
    status,
    universe,
  }
}
