export interface Character {
  name: string;
  quote: string;
  image: string;
  abilities: Array<Ability>;
  thumbnail: string;
  universe: string;
  tags: Array<Tag>;
  id: number;
}

export interface Ability {
  abilityName: string;
  abilityScore: number;
}

export interface Tag {
  slot: number;
  tag_name: string;
}

export interface GetAllCharatersRequest {
  page: number;
  limit: number;
}
