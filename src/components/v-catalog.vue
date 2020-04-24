

<style scoped lang="scss">
.v-catalog{
    max-width: 1001px;
    margin: 0 auto;
    margin-top: $margin*3;
    &__list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
<template>
  <div class="v-catalog">
    <div class="v-catalog__list">
      <v-catalog-item
      v-for="product in PRODUCTS"
      :key="product.id"
      :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>

</template>
    
<script>
import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'v-catalog',
  components:{
      vCatalogItem
  },
  data(){
    return{}
  },
  computed:{
      ...mapGetters([
          'PRODUCTS',
          'CART'
      ])
  },
  methods:{
      ...mapActions([
          'GET_PRODUCTS_FROM_API',
          'ADD_TO_CART',
      ]),
      addToCart(data){
          this.ADD_TO_CART(data);
         
      }
  },
  mounted(){
      this.GET_PRODUCTS_FROM_API()
      .then((response)=>{
          if(response.data){
              console.log('Data arrived')
          }
      })
  }
}
</script>

