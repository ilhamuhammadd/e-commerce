<template>
  <div class="card" style="width: 18rem;">
    <img
      class="card-img-top"
      src="https://s2.bukalapak.com/img/2536365353/medium/Apple_Iphone_7__128GB_.jpg.webp"
      alt="Card image cap"
    >
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <p class="card-text">{{product.detail}}</p>
      <p class="card-text">Rp. {{product.price}}</p>
      <router-link :to="'/product/' + product._id" class="btn btn-primary">See Detail</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  name: "product"
};
</script>
