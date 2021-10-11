<template>
    <search-box :users="state.users" @getList="getList"/>
    <List :lists="state.lists" :users="state.users"/>
</template>
<script lang="ts">
import { defineComponent, reactive, watchEffect} from 'vue'
import SearchBox from '@/components/screen/project-list/searchBox.vue'
import List from '@/components/screen/project-list/list.vue'
import { clearObject } from '@/utils/utils.ts'
import qs from 'qs'
interface Params{
  (params?: Object): void
}
export default defineComponent({
  components: { SearchBox, List},
  setup() {
    let state = reactive({
      lists: [],
      users: []
    })
    const getList:Params = (params) =>  {
      fetch(`http://localhost:3030/list?${qs.stringify(clearObject(params))}`, {
        method: 'GET'
      }).then(async data => {
        state.lists = await data.json()
      })
    }
    watchEffect(() => {
      fetch('http://localhost:3030/user?', {
        method: 'GET'
      }).then(async data => {
        state.users = await data.json()
      })
    })
    return {
      state,
      getList
    }
  },
})
</script>
