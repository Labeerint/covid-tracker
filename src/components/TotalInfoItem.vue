<template>
    <div class="info">
        <span v-show="info.Country==undefined" class="text">World</span>
        <span v-show="info.Country!=undefined" class="text">{{info.Country}}</span>
        <span class="text">New Confirmed: {{info.NewConfirmed}}</span>
        <span class="text">Total Confirmed: {{info.TotalConfirmed}}</span>
        <span class="text">New Deaths: {{info.NewDeaths}}</span>
        <span class="text">Total Deaths: {{info.TotalDeaths}}</span>
        <span class="text">New Recovered: {{info.NewRecovered}}</span>
        <span class="text">Total Recovered: {{info.TotalRecovered}}</span>
    </div>
</template>

<script>
    export default {
        name: 'TotalInfoItem',
        props: {
            info:{
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .info{
        display: flex;
        flex-direction: column;
    }
</style>