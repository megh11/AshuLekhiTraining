<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { userstore } from "../stores/User";
var router = useRouter();
var store = userstore();

// var users = ref([]);
// var allusers = [];
const user = ref({
  email: "",
  password: "",
});

function login() {
  // var temp = { ...user.value };
  // users.value.push(temp);
  // allusers.push(temp);
  axios({
    data: user.value,
    method: "post",
    url: "https://apifromashu.herokuapp.com/api/login",
  }).then(
    (response) => {
      console.log("login done", response);
      if (response.data.token) {
        localStorage.token = response.data.token;
        store.loginUser(response.data.token);
        router.push("/");
      }
    },
    (error) => {
      console.log("error in login", error);
    }
  );
}

// function signup() {
//   axios({
//     data: user.value,
//     method: "post",
//     url: "https://apifromashu.herokuapp.com/api/register",
//   }).then(
//     (response) => {
//       console.log("response from api", response);
//     },
//     (error) => {
//       console.log("error from all cake api", this.error);
//     }
//   );
// }

// function login() {
//   var temp = { ...user.value };
//   users.value.push(temp);
//   allusers.push(temp);
// }
// function editUser(selecteduser) {
//   user.value = selecteduser;
// }
</script>

<template>
  <section class="vh-100" style="background-color: #508bfc">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <h3 class="mb-5">Sign in</h3>

              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="typeEmailX-2"
                  class="form-control form-control-lg"
                  v-model="user.email"
                />
                <label class="form-label" for="typeEmailX-2">Email</label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="typePasswordX-2"
                  class="form-control form-control-lg"
                  v-model="user.password"
                />
                <label class="form-label" for="typePasswordX-2">Password</label>
              </div>

              <!-- Checkbox -->
              <!-- <div class="form-check d-flex justify-content-start mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
              />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div> -->

              <button
                @click="login"
                class="btn btn-primary btn-lg btn-block"
                type="button"
              >
                Login
              </button>

              <hr class="my-4" />

              <!-- <button class="btn btn-lg btn-block btn-primary" style="background-color: #dd4b39;" type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
            <button class="btn btn-lg btn-block btn-primary mb-2" style="background-color: #3b5998;" type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
