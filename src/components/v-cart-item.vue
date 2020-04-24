

<style scoped lang="scss">
.v-cart-item{

        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;
          display: flex;
    justify-content: space-around;
    align-items: center;
        margin-right: $margin;
        &__image{
            width: 98px;
            height: 149px;
            margin-bottom: 17px;
        }
        &__name{
           
            color:#595959;
            font-size: 15px;
            height: 65px;   
        }
        &__price{
            color:#f05356;
            font-size: 22px;

        }

}
</style>
<template>

  <div class="v-cart-item">

  <img class="v-cart-item__image" :src=" require('../assets/bookimg/'+cart_item_data.image)" alt="img">
<div class="v-cart-item__name">{{cart_item_data.name}}</div>
<div class="v-cart-item__price">{{cart_item_data.price}} Р</div>
    
  </div>

</template>

<script>

export default {
  name: 'v-cart-item',
  props: {
        cart_item_data:{
        type: Object,
        default(){
            return{}
        }
    }
  },
  components:{
 
  },
  data(){
    return{}
  }
}
</script>

