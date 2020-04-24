

<style scoped lang="scss">
.v-header{
    display: flex;
    background-color: $header-bgc;
    &__link{
        width: 1001px;
        margin: auto;
        display: flex;
        justify-content: flex-end;
        &-item{
            list-style-type: none;
            color:#fff;
            font-size: 20px;
            margin: 4px 0;
            padding-left: 20px;
        }
    }
}
</style>
<template>
  <div class="v-header">
    <ul class="v-header__link">
        <li class="v-header__link-item">Sign in </li>
        <li class="v-header__link-item">My Account</li>
        <li class="v-header__link-item">Order Status</li>
        <li class="v-header__link-item">Help</li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'v-header',
  props: {
    msg: String
  },
  components:{

  },
  data(){
    return{}
  }
}
</script>