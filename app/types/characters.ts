export interface BaseCharacter {
  id: string | number
  name: string
}

export interface RickAndMortyCharacter extends BaseCharacter {
  image: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  episode: string[]
  url: string
  created: string
}

export interface PokemonCharacter extends BaseCharacter {
  base_experience: number
  height: number
  weight: number
  is_default: boolean
  order: number
  abilities: {
    is_hidden: boolean
    slot: number
    ability: {
      name: string
      url: string
    }
  }[]
  forms: {
    name: string
    url: string
  }[]
  game_indices: {
    game_index: number
    version: {
      name: string
      url: string
    }
  }[]
  held_items: {
    item: {
      name: string
      url: string
    }
    version_details: {
      rarity: number
      version: {
        name: string
        url: string
      }
    }[]
  }[]
  location_area_encounters: string
  moves: {
    move: {
      name: string
      url: string
    }
    version_group_details: {
      level_learned_at: number
      move_learn_method: {
        name: string
        url: string
      }
      version_group: {
        name: string
        url: string
      }
    }[]
  }[]
  past_types: {
    generation: {
      name: string
      url: string
    }
    types: {
      slot: number
      type: {
        name: string
        url: string
      }
    }[]
  }[]
  sprites: {
    front_default: string
    front_shiny: string
    front_female: string
    front_shiny_female: string
    back_default: string
    back_shiny: string
    back_female: string
    back_shiny_female: string
  }
  cries: {
    latest: string
    legacy: string
  }
  species: {
    name: string
    url: string
  }
  stats: {
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
  }[]
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[]
}
