<template>
  <div>
    <slot name="title"></slot>
    <Articles :removed="removed" @add-removed="removed.push($event)"/>
    <Basket @remove-removed="removeFromRemoved"/>
  </div>
</template>

<script>

import Articles from "@/components/Articles";
import Basket from "@/components/Basket";

  export default {
    name: 'Library',
    components: {
      Articles,
      Basket,
    },
    data: () => ({
      removed: [], // contains virus that have been removed from the original list
    }),
    methods: {
      removeFromRemoved(virus) {
        // Warning : since the basket contains clone of viruses from collec
        // we have to match the clone and the orginal, e.g. with their idconsole.log("udpate removed"+JSON.stringify(virus))
        let idx = this.removed.findIndex(v => v._id===virus._id)
        console.log(idx)
        if (idx !== -1) this.removed.splice(idx,1)
      }
    }
  }
</script>

<style scoped>
</style>
