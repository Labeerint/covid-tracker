<template>
    <tr class="info">
        <td class="text">{{info.Country}}</td>
        <td class="text">{{info.NewConfirmed}}</td>
        <td class="text">{{info.TotalConfirmed}}</td>
        <td class="text">{{info.NewDeaths}}</td>
        <td class="text">{{info.TotalDeaths}}</td>
        <td class="text">{{info.NewRecovered}}</td>
        <td class="text">{{info.TotalRecovered}}</td>
    </tr>
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
        justify-content: space-around;
        text-transform: uppercase;
        background: #4A5AB9;
        margin-top: 10px;
        padding: 10px;
    }

    .text{
        width: 110px;
    }
</style>