<template>
  <div class="v-main-wrapper">
    <v-header></v-header>
    <v-search></v-search>
    <v-suggestion></v-suggestion>
    <v-catalog ></v-catalog>
  </div>
</template>

<script>
import vHeader from './v-header'
import vSuggestion from './v-suggestion'
import vSearch from './v-search'
import vCatalog from './v-catalog'
export default {
  name: 'v-main-wrapper',

  components:{
      vHeader,
      vSuggestion,
      vSearch,
      vCatalog
  },
  data(){
    return{}
  }
}
</script>


<style  lang="scss">
// .v-main-wrapper{
//   max-width: 1001px;
//   margin: 0 auto;
// }

</style>
