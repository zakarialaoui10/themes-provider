## Mode 1 : useTheme Hook  

```html
<script>
import {useTheme} from "themes-provider/svelte"

let Themes = {
    t1: {
        color: 'red'
    },
    t2: {
        color: 'blue'
    }
}

let A = useTheme(Themes.t1)
const {color} = A

</script>
<h1>Hello World!</h1>	

<button onclick={()=>A.use(Themes.t1)}>Use Theme 1</button>
<button onclick={()=>A.use(Themes.t2)}>Use Theme 2</button>

<style>
    h1{
        color : var(--theme-color);
    }
</style>

```

## Mode 2 : ThemeProvider 