import {defineStore} from "pinia"

export const useModeStore = defineStore('mode', {
    state: () => {
        return {
            myMode: 'learning',
        }
    },
    getters: {
        getMyMode: state => state.myMode
    },
    actions: {
        changeMyMode(mode) {
            this.myMode = mode
        }
    }
})