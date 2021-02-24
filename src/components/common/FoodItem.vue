<template>
  <div class="food-item">
    <img :src="url" :alt="alt">
    <p>{{ name }}</p> 
  </div>
</template>

<script>
export default {
  name: 'FoodItem',
  props: {
    url: String,
    alt: String,
    name: String
  }
}
</script>

<style scoped lang="scss">
.food-item {
  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-bottom: 5px;
  }

  p {
    margin: 0;
    text-align: center;
  }
}
</style>