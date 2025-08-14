import {ZikoUseRoot} from 'ziko/use/use-root.js'
const useTheme = (Theme, {namespace = ''} = {}) => ZikoUseRoot(Theme, {namespace});
export{
    useTheme
}