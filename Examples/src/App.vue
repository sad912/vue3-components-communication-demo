<script setup>
import {ref} from "vue";

const myMode = ref('learning')
const changeMyMode = mode => {
  myMode.value = mode
}
defineExpose({myMode, changeMyMode})
</script>

<template>
  <ul>
    <li>
      <router-link to="/props">Props Example</router-link>
    </li>
    <li>
      <router-link to="/emits">Emits Example</router-link>
    </li>
    <li>
      <router-link to="/parent">Parent Example</router-link>
    </li>
    <li>
      <router-link to="/attrs">Attrs Example</router-link>
    </li>
    <li>
      <router-link to="/refs">Refs Example</router-link>
    </li>
    <li>
      <router-link to="/root">Root Example</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>


