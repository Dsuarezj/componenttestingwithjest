<template>
  <child-component />
</template>

<script>
import ChildComponent from '@/components/ChildComponent.vue'

export default {
  name: 'ParentComponent',
  components: {
    ChildComponent
  }
}
</script>

<style>

</style>