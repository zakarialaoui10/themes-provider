class ThemesManager {
    constructor(Theme, namespace = 'Ziko'){
        this.currentTheme = Theme;
        this.namespace = namespace
        this.#maintain()
    }
    use(Theme){
        this.currentTheme = Theme;
    }
    #maintain(){
       const root = globalThis?.document?.documentElement?.style
       for(let prop in this.currentTheme){
           root.setProperty(`--${this.namespace}-${prop}`, this.currentTheme[prop]); 
       }
    }
}
const useTheme = (Theme, namespace) => new ThemesManager(Theme, namespace);
