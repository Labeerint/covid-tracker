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
        name: 'Info',
        props: {
            info:{
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .info{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: rgba(255,255,255,0.7);
        width: 380px;
        height: 300px;
        border-radius: 10px;
        padding: 10px;
        position: fixed;
        right: 20px;
        top: 20px;
        color: #000;
        transition: all .5s;

        &:hover{
            background: rgba(255,255,255,0.2);
        }
    }

    .text{
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 700;
        font-family: 'Abril Fatface';
        letter-spacing: 2px;

    }

</style>