<template>
    <div class="info">
        <font-awesome-icon @click="globalStatistics" class="global" icon="globe-africa" />
        <span v-show="info.Country==undefined" class="text">World</span>
        <span v-show="info.Country!=undefined" class="text">{{info.Country}}</span>
        <span class="text confirmed">New Confirmed: {{info.NewConfirmed}}</span>
        <span class="text confirmed">Total Confirmed: {{info.TotalConfirmed}}</span>
        <span class="text deaths">New Deaths: {{info.NewDeaths}}</span>
        <span class="text deaths">Total Deaths: {{info.TotalDeaths}}</span>
        <span class="text recovered">New Recovered: {{info.NewRecovered}}</span>
        <span class="text recovered">Total Recovered: {{info.TotalRecovered}}</span>
    </div>
</template>

<script>
    export default {
        name: 'Info',
        props: {
            info:{
                type: Object,
                required: true
            }
        },
        methods:{
            globalStatistics(){
                this.$store.commit('globalStatistic')
            }
        }
    }
</script>

<style scoped lang="scss">
    .info{
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        right: 20px;
        top: 20px;
        color: #fff;
        transition: all .5s;
    }

    .text{
        text-transform: uppercase;
        font-size: 25px;
        font-weight: 700;
        font-family: 'Abril Fatface', serif;
        letter-spacing: 2px;
        display: block;
        margin-top: 20px;
    }

    .global{
        cursor: pointer;
        font-size: 50px;
    }

    .confirmed{
        color: #C10003;
    }

    .deaths{
        color: #000;
    }

    .recovered{
        color:#2AC100;
    }

</style>