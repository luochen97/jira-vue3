<template>
  <input v-model="text"/>
  <select v-model="id">
    <option value="">负责人</option>
    <option v-for="user in users" :key="user.id" :value="user.id">
      {{user.name}}
    </option>
  </select>
</template>
<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'

export default defineComponent({
  props: {
    users: {
      type: Array,
      default: () => []
    }
  },
  setup(props,{ emit }) {
    const text = ref('')
    const id = ref('')
    // 此处使用了防抖
    watchEffect((onInvalidate) => {
      console.log(text.value, id.value)
      // 每一次触发副作用都会生成一个定时器
      let timeout = setTimeout(() => {
        emit('getList', {
          name: text.value,
          personId: id.value
        })
      }, 1000)
      /*  watchEffect传入回调函数的参数onInvalidate的执行时机
       *  @1.下一次副作用执行之前
       *  @2.组件被卸载或者时侦听被停止
       */
      onInvalidate(() => {
        clearTimeout(timeout)
      })
    })
    return {
      text,
      id
    }
  },
})
</script>
