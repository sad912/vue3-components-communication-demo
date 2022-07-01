<script setup>
import ChildComponent from './ChildComponent.vue'
import {ref} from "vue";

const myMode = ref('learning')
const changeMyMode = mode => {
  myMode.value = mode
}
defineExpose({myMode, changeMyMode})
</script>

<template>
  <ChildComponent/>
</template>