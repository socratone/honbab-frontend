<template>
  <main class="refriger">
    <ColdRoom>
      <h1>냉장실</h1>
      <RefrigerOptions/>
      <RefrigerPreview/>
    </ColdRoom>
  </main>
</template>

<script>
import RefrigerOptions from '@/components/refriger/RefrigerOptions.vue';
import RefrigerPreview from '@/components/refriger/RefrigerPreview.vue';
import ColdRoom from '@/components/refriger/ColdRoom.vue';

export default {
  name: 'Refriger',
  components: {
    RefrigerOptions,
    RefrigerPreview,
    ColdRoom
  }
}
</script>

<style lang="scss">
.refriger {
  
}
</style>
