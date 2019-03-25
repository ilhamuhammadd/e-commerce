<template>
  <div class="container">
    <div class="row">
        <AllProduct v-for="product in products" v-bind:product="product" v-bind:key="product._id" />
    </div>
  </div>
</template>

<script>

import axios from "axios";
import AllProduct from "@/components/AllProduct.vue";

export default {
  name: "Product",
  components: {
    AllProduct
  },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/user/products", {
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then(({ data }) => {
        this.products = data;
        // console.log(this.products);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

