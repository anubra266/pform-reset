import { defineConfig } from '@pandacss/dev'
// import { pformReset } from 'pform-reset'

export default defineConfig({
  // presets: [
  //   '@pandacss/dev/presets',
  //   pformReset({
  //     strategy: 'utility',
  //   }),
  // ],
  presets: ['@pandacss/dev/presets', 'pform-reset'],
  preflight: true,
  include: ['./src/**/*.{tsx,ts}'],
  outdir: 'styled-system',
  jsxFramework: 'react',
})
