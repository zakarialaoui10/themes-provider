<script context="module">
  export let setTheme;
</script>
<script>
import { useRoot } from 'ziko/use/use-root.js';
export let theme;
export let namespace = '';
const root = useRoot(theme, { namespace });
setTheme = (newTheme) => {
  root.use(newTheme);
};
</script>
<slot />
