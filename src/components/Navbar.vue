<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { cartstore } from "../stores/CartStore";
import { userstore } from "../stores/User";
var projectname = "Meghana's Cake Gallary";

var router = useRouter();

var store = cartstore();
var store1 = userstore();

// defineProps(['isloggedin'])

var searchtext = ref("");

// var isuserloggedin=ref(true)

// var applyName = computed(() => {
//   return name.length > 5 ? name.substr(0, 4) + "..." : name;
// });

var onlineusers = ref(0);

function joinMeeting() {
  onlineusers.value++;
  // alert(onlineusers.value);
}

// function search() {
//   alert("search");
// }

function onCopy(e) {
  console.log("this will reported to hr");
  e.preventDefault();
}

function getSearchText(e) {
  console.log("User is typing", e.target.value);
}

function search() {
  router.push({
    path: "search",
    query: {
      q: searchtext.value,
    },
  });
}

function logout() {
  store1.logoutUser();
  localStorage.removeItem("token");
  router.push("/");
}
</script>

<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light" @copy="onCopy">
    <div v-highlight class="container-fluid">
      <a class="navbar-brand" href="#"
        >Meghana's Cakes</a>
      <!-- <div> hiii<i class="fa-duotone fa-cake-candles"></i></div> -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/addcake">Add Cake</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/checkout/order"
              >Orders</router-link
            >
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/admin"
              >Admin</router-link
            >
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchtext"
          />
          <button @click="search" class="btn btn-outline-success" type="button">
            Search
          </button>
        </form>

        <router-link
          v-if="!store1.isLog"
          to="/login"
          class="btn btn-primary mx-2"
          type="button"
        >
          Login
        </router-link>
        <button
          @click="logout"
          v-if="store1.isLog"
          class="btn btn-danger mx-2"
          type="button"
        >
          Logout
        </button>

        <!-- <button class="btn btn-danger" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  
</svg>    {{ store.cartcount }}</button> -->

        <router-link to="/cart" class="btn btn-danger"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            /></svg
          >{{ store.cartcount }}</router-link
        >
      </div>
    </div>
  </nav>
</template>
