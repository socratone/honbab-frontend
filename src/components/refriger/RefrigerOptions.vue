<template>
  <div v-if="isSetMode" class="container">
    <button @click="selectPreviewAllMode">① 있는 재료로 뭘 만들 수 있나요?</button>
    <button @click="selectIngredientsMode">② 재료부터 골라볼래요</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    isSetMode() {
      return !this.$store.state.refrigerMode;
    }
  },
  methods: {
    selectPreviewAllMode() {
      this.$store.commit('setRefrigerMode', 'preview');
    },
    selectIngredientsMode() {
      this.$store.commit('setRefrigerMode', 'ingredients');
    }
  },
  beforeUnmount() {
    this.$store.commit('setRefrigerMode', '');
  }
}
</script>

<style scoped lang="scss">
.container {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 10px 10px 10px;
}

button {
  width: 100%;
  text-align: left;
  background: floralwhite;
  border-radius: 12px;
  border: gainsboro 1px solid;
  padding: 10px;
  margin-bottom: 10px;
}

button:last-child {
  margin-bottom: 0;
}
</style>
