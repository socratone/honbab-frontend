<template>
  <div class="cold-room">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.cold-room {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 10px;
  height: 100vh;
  
  background: url('../../assets/images/refrigerator.png');
  background-size: contain;
  background-repeat: no-repeat;
  // background-position: top center;
  
}
</style>