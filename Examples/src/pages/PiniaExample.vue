<script setup>
import {storeToRefs} from 'pinia'
import {useModeStore} from '@/stores/mode.js'

const modeStore = useModeStore()
const {myMode} = storeToRefs(modeStore)
const mutateState = (mode) => {
  modeStore.$patch(state => {
    state.myMode = mode
  })
}
const changeMyMode = (mode) => {
  modeStore.changeMyMode(mode)
}
const resetState = () => {
  modeStore.$reset()
}
</script>

<template>
  <div>My mode: {{ myMode }}</div>
  <div>So my mode is {{ modeStore.getMyMode }}.</div>
  <button @click="mutateState('working')">Working</button>
  <button @click="changeMyMode('sleeping')">Sleeping</button>
  <button @click="resetState()">Reset</button>
</template>