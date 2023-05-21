import { SystemStyleObject } from '@pandacss/types'

export interface PformReset {
  /**
   * Whether to genrate only global styles, utilities or both
   * - `base` - only generate global styles
   * - `bg` - only genrate utilities
   * - `undefined` - genrate both global styles and utilities
   *
   * @default undefined
   */
  strategy?: 'base' | 'utility'
}

export type Rule = {
  base: string[]
  utility: string[] | null
  styles: SystemStyleObject
}
