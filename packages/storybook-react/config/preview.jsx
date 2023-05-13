import { addonStatus } from '@utrecht/storybook-helpers/src/addon-status';
import { addonThemes } from '@utrecht/storybook-helpers/src/addon-themes';
import { addonViewport } from '@utrecht/storybook-helpers/src/addon-viewport';
// import { withTests } from '@storybook/addon-jest';
// import results from '@utrecht/component-library-react/dist/.jest-test-results.json';
import '@utrecht/design-tokens/dist/index.css';
import '@utrecht/storybook-helpers/src/storybook-docs.scss';

export const decorators = [
  (Story) => <div className="utrecht-document">{Story()}</div>,
  // withTests({ results }),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    // Show code by default.
    // Stories without concise code snippets can hide the code at Story level.
    source: {
      state: 'open',
    },
  },
  ...addonStatus,
  ...addonThemes,
  ...addonViewport,
};