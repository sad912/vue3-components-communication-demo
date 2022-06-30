# Vue 3 组件通信全解

Vue 的一大特点就是组件化，而组件通信又是组件化最为重要的开发知识，本文对组件通信的方式和使用场景的分类做一个总结。

## 组件通信的方式

### Props 声明

Props 声明的方式是 Vue 中最简单的通信方式。

下面是一个简单的例子：

```other
// @components/PartentComponent.vue

<script setup>
import ChildComponent from './ChildComponent.vue'
import {ref} from "vue";

const myMode = ref('learning')
</script>

<template>
  <ChildComponent :my-mode="myMode"/>
</template>
```

```other
// @/components/ChildComponent.vue

<script setup>
const props = defineProps({
  myMode: {
    type: String,
    require: true
  }
})
</script>

<template>
  <span>My mode: {{ props.myMode }}</span>
</template>
```

1. 使用 Props 最好使用详细的定义 Props 的结构，便于维护和开发
2. 定义 Props 名时使用 camelCase 方式命名，而在祖先对 Props 传参时，使用 kebab-case 方式命名。
3. Props 遵循单向数据流的原则，会因组件组件的更新而变化，后代组件原则上不能修改 prop 的值。
4. 可以利用引用类型的 Props 来实现后代组件修改 prop，算是打破单向数据流原则的一个技巧，但不推荐这样做。
