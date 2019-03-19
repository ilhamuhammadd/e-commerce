<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <product v-for="product in products" v-bind:product="product" v-bind:key="product._id"/>
      </div>
    </div>
  </div>
</template>

<style>
  .tengah {
    display: flex;
    flex-wrap:wrap;
    flex-direction: row;
  }
</style>


<script>
import fromlocal from "@/api/fromlocal";
import Product from "@/components/Product.vue";

export default {
  name: "AllProduct",
  components: {
    Product
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    fetchProduct() {
      fromlocal
        .get("http://localhost:3000/product")
        .then(({ data }) => {
          console.log(data);
          this.products = data;
          // console.log(this.products)
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.fetchProduct();
  }
};
</script>

      
 <!-- <div class="container">
    <div class="row"> -->
        
      <!-- <div class="col-lg-4" >
      </div>
    </div>
  </div> -->