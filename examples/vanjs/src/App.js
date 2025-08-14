import van from 'vanjs-core';
import './App.css';
import {useTheme} from 'themes-provider'

import { Dracula, Aylin, AzureBlue } from 'themes-provider/themes/dark';
import { CozyCottonCandy } from 'themes-provider/themes/light';
const T = useTheme(CozyCottonCandy)
const { background, foreground, purple, cyan} = T
const { button, div, h1, h2, ul, li, strong, em, u, p } = van.tags;

const Item = (title , ...elements) => li(
    {style : `
      font-size : 1.2em;
      color : ${purple};
      `}, 
    u(strong(title)),
    ...elements
)
const SubItem = (item) => li({style : `font-size : 1.1em; color : ${cyan};` },em(item))

const ButtonsGroup = (...buttons) => div(
  { style : `
    border : 2px darkblue solid;
    display : flex;
    flex-wrap : wrap;
    justify-content: space-around;
    padding : 10px;
    gap : 10px;
    `},
  ...buttons
)
const Button = (Text, Theme) => button({ onclick : () => T.use(Theme) },Text)

export const App = () => {
  
  return div(
    {style : `background : ${background}; color : ${foreground}; padding : 2em; `},
    h1('Themes Provider'),
    h2('What is It and How it works ?'),
    p(`
      themes-provider is a framework-agnostic themes manager that converts JavaScript objects into CSS variables on :root, optionally namespaced. 
      It supports predefined or custom themes, allows valid CSS properties or custom keys, and works without state management or rerenders, making it compatible with all frameworks.
      You can either destructure the keys from the useRoot object or reference the CSS variables directly via var(--namespace-key) in your styles, depending on how your framework handles styling.
    `),
    ButtonsGroup(
      Button('Dracula', Dracula),
      Button('Aylin', Aylin),
      Button('Azure Blue', AzureBlue),
      Button('Cozy Cotton Candy', CozyCottonCandy),
    ),
    h2(' Features '),
    ul(
      Item('🌍 Framework-Agnostic : ',
        ul(
          SubItem('No framework lock-in — your themes work anywhere.'),
          SubItem('Works With Vanjs')
        )
      ),
      Item('⚡ Tree-Shakeable Themes :',
        ul(
          SubItem('Import only the themes you actually use — dead code is eliminated during bundling.'),
          SubItem('Perfect for apps with multiple lightweight theme packs.')
        )
      ),
      Item('🎯 CSS Variables First :',
        ul(
          SubItem('Themes are applied via CSS custom properties (--namespace-prop) at the root level.'),
          SubItem('Components automatically update without re-rendering when theme changes.')
        )
      ),
      Item('🧩 Namespace Support :',
        ul(
          SubItem('Avoid conflicts with other CSS variables by assigning a custom namespace per theme provider.'),
          SubItem('Multiple theme providers can co-exist in the same application.')
        )
      ),
      Item('🔄 Runtime Theme Switching :',
        ul(
          SubItem('Change themes instantly without page reload.')
        )
      )
    )
   )
};

const root = document.getElementById('app');

van.add(root, App());
