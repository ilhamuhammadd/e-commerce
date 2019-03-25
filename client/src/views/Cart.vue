<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3" v-for="(cart, index) in carts" v-bind:key="index">
        <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{cart.name}}</li>
            <li class="list-group-item">{{cart.price}}</li>
            <li class="list-group-item">{{cart.stock}}</li>
            <li class="list-group-item">
                <img :src="cart.imageUrl" style="width: 40px; height: 30px;">
            </li>
            <li class="list-group-item">
                <button class="btn btn-primary">Pay</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {
      carts: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/user/products/cart", {
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then(({ data }) => {
        this.carts = data.products;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
