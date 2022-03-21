<template>
  <child-component-refactor />
</template>

<script>
import ChildComponentRefactor from '@/components/ChildComponentRefactor.vue'

export default {
  name: 'ParentComponent',
  components: {
    ChildComponentRefactor
  }
}
</script>

<style>

</style>