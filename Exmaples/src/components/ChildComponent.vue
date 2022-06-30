<script setup>
const props = defineProps({
  myMode: {
    type: String,
    require: true
  }
})
const emit = defineEmits({
  changeMyMode: mode => {
    // 只做简单的字符串类型判断用于示例
    if (typeof mode === "string") {
      console.log('The type of mode is legal.')
      return true
    } else return false
  }
})
</script>

<template>
  <span>My mode: {{ props.myMode }}</span>
  <div>change my mode</div>
  <button @click="$emit('changeMyMode', 'working')">Working</button>
  <button @click="emit('changeMyMode','sleeping')">Sleeping</button>
</template>