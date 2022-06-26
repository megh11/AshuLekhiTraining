<script setup>
import { onUpdated } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import Cake from "./Cake.vue";
import axios from "axios";

var cakes = ref([]);
var route = useRoute();

const search = ref({
  name: "",
});

console.log("route details are", route.query.q);

// onUpdated(() => {
//   alert("..." + route.query.q);
// });

// axios({
//   method: "get",
//   url: "https://apifromashu.herokuapp.com/api/searchcakes?q" + route.query.q,
// }).then(
//   (response) => {
//     console.log("response from api", response);
//     search.value = response.data.data;
//   },
//   (error) => {
//     console.log("error from all cake api", error);
//   }
// );

var url =
  "https://apifromashu.herokuapp.com/api/searchcakes?q=" + route.query.q;
axios({
  method: "get",
  url: url,
}).then(
  (response) => {
    console.log(response);
    cakes.value = response.data.data;
  },
  (error) => {
    console.log("Error ", error);
  }
);

watch(
  () => route.query.q,
  (value) => {
    console.log("value ", value);
    var url = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + value;
    axios({
      method: "get",
      url: url,
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log("Error ", error);
      }
    );
  }
);
</script>

<template>
  <h1>Here we will show results for cakes</h1>
  <div class="row">
    <Cake v-for="c in cakes" :key="c.cakeid" :data="c" />
  </div>
</template>
