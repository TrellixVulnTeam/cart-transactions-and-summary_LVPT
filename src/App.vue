<template>
  <div id="app">
    <Header></Header>
    <div class="basket-area container">
        <div class="basket-content col-md-8">
            <Basket :currency="this.$store.state.currency"></Basket>
        </div>
        <div class="summary-content col-md-4">
            <Summary></Summary>
        </div>
    </div>
    
  </div>
</template>

<script>
import Header from './components/header.vue'
import Basket from './components/basket.vue'
import Summary from './components/summary.vue'

export default {
  name: 'App',
  components: {
    Header,
    Basket,
    Summary
  },
  computed: {
    currency() {
      return this.$store.state.currency;
    }
  },
  mounted() {
    this.$store.dispatch("currency");
  }
}
</script>

<style lang="scss">
    @import "./assets/scss/app.scss";
</style>
