import van from 'vanjs-core';
import './App.css';
import {useTheme} from 'themes-provider'

import { Dracula, Aylin, AzureBlue } from 'themes-provider/themes/dark';
const T = useTheme(Dracula)
const { background, currentLine, foreground, purple} = T
const { button, div, h1, h2, img, p, a, ul, li, strong, em, u } = van.tags;

const Item = (title , ...elements) => li(
    {style : `
      font-size : 1.2em;
      color : ${currentLine};
      `}, 
    u(strong(title)),
    ...elements
)
const SubItem = (item) => li({style : 'font-size : 1.1em'},em(item))

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
    {style : `background : ${purple}; padding : 2em;`},
    h1('Themes Provider'),
    ButtonsGroup(
      Button('Dracula', Dracula),
      Button('Aylin', Aylin),
      Button('AzureBlue', AzureBlue),
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
