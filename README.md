# Themes Provider
Universal, Tree-Shakeable Theme Management, that converts JavaScript objects into CSS variables on `:root`, optionally namespaced. 
It supports predefined or custom themes, allows valid CSS properties or custom keys, and works without state management or rerenders, making it compatible with all frameworks.
You can either destructure the keys from the useRoot object or reference the CSS variables directly via `var(--namespace-key)` in your styles, depending on how your framework handles styling.

## Features
- ***🌍 Framework-Agnostic :***
    - No framework lock-in — your themes work anywhere.
    - Works with `Zikojs`, `Vanjs`, `React`, `Preact`, `Svelte`, `Vue`, `Solid`, `Vanilla JS`, and more.
- ***⚡ Tree-Shakeable Themes :***
    - Import only the themes you actually use — dead code is eliminated during bundling.
    - Perfect for apps with multiple lightweight theme packs.
- ***🎯 CSS Variables First :** 
    - Themes are applied via CSS custom properties (--namespace-prop) at the root level.
    - Components automatically update without re-rendering when theme changes.
- 🧩 Namespace Support : 
   - Avoid conflicts with other CSS variables by assigning a custom namespace per theme provider.
   - Multiple theme providers can co-exist in the same application.
- 🔄 Runtime Theme Switching :
    - Change themes instantly without page reload.
- 🛠 Simple API
<!-- - ♻ Multiple Usage Modes -->

## Install
```bash
npm i themes-provider
```

## Usage