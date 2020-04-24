

<style scoped lang="scss">
.v-catalog-item{
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;
        text-align: center;
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
        &__btn{
            padding: $padding $padding*2;
            background-color: red;
            color:#fff;
            border-radius: $radius;
        }
}
.v-catalog-item:nth-child(3n){
    margin-right:0px ;
}

</style>
<template>
  <div class="v-catalog-item">
<img class="v-catalog-item__image" :src=" require('../assets/bookimg/'+product_data.image)" alt="img">
<div class="v-catalog-item__name">{{product_data.name}}</div>
<div class="v-catalog-item__price">{{product_data.price}} Р</div>
<button class="v-catalog-item__btn"
        @click="addToCart"
        >ADD</button>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    product_data:{
        type: Object,
        default(){
            return{}
        }
    }
  },
  components:{

  },
  methods:{
      addToCart(){
          this.$emit('addToCart',this.product_data);
      }
  },
  mounted(){
      this.$set(this.product_data, 'quantity',1)
  },
  data(){
    return{}
  }
}
</script>

