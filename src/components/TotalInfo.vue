<template>
    <table class="totalInfoWrapper">
        <tr class="totalInfo">
            <th v-for="field in getFields"
                :key="field.id"
                :class="field.classes"
                @click="sort(field.id)"
            >{{field.name}}</th>
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
            },
            getFields(){
                return this.$store.state.fields
            }
        },
        methods:{
            sort(fieldName){
                this.$store.dispatch('sort', fieldName)
            }
        }
    }
</script>

<style scoped lang="scss">
    .totalInfoWrapper{
        width: 100%;
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
            cursor: pointer;
        }
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