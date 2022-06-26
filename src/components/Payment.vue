<script setup>
import { Address } from "../stores/Address.js";
import { cartstore } from "../stores/CartStore";
import { computed, ref } from "vue";
import axios from "axios";
var cStore = cartstore();
var aStore = Address();
var cake1 = ref([]);
// var amount = computed(() => {
var sum = cStore.cartitems.reduce((a, b) => {
  return (a += b.price * b.quantity);
}, 0);

console.log(sum);
//   return sum;
// });
function placeOrder() {
  var data = { ...aStore.useraddress, price: sum, cakes: cStore.cartitems };
  console.log("data", data);
  axios({
    method: "post",
    url: "https://apifromashu.herokuapp.com/api/addcakeorder",
    data: data,
    headers: {
      authtoken: localStorage.token,
    },
  }).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
}
</script>
<template>
  <h1>Payment</h1>
  <!-- <div class="row">
    <div class="col-md-6">Payment Mode</div>
    <div class="col-md-6">Cash on Delivery</div>
    <div class="col-md-12">
      <button class="btn btn-success btnright" @click="placeOrder">Place order</button>
    </div>
  </div> -->

  <div class="container d-flex justify-content-center mt-5">
    <div class="card">
      <div>
        <div class="d-flex pt-3 pl-3">
          <div>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/visa.png"
              width="60"
              height="80"
            />
          </div>
          <div class="mt-3 pl-2" v-for="cart in cakes" :key="cart">
            <!-- <span class="name">name={{ useraddress.name }}</span> -->
            <div>
              <!-- <span class="cross"></span><span class="pin ml-2">8880</span> -->
            </div>
          </div>
        </div>
        <div class="py-2 px-3">
          <div class="first pl-2 d-flex py-2">
            <div class="form-check">
              <input
                type="radio"
                name="optradio"
                class="form-check-input mt-3 dot"
                checked
              />
            </div>
            <div class="border-left pl-2">
              <span class="head">total bill {{ sum }}</span>
              <div>
                <!-- <span class="dollar">$</span><span class="amount">8245</span> -->
              </div>
            </div>
          </div>
        </div>
        <div class="py-2 px-3">
          <div class="second pl-2 d-flex py-2">
            <div class="form-check">
              <input
                type="radio"
                name="optradio"
                class="form-check-input mt-3 dot"
              />
            </div>
            <div class="border-left pl-2">
              <span class="head">Other amount</span>
              <div class="d-flex">
                <span class="dollar">$</span
                ><input
                  type="text"
                  name="text"
                  class="form-control ml-1"
                  placeholder="0"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between px-3 pt-4 pb-3">
          <div><span class="back">Go back</span></div>
          <button
            type="button"
            class="btn btn-primary button"
            @click="placeOrder"
          >
            Pay amount
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btnright {
  margin-top: 30px;
  margin-left: 700px;
}
</style>
