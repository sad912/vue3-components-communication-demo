# Vue 3 组件通信全解

Vue 的一大特点就是组件化，而组件通信又是组件化最为重要的开发知识，本文对组件通信的方式和使用场景的分类做一个总结。

## 组件通信的方式

1. ### Props 声明

Props 声明的方式是 Vue 中最简单的通信方式。

下面是一个简单的例子：

```other
// @components/propsExample/PartentComponent.vue

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
// @/components/propsExample/ChildComponent.vue

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

注意事项：

1. 最好使用详细的定义 Props 的结构，便于维护和开发。
2. 定义 Props 名时使用 camelCase 方式命名，而在祖先对 Props 传参时，使用 kebab-case 方式命名。
3. Props 遵循单向数据流的原则，会因组件组件的更新而变化，后代组件原则上不能修改 prop 的值。
4. 可以利用引用类型的 Props 来实现后代组件修改 prop，算是打破单向数据流原则的一个技巧，但不推荐这样做。
5. 可以配合 `v-model` 进行隐式传递 prop。
2. ### Emits 事件

监听和触发事件的方式也是比较常用的组件通信的方式。

下面是一个简单的例子：

```other
// @/components/emitsExample/ParentComponent.vue

<script setup>
import ChildComponent from './ChildComponent.vue'
import {ref} from "vue";

const myMode = ref('learning')
const changeMyMode = mode => {
  myMode.value = mode
}
</script>

<template>
  <ChildComponent :my-mode="myMode" @change-my-mode="changeMyMode"/>
</template>
```

```other
// @/components/emitsExample/ChildComponent.vue

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
```

注意事项：

1. 最好使用详细的定义 Emits 的结构，同时尽可能的进行校验，便于维护和开发。
2. 定义 Emits 名时使用 camelCase 方式命名，而在祖先对 Emits 监听时，使用 kebab-case 方式命名。
3. Emits 的校验函数无论是使用 `$emit()` ，还是使用`defineProps()` 方式触发事件，都会执行校验函数。
4. 可以配合 `v-model` 进行隐式传递事件。