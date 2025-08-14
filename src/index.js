import {ZikoUseRoot} from 'ziko/use/use-root.js'
const useTheme = (Theme, {namespace = ''} = {}) => new ZikoUseRoot(Theme, {namespace});
export{
    useTheme
}