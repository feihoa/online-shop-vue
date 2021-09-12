<template>
    <div class="v-cart-item">
        <img class="v-catalog-item__image" v-bind:src= "require('../../assets/images/' + cart_item_data.image)" alt="img">
        <div class="v-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="cart_item_data__quantity">
            <p>Qty:</p>
            <span>
                <span class="quantity__btn" @click="decrementItem">-</span>
                {{cart_item_data.quantity}}
                <span class="quantity__btn" @click="incrementItem">+</span>
            </span>
        </div>
        <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>

export default {
    name:"v-cart-item",
    props: {
        cart_item_data: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    data() {
        return {}

    },
    computed: {},
    methods: {
        decrementItem(){
            this.$emit('decrement')
        },
        incrementItem(){
            this.$emit('increment')
        },
        deleteFromCart(){
            this.$emit('deleteFromCart')
        }
    },
}
</script>


<style lang="scss">
    .v-cart-item{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;

        .quantity__btn{
            cursor:pointer;
        }
    }

</style>