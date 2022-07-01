<script setup>
import {getCurrentInstance} from 'vue'

const currentInstance = getCurrentInstance().proxy
const parent = currentInstance.$parent
</script>

<template>
  <span>My mode: {{ $parent.myMode }}</span>
  <div>So, I am {{ parent.myMode }}.</div>
  <button @click="$parent.changeMyMode('working')">Working</button>
  <button @click="parent.changeMyMode('sleeping')">Sleeping</button>
</template>