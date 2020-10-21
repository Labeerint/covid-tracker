<template>
  <div id="app">
    <h1 class="title">Covid-19 tracker</h1>
    <div class="routes">
      <router-link class="route route__left" to="/">Map</router-link>
      <router-link class="route route__right" to="/info">TotalInfo</router-link>
    </div>
     <router-view/>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('fetchPosts')
    }
  }
</script>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
  #app {
    font-family: 'Noto Sans JP', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
    background: #5C6BC0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .title{
    text-transform: uppercase;
    font-family: 'Abril Fatface', serif;
    letter-spacing: 2px;
    text-align: left;
    padding: 10px;
  }

  .routes{
    display: flex;
  }

  .route{
    width: 50%;
    height: 50px;
    background: #010056;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Abril Fatface', 'Noto Sans JP', serif;
    font-size: 20px;
    font-weight: 700;
    position: relative;
    overflow: hidden;

    &::after{
      transition: all .2s;
      content: '';
      display: block;
      background: #0400FF;
      height: 100%;
      width: 100%;
      position: absolute;
      opacity: 0.2;
    }

    &__left{
      border-right: 1px solid #000000;

      &::after{
        transform: translateX(-100%);
      }

      &:hover::after{
        transform: translateX(0%);
      }

    }

    &__right{
      border-left: 1px solid #000000;

      &::after{
        transform: translateX(100%);
      }

      &:hover::after{
        transform: translateX(0%);
      }
    }
  }
</style>
