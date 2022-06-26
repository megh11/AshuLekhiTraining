<script setup>
import axios from "axios";
import { ref } from "vue";

var cakeOrder = ref([]);
axios({
  method: "post",
  url: "https://apifromashu.herokuapp.com/api/cakeorders",
  data: cakeOrder.value,
  headers: {
    authtoken: localStorage.token,
  },
}).then(
  (response) => {
    console.log(response.data);
    cakeOrder.value = response.data.cakeorders;
    console.log(cakeOrder.value);
  },
  (error) => {
    error;
  }
);
</script>
<template>
  <h1>Orders</h1>
  <!-- <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">Image</th>
        <th scope="col">weight</th>
        <th scope="col">quantity</th>
        <th scope="col">price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(order, index) in cakeOrder" :key="order">
        <th scope="row">{{ index + 1 }}</th>
        <td>
          <li v-for="cake in order.cakes" :key="cake">
            <table>
              <td>{{ cake.name }}</td>
               <td><img :src="cake.image" alt="" /></td>
              <td>{{ cake.weight }}</td>
              <td>{{ cake.quantity }}</td>
              <td>{{ cake.price }}</td>
            </table>
          
   
    </tbody>
  </table> -->

  <table class="table">
    <thead>
      <tr>
        <th scope="col">Cakeid</th>
        <th scope="col">Name</th>
        <th scope="col">Date</th>
        <th scope="col">Address</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(order, index) in cakeOrder" :key="order">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ order.name }}</td>
        <td>{{ order.orderdate }}</td>
        <td>
          {{ order.address }} Pincode : {{ order.pincode }} Contact :
          {{ order.phone }}
        </td>
        <td>{{ order.price }}</td>

        <td>
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Details
          </button>
          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog ">
              <div class="modal-content abc">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Cake details
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="container">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Cake Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Weight</th>
                        <th scope="col">SubTotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="cake in order.cakes" :key="cake">
                        <td><img :src="cake.image" alt="" /></td>
                        <td>{{ cake.name }}</td>
                        <td>{{ cake.price }}</td>
                        <td>{{ cake.quantity }}</td>
                        <td>{{ cake.weight }}</td>
                        <td>{{ cake.quantity * cake.price }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
img {
  width: 180px;
  height: 100%;
}

.abc {
  width: 600px;
 
}
</style>
