<template>
  <section class="wrap">
    <div v-if="isPreviewMode" class="container">
      <FoodItem 
        v-for="item in items" 
        :key="item.id" 
        :url="item.url"
        :alt="item.name"
        :name="item.name"
      />
    </div>
  </section>
</template>

<script>
import FoodItem from '@/components/common/FoodItem.vue'

export default {
  name: 'Home',
  components: {
    FoodItem
  },
  data() {
    return {
      items: []
    }
  },
  computed: {
    isPreviewMode() {
      if (this.$store.state.refrigerMode === 'preview') return true;
      return false;
    },
    setFoodItems() {

    }
  },
  mounted() {
    this.items = [
      {
        id: 1,
        name: '라면',
        url: 'https://blog.kakaocdn.net/dn/FjpVP/btqIghtnuT1/hSMMXzgdLKdTcneMz5xn3K/img.jpg'
      },
      {
        id: 2,
        name: '밥',
        url: 'https://dimg.donga.com/wps/NEWS/IMAGE/2019/11/25/98513957.1.jpg'
      },
      {
        id: 3,
        name: '라면',
        url: 'https://blog.kakaocdn.net/dn/FjpVP/btqIghtnuT1/hSMMXzgdLKdTcneMz5xn3K/img.jpg'
      },
      {
        id: 4,
        name: '밥',
        url: 'https://dimg.donga.com/wps/NEWS/IMAGE/2019/11/25/98513957.1.jpg'
      }
    ];
    console.log('sdfds')
  }
}
</script>

<style scoped lang="scss">
.wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 10px;
  width: 100vw;
}

.container {
  background: floralwhite;
  border-radius: 12px;
  border: gainsboro 1px solid;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  gap: 10px;
  padding: 10px;
}
</style>