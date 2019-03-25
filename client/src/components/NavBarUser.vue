<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Just an image -->
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1482132470/vfmmn0twb17nn2epblee.png" width="50" height="50" alt>
      </a>
    </nav>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/user/home" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/user/register" class="nav-link">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/user/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="#">Products</a> -->
          <router-link to="/user/products" class="nav-link">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/user/cart" class="nav-link">Shopping Cart</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>


<script>
export default {
  name: "NavBarUser",
  props: {
    msg: String
  }
};
</script>