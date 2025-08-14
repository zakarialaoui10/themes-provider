# Themes Provider
Universal, Tree-Shakeable, Framework-agnostic Theme Management, that converts JavaScript objects into CSS variables on `:root`, optionally namespaced. 
## Features
- ***🌍 Framework-Agnostic :***
    - No framework lock-in — your themes work anywhere.
    - Works with :`Zikojs`, `Vanjs`, `React`, `Preact`, `Svelte`, `Vue`, `Solid`, `Vanilla JS`, and more.
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

## Demos
- **`Zikojs :`** 
- **`Vanjs :`** 
<!-- - **`React :`** 
- **`Preact :`** 
- **`Solid :`** 
- **`Svelte :`** 
- **`Vue :`** 
- **`Astro :`**  
- **`Angular :`** 
- **`Qwik :`**  
- **`Alpine :`** 
- **`Htmx :`**  
- **`Marko :`**  -->
## Install
```bash
npm i themes-provider
```

## Usage