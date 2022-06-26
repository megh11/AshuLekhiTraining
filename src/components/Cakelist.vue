<script setup>
import axios from "axios";
import { ref } from "vue";
import Loader from "./Loader.vue";
import Cake from "./Cake.vue";

var cakes = ref([]);
var loader = ref(false);
var img = ref([]);

loader.value = true;

axios({
  method: "get",
  url: "https://apifromashu.herokuapp.com/api/allcakes",
}).then(
  (response) => {
    console.log("response from api", response);
    cakes.value = response.data.data;
    loader.value = false;

  },
  (error) => {
    console.log("error from all cake api", error);
    loader.value = false;

  }
);
</script>

<template>
  <h1>Here we show all cakes</h1>
  <!-- <table class="table">
    <thead>
      <tr>
        <th>index</th>
        <th class="abc">Recently Added Cake</th>
        <th>price</th>
      </tr>

      <tr v-for="(c, index) in cakes" :key="c" class="table-danger">
        <td>{{ c.cakeid }}</td>
        <router-link :to="`/detail/${c.cakeid}`">
          <td><img :src="c.image" class="aaa" /></td>
        </router-link>
        <td scope="col">{{ c.name }}</td>
        <td scope="col">{{ c.price }}</td>

        <td>
          <button @click="del(index)" class="btn btn-danger">Delete</button>
        </td>
      </tr>
    </thead>
  </table> -->

  <Loader v-if="loader" />
  <div class="row">
    <Cake v-for="c in cakes" :key="c.cakeid" :data="c" />
  </div>
</template>

<style scoped>
.aaa {
  width: 200px;
  height: 200px;
}
</style>
