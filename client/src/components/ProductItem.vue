<template>
    <div class="container">
      <div class="row">
        <div class="card" style="width: 18rem;">
          <img
            class="card-img-top"
            src="https://s2.bukalapak.com/img/2536365353/medium/Apple_Iphone_7__128GB_.jpg.webp"
            alt="Card image cap"
          >
          <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">{{product.detail}}</p>
            <p class="card-text">{{product.price}}</p>
            <a v-on:click="addToCart(product._id)"> Buy
              <router-link to="/shoppingcart">Buy</router-link>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import fromlocal from "@/api/fromlocal.js";

export default {
  name: "productdetails",
  data() {
    return {
      product: {}
    };
  },
  methods: {
    getProductItem() {
      fromlocal
        .get(`/product/${this.$route.params.id}`)
        .then(({ data }) => {
          //   console.log(data);
          this.product = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    addToCart(productId) {
      fromlocal
        .put("/user/update",{productId: productId}, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response=>{
          console.log(response)
        })
        .catch(err=>{
          console.log(err)
        })
    }
  },
  mounted() {
    this.getProductItem();
  }
};
</script>
