<template>
    <table class="totalInfoWrapper">
        <tr class="totalInfo">
            <th v-for="field in getFields"
                :key="field.id"
                :class="field.classes"
            >{{field.name}}
                <div class="arrows">
                    <font-awesome-icon class="arrows__item" @click="sortUp(field.id)" icon="angle-up"/>
                    <font-awesome-icon class="arrows__item" @click="sortDown(field.id)" icon="angle-down"/>
                </div>
            </th>
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
            sortUp(fieldName){
                this.$store.dispatch('sort', {fieldName, n1:-1, n2:1})
            },
            sortDown(fieldName){
                this.$store.dispatch('sort', {fieldName, n1:1, n2:-1})
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
            cursor: default;
            display: flex;
            align-items: center;
        }
    }

    .arrows{
        margin-left: 10px;
        cursor: pointer;

        &__item{
            font-size: 30px;
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