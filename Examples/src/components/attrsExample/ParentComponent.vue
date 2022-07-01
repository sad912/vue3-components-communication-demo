<script setup>
import ChildComponent from './ChildComponent.vue'
import {ref} from "vue";

const myMode = ref('learning')
const changeMyMode = mode => {
  myMode.value = mode
}
</script>

<template>
  <ChildComponent :myMode="myMode" :changeMyMode="changeMyMode"/>
</template>