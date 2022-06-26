<script setup>
import axios from "axios";

// defineProps(["name", "image", "price"]);
defineProps(["data"]);



function onCopy(e) {
  console.log("this will reported to hr");
  e.preventDefault();
}
</script>



<template>
  <div class="card" style="width: 18rem" @copy="onCopy">
    <router-link :to="`/detail/${data.cakeid}`">
      <img
        style="height: 15rem"
        :src="data.image"
        class="card-img-top"
        alt="..."
    /></router-link>
    <!-- <img :src="data.image" class="card-img-top" alt="Card image cap" /> -->
    <div class="card-body">
      <p class="center-align wave-effect product-tag green">
        {{ data.status }}
      </p>
      <h5 class="card-title">{{ data.name }}</h5>
      <p class="card-text">
        {{ data.price }}
      </p>

      <a href="#" class="btn btn-primary">Order Now</a>
    </div>
  </div>
</template>



<style>
.green {
  background-color: #71a95a;
}
.product-tag {
  padding: 0px 10px;
  border-radius: 15px;
  right: 10px;
  color: #fff;
  font-size: 12px;
  position: absolute;
  top: 12px;
  z-index: 2;
}
.center,
.center-align {
  text-align: center;
}
.green {
  background-color: #4caf50 !important;
}

.card-img-top {
  height: 100%;
  width: 100%;
}

.card {
  margin-left: 20px;
}
</style>