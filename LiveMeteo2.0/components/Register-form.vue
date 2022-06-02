<template>
 <div class="container-fluid">
    <div class="row no-gutter">
        <div class="col-md-6 d-none d-md-flex bg-image"></div>

        <div class="col-md-6 bg-light">
            <div class="login d-flex align-items-center py-5">

                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-xl-7 mx-auto">
                            <h3 class="display-8">Zarejestruj się</h3>
                            <br>
                            <form @submit.prevent="submitForm">
                              <div class="form-row">
                                <div class="col">
                                  <div class="form-group mb-3">
                                      <input id="login" type="text" placeholder="Login" required="" autofocus="" v-model="login" class="form-control rounded-pill border-0 shadow-sm px-4">
                                  </div>
                                  </div>
                                  <div class="col">
                                  <div class="form-group mb-3">
                                      <input id="email" type="email" placeholder="Email" required="" v-model="email" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary">
                                  </div>
                                  </div>
                                  </div>
                                  <div class="form-row">
                                <div class="col">
                                  <div class="form-group mb-3">
                                      <input id="password" type="password" placeholder="Hasło" required="" v-model="password" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4">
                                  </div>
                                  </div>
                                  <div class="col">
                                  <div class="form-group mb-3">
                                      <input id="password_confirmation" type="password" placeholder="Powtórz hasło" required="" v-model="password_confirmation" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4">
                                  </div>
                                  </div>
                                  </div>
                                  <div class="form-group mb-3">
                                      <input id="name" type="text" placeholder="Pseudonim" required="" autofocus="" v-model="name" class="form-control rounded-pill border-0 shadow-sm px-4">
                                  </div>
                                  <!-- <b-form-group >
                                  <b-form-file type="avatar" id="file" accept=".jpg,.png,.jpeg" class="form-control border-0 shadow-sm px-4 text-primary" ref="avatar" placeholder="Wybierz zdjęcie profilowe"></b-form-file>
                                  </b-form-group> -->
                                <div class="custom-control custom-checkbox mb-3">

                                    <input id="regulamin" type="checkbox" class="form-check-input" style="width: 16px; height: 16px;" value="agree" v-model="checked"><label for="agree">Zapoznałem się z <a href="/">regulaminem</a></label>
                                </div>
                                <button type="submit" :disabled="!checked || password!==password_confirmation || !password || !password_confirmation" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Zarejestruj się</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return{
      login: "",
      password: "",
      name: "",
      abatar: null,
      email: "",
      checked : false,
      password_confirmation: "",
      response: "",
    }
  },
   methods: {
     handleFileUpload(){
      this.file = this.$refs.file.files[0];
    },
    submitForm() {
      axios.post('http://localhost:8080/api/register', {
        login: this.login,
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        avatar: null
      }).then(response => {
        console.log(response);
        this.response = response.data;
          if(process.client) {
              localStorage.setItem("authToken", response.data.authToken)
          }
      }).catch(error => {
        this.response = 'Error: ' + error.response.status
      })
    },

  }
}
</script>


<style>
.login,
.image {
  min-height: 100vh;
}

.bg-image {
  background-image: url('static/bgg3.png');
  background-size: cover;
  background-position: center center;
}
</style>
