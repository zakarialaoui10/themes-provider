import van from 'vanjs-core';
import './App.css';
import {useTheme} from 'themes-provider'
import Dracula from 'themes-provider/themes/dark/dracula'
import Aylin from 'themes-provider/themes/dark/aylin'

const {background, currentLine, foreground, purple} = useTheme(Dracula)
const { div, h1, h2, img, p, a, ul, li } = van.tags;

const Item = (...elements) => li({style : `color : ${currentLine}`},...elements)
const SubItem = (...elements) => li(...elements)

export const App = () => {
  
  return div(
    {style : `background : ${purple};`},
    h1('Themes Provider'),
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
