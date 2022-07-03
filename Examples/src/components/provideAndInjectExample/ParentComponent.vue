<script setup>
import ChildComponent from './ChildComponent.vue'
import {provide, ref} from "vue"

const myMode = ref('learning')
const changeMyMode = mode => {
  myMode.value = mode
}
provide('modeObject', {
  myMode,
  changeMyMode
})

</script>
<template>
  <ChildComponent></ChildComponent>
</template>