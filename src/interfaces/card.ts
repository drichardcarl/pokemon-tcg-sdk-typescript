import { Ability } from './ability';
import { AncientTrait } from './ancientTrait';
import { Attack } from './attack';
import { Resistance, Weakness } from './stats';
import { CardImage } from './image';
import { ILegality } from './legality';
import { Set } from './set';
import { TCGPlayer } from './tcgplayer';

export interface Card {
  abilities: Ability[];
  artist: string;
  ancientTrait?: AncientTrait;
  attacks: Attack[];
  convertedRetreatCost: number;
  evolvesFrom: string;
  flavorText: string;
  hp: string;
  id: string;
  images: CardImage;
  legalities: ILegality;
  name: string;
  nationalPokedexNumbers: number[];
  number: string;
  rarity: string;
  resistances: Resistance[];
  retreatCost: string[];
  rules: string[];
  set: Set;
  subtypes: string[];
  supertype: string;
  tcgplayer?: TCGPlayer;
  types: string[];
  weaknesses: Weakness[];
}