<template>
    <div class="basket">
        <div class="container">  
            <div class="title">
              <span>ALIŞVERİŞ SEPETİM</span>
            </div>
            <div class="products">
                <div class="product-item border-top" v-for="item in cart" :key="item.id">
                    <div class="product-img">
                        <img :src="item.ResizedImage">
                    </div>
                    <div class="product-detail">
                        <div class="brand font-weight-bold">{{ (item.Brand).toUpperCase() }}</div>
                        <div class="display-name">{{ item.DisplayName }}</div>
                        <div class="price-area">
                            <div class="discount-rate">-% {{ item.DiscountRate }}</div>
                            <div class="amount">
                                <div class="base-price">
                                    {{ (Math.round((item.OriginalPrice)*100 )/100).toFixed(2)}} TL
                                </div>
                                <div class="sale-price font-weight-bold">
                                    {{ (Math.round((item.SalePrice)*100 )/100).toFixed(2)}} TL
                                </div>
                            </div>
                        </div>
                        <div class="color">
                            <span class="font-weight-bold">Renk</span>
                            <span class="text">{{ item.Color }}</span>
                        </div>
                        <div class="size">
                            <span class="font-weight-bold">Beden</span>
                            <span class="text">{{ item.Size }}</span>
                        </div>
                        <div class="quantity">
                            <span class="font-weight-bold">Adet</span>
                            <span class="text">
                                <select class="form-control" v-model="item.Quantity" :name="'item_'+item.id"
                                v-on:change="selectedQuantity($event,item)" @click="oldSelectionQuantity($event)">
                                    <option v-for="(i) in 10" :key="i" :value="i">
                                        {{ i }} Adet 
                                    </option>
                                </select>
                            </span>
                        </div>
                    </div>
                    <div class="remove-item">
                        <button class="btn btn-outline-danger" @click="removeItem(item)">Sil</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Basket',
  props: ['currency'],
  data() {
      return {
          oldQuantityValue: ""
      }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    selectedCart() {
        return this.$store.state.selectedCart;
    },
    summary() {
      return this.$store.state.summary;
    }
  },
  mounted() {
    this.$store.dispatch("getCart");
  },
   methods: {
       oldSelectionQuantity(oldValue) {
           this.oldQuantityValue = oldValue.target.value;
       },
       selectedQuantity(e,item) {
            let value = e.target.value;
            let perOriginalPrice = item.OriginalPrice/this.oldQuantityValue;
            let perSalePrice = item.SalePrice/this.oldQuantityValue;
            let perDiscountAmount = item.DiscountAmount/this.oldQuantityValue;
            /** update basket price*/
            item.OriginalPrice = perOriginalPrice*value;
            item.SalePrice = perSalePrice*value;
            item.DiscountAmount = perDiscountAmount*value;
            
            this.$store.dispatch("selectedCart", item);
            this.updateSummary(value, perOriginalPrice, perSalePrice, perDiscountAmount);
            

       },
       updateSummary(newQuantity, perOriginal, perSale, perDiscount, isAfterDelete) {
            let TotalAmount = this.summary.TotalAmount; 
            let DiscountAmount = this.summary.DiscountAmount;
            let GeneralTotalAmount = this.summary.GeneralTotalAmount;
            let woSelectedProductAmount = 0;
            let woSelectedProductDiscount = 0;
            let woSelectedProductGeneralTotal = 0;
            if(isAfterDelete) {
                this.summary.TotalAmount = TotalAmount - perOriginal;
                this.summary.DiscountAmount = DiscountAmount - perDiscount;
                this.summary.GeneralTotalAmount = GeneralTotalAmount - perSale;
            } else {
                woSelectedProductAmount = (TotalAmount - (perOriginal*(this.oldQuantityValue)));
                woSelectedProductDiscount = (DiscountAmount - (perDiscount*(this.oldQuantityValue)));
                woSelectedProductGeneralTotal = (GeneralTotalAmount - (perSale*(this.oldQuantityValue)));
                this.summary.TotalAmount = woSelectedProductAmount + (perOriginal*newQuantity);
                this.summary.DiscountAmount = woSelectedProductDiscount + (perDiscount*newQuantity);
                this.summary.GeneralTotalAmount = woSelectedProductGeneralTotal + (perSale*newQuantity);
            }
       },
       removeItem(item) {
            this.$store.dispatch("removeCartItem", item.id);
            this.$store.dispatch("getCart", item);
            this.updateSummary(item.Quantity, item.OriginalPrice, item.SalePrice, item.DiscountAmount, true);

       }
   }
}
</script>

<style lang="scss">
    @import "../assets/scss/basket.scss";
</style>