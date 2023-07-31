import type { Preview } from '@storybook/react'
import "../src/app/globals.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
