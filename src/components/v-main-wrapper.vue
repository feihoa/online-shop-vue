<template>
    <div class="v-main-wrapper">
        <h1 class="v-main-wrapper__title">{{title}}</h1>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>


export default{
    name: "v-main-wrapper",
    props:{
            },
    data(){

       return {
           title: "Buy our T-Shirt!"
       }
    },
    computed: {},
    methods:{


    },
    watch: {},
}
</script>


<style lang="scss">
    .v-main-wrapper{
        
        max-width: 900px;
        margin: 0 auto;
        &__title{
            font-size: 40px;
            max-width: fit-content;
            margin: 0 auto;
            border: 2px dashed $green-bg;
            text-transform: uppercase;
            padding: $padding;
            margin-top: -57px;
        }
    }
</style>