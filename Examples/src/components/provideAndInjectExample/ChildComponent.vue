<script setup>
import {inject} from "vue"

const {myMode, changeMyMode} = inject('modeObject')
</script>

<template>
  <div>My mode: {{ myMode }}</div>
  <button @click="changeMyMode('working')">Working</button>
</template>