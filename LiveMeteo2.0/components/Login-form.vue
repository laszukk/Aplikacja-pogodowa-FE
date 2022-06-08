<template>
  <div class="container-fluid">
    <div class="row no-gutter">
      <div class="col-md-6 d-none d-md-flex bg-image"></div>

      <div class="col-md-6 bg-light">
        <div class="login d-flex align-items-center py-5">

          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-xl-7 mx-auto">
                <h3 class="display-8">Zaloguj się</h3>
                <p class="text-danger" v-if="response.errors!=null && response.errors['login']!=null">{{response.errors['login'][0]}}</p>
                <p class="text-danger" v-if="response.errors!=null && response.errors['email']!=null">{{response.errors['email'][0]}}</p>
                <br>
                <form @submit.prevent="submitLog">
                  <div class="form-group mb-3">
                    <input id="inputEmail" type="text" placeholder="Login" v-model="login" required="" autofocus=""
                           class="form-control rounded-pill border-0 shadow-sm px-4">
                  </div>
                  <div class="form-group mb-3">
                    <input id="inputPassword" type="password" placeholder="Hasło" v-model="password" required=""
                           class="form-control rounded-pill border-0 shadow-sm px-4 text-primary">
                  </div>
                  <div class="form-check form-group mb-3">
                    <input class="form-check-input" type="checkbox" id="remember" v-model="remember">
                    <label class="form-check-label" for="remember">
                      Zapamiętaj mnie
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                    Zaloguj się
                  </button>
                  <div class="text-center">
                    <div class="text-center d-flex justify-content-between mt-4"><p>Nie masz jeszcze konta? <a
                      href="/subpages/register">
                      <u>Zarejestruj się!</u></a></p></div>
                  </div>
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
import axios from 'axios';

export default {
  data() {
    return {
      login: "",
      password: "",
      remember: false,
      response: "",
      accessToken:"",
    }
  },
  methods: {
    submitLog() {
      axios.post('http://localhost:8080/api/login', {
        login: this.login,
        password: this.password,
        remember: this.remember,
      }).then(response => {
        console.log(response);
        this.response = response.data;
        if (process.client) {
          localStorage.setItem("authToken", response.data.authToken)
        }
        if(localStorage.getItem("authToken")!=="undefined"){

          window.location.href = "http://localhost:3000/"
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
