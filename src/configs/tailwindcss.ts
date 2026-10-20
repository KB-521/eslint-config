import type { OptionsOverrides, OptionsTailwindcssCallees, TypedFlatConfigItem } from '../types'
import { interopDefault } from '../utils'

export async function tailwindcss(options: OptionsTailwindcssCallees & OptionsOverrides = {}): Promise<TypedFlatConfigItem[]> {
  const {
    callees = ['clsx', 'classnames', 'classnames-ts', 'cn'],
    overrides = {},
  } = options

  const pluginTailwindcss = await interopDefault(import('eslint-plugin-tailwindcss'))
  const configs = pluginTailwindcss.configs['flat/recommended']
  const setupConfig = configs[0] as TypedFlatConfigItem
  const rulesConfig = configs[1] as TypedFlatConfigItem

  return [
    {
      ...setupConfig,
      name: 'charon/tailwindcss/setup',
      settings: {
        tailwindcss: {
          callees,
        },
      },
    },
    {
      ...rulesConfig,
      name: 'charon/tailwindcss/rules',
    },
    {
      name: 'charon/tailwindcss/overrides',
      rules: {
        'tailwindcss/no-custom-classname': 'off',
        ...overrides,
      },
    },
  ]
}
