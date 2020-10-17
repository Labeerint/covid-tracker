<template>
    <div>
        <GChart
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
            GChart
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
                    chart: {
                        // region: '002', // Africa
                        colorAxis: {colors: ['#00853f', '#000', '#e31b23']},
                        backgroundColor: '#81d4fa',
                        datalessRegionColor: '#f8bbd0',
                        defaultColor: '#f5f5f5',
                    }
                }
            }
        }
    }
</script>
