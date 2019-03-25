<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody v-for="(product, index) in products" v-bind:key="index">
        <tr>
          <th scope="row">{{index+1}}</th>
          <td>{{product.name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.stock}}</td>
          <td>
            <button class="btn btn-primary" v-on:click.prevent="update(product._id)">Edit</button>
          </td>
          <td>
            <button class="btn btn-danger" v-on:click.prevent="deleteproduct(product._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#addproduct"
    >Add Product</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="addproduct"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  v-model="name"
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter name"
                >
              </div>
              <div class="form-group">
                <label for="price">Price</label>
                <input
                  v-model="price"
                  type="number"
                  class="form-control"
                  id="price"
                  placeholder="Price"
                >
              </div>
              <div class="form-group">
                <label for="stock">Stock</label>
                <input
                  v-model="stock"
                  type="number"
                  class="form-control"
                  id="stock"
                  placeholder="Stock"
                >
              </div>
              <div class="form-group">
                  <input type="file" id="file" class="inputFile" ref="imageUrl" v-on:change="handleFileUpload" required/>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button
                  v-on:click.prevent="uploadfile"
                  class="btn btn-primary"
                  data-dismiss="modal"
                >Save changes</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductAdmin",
  data() {
    return {
      name: '',
      price: 0,
      stock: 0,
      imageUrl: '',
      formData: '',
      products: []
    };
  },
  methods: {
    uploadfile() {
        console.log('masok add product')
        let formData = new FormData
        formData.append('name', this.name)
        formData.append('price', this.price)
        formData.append('stock', this.stock)
        formData.append('imageUrl', this.imageUrl)
        console.log(formData)

        axios
            .post('http://localhost:3000/admin/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    token: localStorage.getItem('token')
                }
            })
            .then(data=>{
                this.name = ''
                this.price = ''
                this.stock = ''
                console.log(data)
            })
            .catch(err=>{
                console.log(err)
            })

    },
    handleFileUpload(event) {
        console.log('masok file upload', this.$refs.imageUrl)
        this.imageUrl = this.$refs.imageUrl.files[0]
        console.log('handle file upload', this.imageUrl)

    },
    update(id) {},
    deleteproduct(id) {
      axios
        .delete(`http://localhost:3000/admin/products/${id}`, {
          headers: {
            token: localStorage.getItem("token")
          }
        })
        .then(data => {
          this.$router.push("/admin/products");
          console.log("delete succesfully");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/admin/products", {
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then(({ data }) => {
        console.log(data);
        this.products = data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

