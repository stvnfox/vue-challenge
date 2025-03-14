type UniverseKey = keyof typeof universes

interface PokemonApiResponse {
  results: { name: string, url: string }[]
}

function extractPokemonId(url: string): string {
  const matches = url.match(/\/pokemon\/(\d+)\//)
  return matches && matches[1] ? matches[1] : '1'
}

const universes = {
  pokemon: {
    fetchData: () => usePokemonData('pokemon'),
    formatItems: (items: PokemonApiResponse) => items.results.map(item => ({
      name: item.name,
      id: crypto.randomUUID(),
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractPokemonId(item.url)}.png`,
      url: `/pokemon/${item.name}`,
    })) || [],
  },
}

export function useUniverse(universe: UniverseKey) {
  const universeHandler = universes[universe]
  const { data, status } = universeHandler.fetchData()

  const formattedItems = computed(() => universeHandler.formatItems(data.value as PokemonApiResponse))

  return {
    items: formattedItems,
    status,
    universe,
  }
}
