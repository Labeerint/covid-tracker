<template>
    <div class="map">
        <Map
                :countries="getMapCountries"
        />
        <Info
                :info="getCurrentInfo"
        />
    </div>
</template>

<script>
    import Map from "./Map";
    import Info from "./Info"
    export default {
        name: 'MapWrapper',
        components:{
            Map,
            Info
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

<style>
    .map{
        position: relative;
        display: flex;
    }
</style>