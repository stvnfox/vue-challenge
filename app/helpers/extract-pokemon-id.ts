export function extractPokemonId(url: string): string {
  const matches = url.match(/\/pokemon\/(\d+)\//)
  return matches && matches[1] ? matches[1] : '1'
}
