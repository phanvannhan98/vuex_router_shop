<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
@keyframes fadeInOut {
  20% {
    transform: scale(1.1);
  }
  60% {
    transform: scale(0.9);
  }
}
@keyframes fadeOut {
  20% {
    transform: scale(1.1);
  }
  60% {
    transform: scale(0.9);
  }
}
</style>
