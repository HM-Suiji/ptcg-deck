/**
 * author: @HM-Suiji
 * description: Atom Type for PTCG Game
 * version: 0.1.1 (unsafe)
 */

enum CardType {
  pokemon = 'pokemon',
  energy = 'energy',
  trainer = 'trainer',
}

type ElementType =
  | 'fire'
  | 'water'
  | 'grass'
  | 'fighting'
  | 'psychic'
  | 'dragon'
  | 'lightning'
  | 'metal'
  | 'darkness'
  | 'colorless'

type Card =
  | {
      id: string
      name: string
      type: CardType.pokemon
      hp: number
      element: ElementType
    }
  | {
      id: string
      name: string
      type: CardType.energy
      element: ElementType | 'others'
      effect: string[]
    }
  | {
      id: string
      name: string
      type: CardType.trainer
      effect: string[]
      cost: string[]
    }

interface Deck {
  id: string
  name: string
  editor: string
  cards: {
    pokemon: { items: Card[]; amount: number }
    energy: { items: Card[]; amount: number }
    trainer: { items: Card[]; amount: number }
  }
}

enum ActionType {
  drawCard = 'drawCard', // 抽牌
  playCard = 'playCard', // 使用牌
  getCard = 'getCard', // 选牌
  discard = 'discard', // 弃牌
  pass = 'pass', // 跳过回合
  supporter = 'supporter', // 使用支援者
  skill = 'skill', // 使用技能
  transfer = 'transfer', // 宝可梦交换
  ability = 'ability', // 特性

  // -- Expand Action Type --
  retreat = 'retreat', // 撤退
  VStarEnergy = 'VStar energy', // VStar 力量
  attachEnergy = 'attach energy', // 填能
}

// 序列化的动作
type SerializedAction = {
  id: string
  type: ActionType
  cost: string[]
  effect: string[]
}

// 反序列化的动作
type Action =
  | {
      id: string
      type: ActionType.pass
    }
  | {
      id: string
      type: ActionType.supporter
      cost: string[]
      effect: string[]
    }
  | {
      id: string
      type: ActionType.skill
      name: string
      executePokemen: string
      currentDamage: number
      cost: string[]
      targets: { target: string; damage: number }[]
    }
  | {
      id: string
      type: ActionType.retreat
      cost: string[]
    }
  | {
      id: string
      type: 'transfer'
      from: string
      to: string
    }
  | {
      id: string
      type: ActionType.ability
      name: string
      executePokemen: string
      cost: string[]
      effect: string[]
    }
  | {
      id: string
      type: ActionType.VStarEnergy
      name: string
      executePokemen: string
      cost: string[]
      effect: string[]
    }
  | {
      id: string
      type: ActionType.attachEnergy
      target: {
        pokemon: string
        energy: string
        amount: number
      }[]
    }
  | {
      id: string
      type: ActionType.drawCard
      amount: number
    }
  | {
      id: string
      target: string[]
      type: ActionType.discard
    }
  | {
      id: string
      target: string
      type: ActionType.playCard
    }

interface Actions {
  id: string
  gameType: string
  deck: {
    offensive: Deck
    defensive: Deck
  }
  actions: Action[]
}

export type {
  Card,
  Deck,
  Actions,
  SerializedAction,
  Action,
  ActionType,
  CardType,
}
