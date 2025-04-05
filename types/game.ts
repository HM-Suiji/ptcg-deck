/**
 * author: @HM-Suiji
 * description: Atom Type for PTCG Game
 * version: 0.1.0
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
  pass = 'pass', // 跳过回合
  supporter = 'supporter', // 使用支援者
  attack = 'attack', // 攻击
  retreat = 'retreat', // 撤退
  transfer = 'transfer', // 宝可梦交换
  ability = 'ability', // 特性
  VStarEnergy = 'VStar energy', // VStar 力量
  attachEnergy = 'attach energy', // 填能
  drawCard = 'draw card', // 抽牌
  discardCard = 'discard card', // 弃牌
  playCard = 'play card', // 使用牌
}

interface ParentAction<T extends ActionType> {
  id: string
  type: T
}

type Action =
  | {
      id: string
      type: ActionType.pass
      parent?: ParentAction<ActionType.attack>
    }
  | {
      id: string
      type: 'supporter'
      cost: string[]
      effect: string[]
    }
  | {
      id: string
      type: ActionType.attack
      name: string
      executePokemen: string
      currentDamage: number
      cost: string[]
      targets: { target: string; damage: number }[]
      parent?: ParentAction<ActionType.VStarEnergy | ActionType.ability>
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
      type: ActionType.discardCard
      parent: ParentAction<
        | ActionType.attack
        | ActionType.supporter
        | ActionType.playCard
        | ActionType.ability
      >
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

export type { Card, Deck, Actions, Action, ActionType, CardType }
