<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { cartstore } from "../stores/CartStore";
// const cake = ref({
//   cakeid: "",
//   name: "",
//   price: "",
// });
var store = cartstore();
var router = useRouter();
var cake1 = ref([]);
var cake2 = {};
var cake3 = {};
var cake4 = {};

cake1.value = store.cartitems;

// axios({
//   method: "post",
//   url: "https://apifromashu.herokuapp.com/api/cakecart",
//   data: cake1.value,

//   headers: {
//     authtoken: localStorage.token,
//   },
// }).then(
//   (response) => {
//     console.log("added to cart", response.data);
//     cake1.value = response.data.data;
//   },
//   (error) => {
//     console.log("error from image upload", error);
//   }
// );

// function del(index) {
//   cake1.value = cakeData.value.filter((s, i) => {
//     if (i != index) {
//       return s;
//     }
//   });
// }

// function removeCart(id) {
//   cake2 = {
//     cakeid: id,
//   };
//   axios({
//     method: "post",
//     url: "https://apifromashu.herokuapp.com/api/removecakefromcart",
//     data: cake2,

//     headers: {
//       authtoken: localStorage.token,
//     },
//   }).then(
//     (response) => {
//       console.log("added to cart", response.data);
//       // cake1.value = cake1.value.filter((m) => m.cakeid !== id);
//       // cake2 = response.data.data;
//       cake1.value.splice(id, 1);
//     },
//     (error) => {
//       console.log("error from image upload", error);
//     }
//   );
// }

// function decrement(index, quantity) {
//   if (quantity <= 0) {
//     cake1.value[index].quantity = 0;
//   } else {
//     cake1.value[index].quantity--;
//   }
// }
// function increase(index) {
//   cake1.value[index].quantity++;
// }

function total() {
  return cake1.value.reduce((total, cake) => {
    return (total += cake.quantity * cake.price);
  }, 0);
}

function addCart(index) {
  var cake4 = {
    cakeid: cake1.value[0].cakeid,
    name: cake1.value[0].name,
    image: cake1.value[0].image,
    price: cake1.value[0].price,
    weight: cake1.value[0].weight,
  };
  axios({
    method: "post",
    url: "https://apifromashu.herokuapp.com/api/addcaketocart",
    data: cake4,

    headers: {
      authtoken: localStorage.token,
    },
  }).then(
    (response) => {
      console.log("added to cart", response.data);
      //cake1.value = cake1.value.filter((m) => m.cakeid !== id);
      // cake2 = response.data.data;
      cake1.value[index].quantity++;
      // cake1.value = cake1.value.filter((m) => m.index !== index);
      // cake4 = response.data.data;
      // router.push("/cart");

      //  if(cake1.value[index].quantity>1){
      // cake1.value[index].quantity++;
      // }else{ cake1.value.splice(index, 1);}
    },
    (error) => {
      console.log("error from image upload", error);
    }
  );
}

// function increase(index) {
//   var ccake = {
//     cakeid: ccart.value[0].cakeid,
//     name: ccart.value[0].name,
//     image: ccart.value[0].image,
//     price: ccart.value[0].price,
//     weight: ccart.value[0].weight,
//   };
//   axios({
//     data: ccake,
//     url: "https://apifromashu.herokuapp.com/api/addcaketocart",
//     method: "post",
//     headers: {
//       authtoken: localStorage.token,
//     },
//   }).then(
//     (response) => {
//       console.log("in increase response", response.data.data);
//       ccart.value[index].quantity++;
//     },
//     (error) => {
//       console.log("error", error);
//     }
//   );

// function removeoneCart(id) {
//   cake3 = {
//     cakeid: id,
//   };

//   axios({
//     method: "post",
//     url: "https://apifromashu.herokuapp.com/api/removeonecakefromcart",
//     data: cake3,

//     headers: {
//       authtoken: localStorage.token,
//     },
//   }).then(
//     (response) => {
//       console.log("added to cart", response.data);
//       cake1.value = cake1.value.filter((ankya) => ankya.cakeid !== id);
//       // cake2 = response.data.data;
//     },
//     (error) => {
//       console.log("error from image upload", error);
//     }
//   );
// }

function removeoneCart(index) {
  var cake4 = {
    cakeid: cake1.value[index].cakeid,
    // name: cake1.value[0].name,
    // image: cake1.value[0].image,
    // price: cake1.value[0].price,
    // weight: cake1.value[0].weight,
  };
  axios({
    method: "post",
    url: "https://apifromashu.herokuapp.com/api/removeonecakefromcart",
    data: cake4,

    headers: {
      authtoken: localStorage.token,
    },
  }).then(
    (response) => {
      console.log("added to cart", response.data);
      //cake1.value = cake1.value.filter((m) => m.cakeid !== id);
      // cake2 = response.data.data;
      if (cake1.value[index].quantity > 1) {
        cake1.value[index].quantity--;
      } else {
        cake1.value.splice(index, 1);
      }
      //  cake1.value = cake1.value.filter((m) => m.index !== index);
      // cake4 = response.data.data;
      // router.push("/cart");
    },
    (error) => {
      console.log("error from image upload", error);
    }
  );
}
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Cakeid</th>
        <th scope="col">Image</th>
        <th scope="col">name</th>
        <th scope="col">price</th>
        <th scope="col">Quantity</th>
        <th scope="col">Subtotal</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(cart, index) in cake1" :key="cart">
        <th scope="row">{{ index + 1 }}</th>
        <!-- <td>{{ cart.cakeid }}</td> -->
        <td><img :src="cart.image" alt="" /></td>
        <td>{{ cart.name }}</td>
        <td>{{ cart.price }}</td>
        <td>{{ cart.quantity }}</td>
        <td>{{ cart.quantity * cart.price }}</td>
      </tr>
    </tbody>
  </table>

  <br /><br />
  <div class="btn-right">Total={{ total() }}</div>
</template>

<style scoped>
img {
  width: 100px;
}
</style>
