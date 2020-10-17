<template>
  <div id="app">
    <div class="map">
      <Map
        :countries="getMapCountries"
      />
    </div>
    <Info
      :info="getCurrentInfo"
    />
    <div class="allCountries">
      Allcountries
    </div>
    <TotalInfo/>
  </div>
</template>

<script>
  import Map from "./components/Map";
  import Info from "./components/Info"
  import TotalInfo from "./components/TotalInfo";
  export default {
    components:{
      Map,
      Info,
      TotalInfo
    },
    mounted() {
      this.$store.dispatch('fetchPosts')
    },
    computed:{
      getCurrentInfo(){
        return this.$store.state.currentInfo
      },
      getMapCountries(){
        return this.$store.state.mapCountries
      }
    }
  }
</script>


<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .map{
    outline: 1px solid red;
  }
</style>
