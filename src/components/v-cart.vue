

<style scoped lang="scss">
.v-cart{
  &__container{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  &__btn{
    display: flex;
    padding: $padding*2;
    box-shadow: 0 0 8px 0 #e0e0e0;
    width: 15%;
    margin: $margin*3 0;
  }
  &__price{
    color: #f05356;
    font-size: 34px;
    padding: $padding $padding*2 ;
    background-color: forestgreen;
    text-align: center;
  }
  &__zero{
    text-align: center;
    font-size: 30px;
    color: red;
  }

}
</style>
<template>

  <div class="v-cart">
  <vHeader></vHeader>
  <div  class="v-cart__container">
    <router-link class="v-cart__btn" :to="{name:'home'}">
      back to Catalog
    </router-link>
    <!-- <p v-if="!cart_data.length">There are no products</p> -->
    <v-cart-item
    v-for="item in cart_data"
    :key="item.id"
    :cart_item_data="item"

    />
  </div>
  <p v-if="cart_data.length" class="v-cart__price">{{cartTotalCost}} рублей</p>
  <p class="v-cart__zero" v-else> Добавьте товар в корзину</p>
  </div>

</template>

<script>
import vHeader from './v-header'
import vCartItem from './v-cart-item'
export default {
  name: 'v-cart',
  props: {
    cart_data:{
      type: Array,
      default(){
        return [];
      }
    }
  },
  components:{
    vHeader,
    vCartItem
  },
  computed:{
    cartTotalCost(){
		let result = [];
		if(this.cart_data.length){
			for(let item of this.cart_data){
				result.push(item.price *item.quantity);
			}
			result = result.reduce(function(sum,el){
				return sum+el;
			});
			return result;
		}else{
			return 0;
		}
	}
  },
  data(){
    return{}
  }
}
</script>

