<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12" v-for="(abc, index) in cartlist" :key="index">
        <ul class="list-group">
          <li class="list-group-item">{{abc.name}}</li>
          <li class="list-group-item">{{abc.price}}</li>
          <li class="list-group-item">{{abc.detail}}</li>
        </ul>
      </div>
       <p>You have to pay this items: {{total}}</p>
    </div>
  </div>
</template>


<script>
import fromlocal from "@/api/fromlocal.js";

export default {
  name: "shopping-cart",
  data() {
    return {
      total: 0,
      cartlist: []
    };
  },
  methods: {
    fetchCart() {
      fromlocal
        .get("user/getCart", {
          headers: {
            token: localStorage.getItem("token")
          }
        })
        .then(({ data }) => {
          // console.log(data.productId)
          data.productId.forEach(e=>{
              this.total+= e.price
          })
        //   console.log(this.total)
          this.cartlist = data.productId;
        });
    }
  },
  mounted() {
    this.fetchCart();
  }
};
</script>

