<template>
  <div id="app">
    <div class="cover">
      <div class="cover-img"></div>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  // overflow: hidden;
}
#app {
  margin: 0 auto;
  width: 1050px;
  .cover {
    width: 100vw;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    z-index: -9999;
    @keyframes coverZoom {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
    }
    .cover-img {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background: url(./assets/LAN299501.jpg) center no-repeat;
      background-size: cover;
      background-attachment: fixed;
      animation: coverZoom 30s linear infinite;
      transform-origin: 48% 60%;
      z-index: -9998;
    }
  }
}
</style>
