// src/utils/ecs/component.h.ts
import { Entity } from './entity'
import { IAwake, IUpdate } from '../lifecycle/lifecycle.h'

export interface IComponent extends IAwake, IUpdate {
  // A reference to its parent Entity
  Entity: Entity | null
}
