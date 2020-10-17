<template>
    <div class="totalInfo">
        <TotalInfoItem
            v-for="i in getTotalInfo"
            :key="i.CountryCode"
            :info="i"
        />
    </div>
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