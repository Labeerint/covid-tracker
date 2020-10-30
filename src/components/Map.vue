<template>
    <div>
        <GChart
                class="map"
                type="GeoChart"
                :settings="{ 'packages':['geochart'], 'mapsApiKey':'AIzaSyCtuNLusu4ZSp4_rDlfNzmWVC5vqr973U4'}"
                :data="countries"
                :options="chartOptions"
                :events="chartEvents"
        />
    </div>
</template>

<script>
    import { GChart } from 'vue-google-charts'

    export default {
        name: 'Map',
        components: {
            GChart,
        },
        props:['countries'],
        data () {
            return {
                chartEvents: {
                    'regionClick': (region) => {
                        this.$store.commit('changeCurrentCountry', region.region)
                    }
                },
                chartOptions: {
                        backgroundColor: '#5580FF',
                        datalessRegionColor: '#f8bbd0',
                        defaultColor: '#f5f5f5',
                        colorAxis: {colors: ['#CD9300', '#e31b23','#e31b23', '#e31b23','#e31b23','#B51E00','#B51E00', '#941900']},
                        width: 1220,
                        height: 640
                }
            }
        }
    }
</script>

<style>
</style>
