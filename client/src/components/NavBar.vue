<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Admin</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/home">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/products">Products</router-link>
        </li>
      </ul>
      <!-- Button trigger modal -->
      <button v-show="isLogin" type="button" class="btn btn-primary" data-toggle="modal" data-target="#login">Login</button>
      <button v-show="!isLogin" @click.prevent="logout" class="btn btn-primary" >Logout</button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="login"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5  class="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input
                    v-model="username"
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Enter username"
                  >
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                  >
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button v-on:click.prevent="login" class="btn btn-primary" data-dismiss="modal">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import axios from "@/api/axios.js";
import axios from 'axios';

export default {
  name: "NavBar",
  data() {
    return {
      username: "",
      password: "",
      token: "",
      isLogin: true
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:3000/admin/signin", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          // this.isLogin = true
          this.username = ""
          this.password = ""

          localStorage.setItem('token', res.data.token)
          this.$router.push('/admin/home')
        })
        .catch(err => {
          console.log(err);
        });
    },
    logout() {
      let token = localStorage.removeItem('token')
      // this.token = true
      if (!token) {
        this.isLogin = true
      }
      this.$router.push('/')
    }
  },
  updated() {
    let token = localStorage.getItem('token')
    if (token) {
      this.isLogin = false
    } else {
      this.isLogin = true
    }
  }
};
</script>

