<script setup>
import ChildComponent from './ChildComponent.vue'
import {onMounted, ref} from "vue"

const child = ref(null)
const showState = ref(false)
onMounted(() => {
  showState.value = true
})
</script>

<template>
  <ChildComponent ref="child"/>
  <template v-if="showState">
    <span>My mode: {{ child.myMode }}</span>
    <div>So I am {{ $refs.child.myMode }}.</div>
    <button @click="child.changeMyMode('sleeping')">Sleeping</button>
    <button @click="$refs.child.changeMyMode('working')">Working</button>
  </template>
</template>