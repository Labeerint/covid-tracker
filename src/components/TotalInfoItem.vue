<template>
    <tr class="info">
        <td class="text ">{{info.Country}}</td>
        <td class="text confirmed">{{info.NewConfirmed}}</td>
        <td class="text confirmed">{{info.TotalConfirmed}}</td>
        <td class="text deaths">{{info.NewDeaths}}</td>
        <td class="text deaths">{{info.TotalDeaths}}</td>
        <td class="text recovered">{{info.NewRecovered}}</td>
        <td class="text recovered">{{info.TotalRecovered}}</td>
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

<style scoped lang="scss">
    .info{
        display: flex;
        justify-content: space-around;
        text-transform: uppercase;
        background: #4A5AB9;
        margin-top: 10px;
        padding: 10px;
        transition: all .5s;
        cursor: default;

        &:hover{
            background: #3C4A97;
        }
    }

    .text{
        width: 110px;
        font-weight: 700;
        -webkit-text-stroke: .07em rgba(0,0,0,.5);
    }

    .confirmed{
        color: #FF1100;
    }

    .deaths{
        color: #000;
    }

    .recovered{
        color:#2BFF00;
    }
</style>