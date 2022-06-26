<template>
  <ul class="nav flex-column">
    <li class="nav-item">
      <router-link
        class="nav-link active link-danger border-danger rounded-3"
        to="summary"
        >Summary</router-link
      >
    </li>
    <li class="nav-item">
      <router-link
        class="nav-link link-danger border-danger rounded-3"
        to="address"
        >Address</router-link
      >
      
    </li>
    <li class="nav-item">
      <router-link
        class="nav-link link-danger border-danger rounded-3"
        to="payment"
        >Payment</router-link
      >
    </li>
  </ul>
  <router-view></router-view>
</template>

<style scoped>
.nav-link {
  border: 2px;
  border-style: solid;
  border-color: red;
  /* border-width: thin; */
  width: 100px;

  margin-top: 10px;
}
</style>
