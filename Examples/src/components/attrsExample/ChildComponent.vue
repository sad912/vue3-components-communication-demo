<script setup>
import {useAttrs} from 'vue'

const attrs = useAttrs()
</script>

<template>
  <span>My mode: {{attrs.myMode}}</span>
  <div>So I am {{$attrs.myMode}}.</div>
  <button @click="attrs.changeMyMode('sleeping')">Sleeping</button>
  <button @click="$attrs.changeMyMode('working')">Working</button>
</template>