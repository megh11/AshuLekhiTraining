<script setup>
import { ref, watch } from "vue";
import axios from "axios";
var isuserloggedin = ref(true);
var users = ref([]);
var x = ref("");
var y = ref("");
var Message = ref("");
const user = ref({
  name: "",
  email: "",
  password: "",
});

watch(x, (newvalue, oldvalue) => {
  console.log("user is changing name:", newvalue, oldvalue);
});

// function login() {
//   var temp = { ...user.value };
//    users.value.push(temp);
//   allusers.push(temp);
// }

// function editUser(selecteduser) {
//   user.value = selecteduser;
// }

// function del(user) {
//   users.value.pop(index);
// }

var allusers = [];

watch(y, (newValue, oldValue) => {
  console.log("....", newValue, allusers);
  users.value = allusers.filter((all) => {
    return (
      all.name.toLowerCase().includes(newValue) ||
      all.email.toLowerCase().includes(newValue) ||
      all.password.toLowerCase().includes(newValue)
    );
  });
});

// function searchFun(){
//   let filter = document.getElementById('myInput').value.toUpperCase();
//   let myTable = document.getElementById('myTable');
//   let tr = myTable.getElementsByTagName('tr');

//   for (var i = 0; i < tr.length; i++) {
//     let td = tr[i].getElementsByTagName('td')[0];

//     if (td) {
//       let textvalue = td.textContent || td.innerHTML;

//       if (textvalue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }

// }).then(
//   (response) => {
//     console.log("response from api", response);

//   },
//   (error) => {
//     console.log("error from all cake api", this.error);
//   }
// );

function signup() {
  axios({
    data: user.value,
    method: "post",
    url: "https://apifromashu.herokuapp.com/api/register",
  }).then(
    (response) => {
      console.log("response from api", response);
    },
    (error) => {
      console.log("error from all cake api", this.error);
    }
  );
}

function login() {
  var temp = { ...user.value };
  users.value.push(temp);
  allusers.push(temp);
  axios({
    data: user.value,
    url: "https://apifromashu.herokuapp.com/api/register",
    method: "post",
  }).then(
    (response) => {
      console.log("response from user is:", response);
      if (response.data.message.toLowerCase() != "user already exists") {
        users.value.push({ ...user.value });
      }
      Message.value = response.data.message;
      console.log("Messege:", response.data.message);
    },
    (error) => {
      console.log("error");
    }
  );
}
// function login() {
//   var temp = { ...user.value };
//   users.value.push(temp);
//   allusers.push(temp);
//   axios({
//     data: user.value,
//     method: "post",
//     url: "https://apifromashu.herokuapp.com/api/register",
//   }).then(
//     (response) => {
//       console.log("login from api", response);
//     },
//     (error) => {
//       console.log("error in login", error);
//     }
//   );
// }
</script>

<template>
  <form @submit="login">
    <div class="row mb-3">
      
      <input v-model="x" />

      <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input
          v-model="user.name"
          type="text"
          class="form-control"
          id="inputEmail3"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input
          v-model="user.email"
          type="email"
          class="form-control"
          id="inputEmail3"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label"
        >Password
      </label>
      <div class="col-sm-10">
        <input
          v-model="user.password"
          type="password"
          class="form-control"
          id="inputPassword3"
        />
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-sm-10 offset-sm-2"></div>
    </div>
    <button type="button" @click="signup" class="btn btn-primary">
      Sign in
    </button>
    <!-- <button type="button" @click="login" class="btn btn-primary">Login</button> -->
    <button v-if="isuserloggedin" class="btn btn-danger">Logout</button>
    <br />
    <input
      type="text"
      name=""
      id="myInput"
      placeholder="names..."
      v-model="y"
    />
    <table class="table" id="myTable">
      <thead>
        <tr>
          <th scope="col">Serial Number</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(eachuser, index) of users" :key="eachuser">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ eachuser.name }}</td>
          <td>{{ eachuser.email }}</td>
          <td>{{ eachuser.password }}</td>
          <td>
            <button
              type="button"
              @click="editUser(eachuser)"
              class="btn btn-danger"
            >
              Edit
            </button>
          </td>
          <td>
            <button @click="del" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>
