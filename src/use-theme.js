const CosmicBlue = {
    background: '#1B2836',
    currentLine: '#223348',
    selection: '#39516D',
    foreground: '#C0D4E5',
    comment: '#728CAB',
    cyan: '#75A6FF',
    green: '#5ED99F',
    orange: '#FFAD6F',
    pink: '#FF90B6',
    purple: '#A889C5',
    red: '#FF6E6E',
    yellow: '#FCD256'
}
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
        //    console.log(`--${this.namespace}-${prop}`)
       }
    }
}


const useTheme = (Theme, namespace) => new ThemesManager(Theme, namespace);

// let A = useTheme(CosmicBlue)