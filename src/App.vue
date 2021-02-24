<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/refriger">나의 냉장고</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
html {
  font-size: 62.5%;
}

body {
  margin: 0;
  font-size: 1.8rem;
}

* {
  box-sizing: border-box;
  line-height: 1.5;
}

h1 {
  font-size: 2.5rem;
}

button {
  font-size: 1.8rem;
}

img {
  display: block;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  height: 50px;
  background: plum;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
