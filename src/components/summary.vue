<template>
    <div class="summary">
        <div class="container">  
          <div class="border-bottom pb-2">
              <span>SEPET ÖZETİ</span>
          </div>
          <div class="summary-detail">
              <div>
                  <span class="title">Toplam Tutar (KDV Dahil)</span>
                  <span class="font-weight-bold float-right">{{ (Math.round((summary.TotalAmount)*100 )/100).toFixed(2) }} TL</span>
              </div>
              <div>
                  <span class="title">Etiket İndirimi</span>
                  <span class="font-weight-bold float-right">{{ (Math.round((summary.DiscountAmount)*100 )/100).toFixed(2) }} TL</span>
              </div>
              <div>
                  <span class="title">Kargo Ücreti</span>
                  <span class="font-weight-bold float-right">{{ (Math.round((summary.CargoAmount)*100 )/100).toFixed(2) }} TL</span>
              </div>
          </div>
          <div class="general-total-amount border-top">
              <div>
                  <span class="title">Ödenecek Tutar</span>
                  <span class="font-weight-bold float-right">{{ (Math.round((summary.GeneralTotalAmount)*100 )/100).toFixed(2) }} TL</span>
              </div>
              <button class="btn btn-dark">DEVAM ET</button>
          </div>

        </div>
      </div>
</template>

<script>
export default {
  name: 'Summary',
  computed: {
    summary() {
      return this.$store.state.summary;
    }
  },
  mounted() {
    this.$store.dispatch("getSummary");
  }
}
</script>

<style lang="scss">
    @import "../assets/scss/summary.scss";
</style>