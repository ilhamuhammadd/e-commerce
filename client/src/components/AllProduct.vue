<template>
  <div class="col-sm-3">
    <div class="card-deck">
      <div class="card">
        <img :src="product.imageUrl" class="card-img-top" alt>
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">${{ product.price }}</p>
          <p class="card-text">Stock: {{product.stock }}</p>
          <!-- Button trigger modal -->
          <router-link
            :to="'/user/product/' + product._id"
            data-toggle="modal"
            data-target="#addproduct"
          >See Detail</router-link>
          <a v-on:click="addToCart(product._id)">
              <router-link to="/user/cart">Buy</router-link>
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

body {
    /* background-color: blue; */
}

</style>


<script>
export default {
  props: ["product"],
  data() {
      return {
         
      }
  },
  methods: {
      addToCart(id) {
          axios
            .put('http://localhost:3000/user/products', {_id: id}, {
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(data=>{
                console.log('succes')
            })
            .catch(err=>{
                console.log(err)
            })
      }
  }
};
</script>
