<script setup>
import axios from "axios";
import { ref } from "vue";

import AddCake from "./AddCake.vue";

var cakes = ref([]);
var img = ref([]);
var y = ref("");
// var cake = ref({
//   cakeid: "",
//   name: "",
//   image: "",
//   price: "",
//   description: "",
//   weight: "",
//   type: "",
//   flavour: "",
//   ingredient: "",
// });

// watch(y, (newValue, oldValue) => {
//   console.log("....", newValue, cakes);
//   users.value = allusers.filter((all) => {
//     return (
//       all.cakeid.includes(newValue) ||
//       all.name.toLowerCase().includes(newValue) ||
//       all.image.includes(newValue) ||
//       all.price.includes(newValue) ||
//       all.description.toLowerCase().includes(newValue) ||
//       all.weight.includes(newValue) ||
//       all.type.toLowerCase().includes(newValue) ||
//       all.flavour.toLowerCase().includes(newValue) ||
//       all.ingredient.toLowerCase().includes(newValue)
//     );
//   });
// });

axios({
  method: "get",
  url: "https://apifromashu.herokuapp.com/api/allcakes",
}).then(
  (response) => {
    console.log("response from api", response);
    cakes.value = response.data.data;
  },
  (error) => {
    console.log("error from all cake api", error);
  }
);

// function editCake(m) {
//   cake.value = m;
// }
</script>

<template>
  <h1>Here we show all cakes</h1>
  <table class="table">
    <thead>
      <tr>
        <th>index</th>
        <th class="abc">Recently Added Cake</th>
        <th>price</th>
      </tr>

      <tr v-for="c in cakes" :key="c" class="table-danger">
        <td>{{ c.cakeid }}</td>
        <td><img :src="c.image" class="aaa" /></td>
        <td scope="col">{{ c.name }}</td>
        <td scope="col">{{ c.price }}</td>
        <td>
          <router-link :to="`/edit/${c.cakeid}`" class="btn btn-danger">
    Edit</router-link>
        </td>
<!-- 
        <td>
          <router-link to="/addcake" class="btn btn-danger"
            >Edit</router-link
          >
        </td> -->


       
      </tr>
    </thead>
  </table>
</template>

<style scoped>
.aaa {
  width: 200px;
  height: 200px;
}
</style>
