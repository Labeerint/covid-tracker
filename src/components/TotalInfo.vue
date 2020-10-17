<template>
    <table class="totalInfoWrapper">
        <tr class="totalInfo">
            <th class="totalInfo__text">Country</th>
            <th class="totalInfo__text">New Confirmed</th>
            <th class="totalInfo__text">Total Confirmed</th>
            <th class="totalInfo__text">New Deaths</th>
            <th class="totalInfo__text">Total Deaths</th>
            <th class="totalInfo__text">New Recovered</th>
            <th class="totalInfo__text">Total Recovered</th>
        </tr>

        <TotalInfoItem
            v-for="i in getTotalInfo"
            :key="i.CountryCode"
            :info="i"
        />
    </table>
</template>

<script>
    import TotalInfoItem from "./TotalInfoItem";
    export default {
        name: 'TotalInfo',
        components:{
            TotalInfoItem
        },
        computed:{
            getTotalInfo(){
                return this.$store.state.data.Countries
            }
        }
    }
</script>

<style scoped lang="scss">
    .totalInfoWrapper{
        margin: 0 auto;
    }

    .totalInfo{
        /*width: 1000px;*/
        display: flex;
        justify-content: space-around;
        background: #263238;
        align-items: center;
        border-radius: 0px;
        padding: 10px;


        &__text{
            width: 100px;
            text-align: center;
            text-transform: uppercase;
        }
    }
</style>