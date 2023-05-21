import { definePreset } from '@pandacss/dev'

import { PformReset } from './types'
import { rules } from './rules'
import { mergeObjectsByExtension, mergeObjectsByKey } from './merge-utils'

export const pformReset = (options?: PformReset): any => {
  const strategy = options?.strategy === undefined ? ['base', 'class'] : ([options.strategy] as const)

  const flatRules = rules
    .filter((rule) => !!rule.utility)
    .map((rule) => rule.utility!.map((u) => ({ [u]: rule.styles })))
    .flat()

  const mergedPseudoRules = mergeObjectsByKey(flatRules)
  const utilityRules = mergeObjectsByExtension(mergedPseudoRules)

  const _utilities = Object.entries(utilityRules).reduce(
    (acc, [key, value]) =>
      Object.assign(acc, {
        [key]: {
          transform() {
            return value
          },
        },
      }),
    {},
  )
  const globalRules = rules.map((rule) => {
    return {
      [rule.base.join(', ')]: rule.styles,
    }
  })

  const utilities = { extend: strategy.includes('utility') ? _utilities : {} }
  const globalCss = { extend: strategy.includes('base') ? Object.assign({}, ...globalRules) : {} }

  return definePreset({
    utilities,
    globalCss,
  })
}

export default pformReset()
