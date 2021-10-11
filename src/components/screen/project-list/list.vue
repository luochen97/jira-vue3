<template>
  <table>
    <thead>
      <tr>
        <th>项目</th>
        <th>负责人</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(list, index) in lists" :key="index">
        <td>{{list.name}}</td>
        <td>{{ users.filter(user => user.id === list.personId)[0]?.name || '未知'}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    lists: {
      type: Array,
      default: () => []
    },
    users: {
      type: Array,
      default: () => []
    }
  },
  setup() {
  
  },
})
</script>
