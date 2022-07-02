<script setup>
import {getCurrentInstance} from "vue";

const currentInstance = getCurrentInstance().proxy
const root = currentInstance.$root
</script>

<template>
  <span>My mode:{{$root.myMode}}</span>
  <div>So I am {{root.myMode}}</div>
  <button @click="$root.changeMyMode('working')">Working</button>
  <button @click="root.changeMyMode('sleeping')">Sleeping</button>
</template>