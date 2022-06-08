<template>
  <div class="bg2">
    <div style="padding-top:10%;">
      <div class="container">

        <div class="row d-flex justify-content-center">

          <div class="col-md-7">

            <div class="card p-3 py-4 shadow">

              <div class="text-center">
                <h4 class="mb-3">Mój profil</h4>
                <figure class="figure ">
                  <label for="avatar">
                    <img v-if="url" :src="url" class="figure-img img-fluid rounded-circle img-thumbnail shadow-sm"
                         style="width: 150px; height: 150px" alt="..."/>
                  </label>

                  <figcaption class="figure-caption">
                    <br>
                    <div>
                      {{ kappa.name }}
                      <br> {{ kappa.email }}
                    </div>
                  </figcaption>

                </figure>
                <b-row>

                </b-row>

                <div class="buttons">

                  <button v-b-modal.modal-general class="btn btn-outline-primary px-4 mb-1">Dane publiczne</button>

                  <b-modal hide-footer
                           id="modal-general"
                           title="Zmień dane publiczne">
                    <form @submit.prevent="submitData">
                      <div class="form-group mb-3">
                        <input id="inputPseudonim" type="text" placeholder="Wpisz nowy pseudonim" v-model="name" required=""
                               class="text-dark form-control  border-0 shadow-sm text-primary">
                      </div>
                      <div class="form-group mb-3">
                        <input id="inputPassword" type="password" placeholder="Wpisz hasło" v-model="password" required=""
                               class="text-dark form-control  border-0 shadow-sm text-primary">
                      </div>
                      <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2  shadow-sm">Zapisz
                      </button>
                    </form>
                  </b-modal>

                  <button v-b-modal.modal-pass class="btn btn-primary px-4 ms-3 mb-1">Zmień hasło</button>

                  <b-modal hide-footer
                           id="modal-pass"
                           title="Zmień hasło">
                    <form @submit.prevent="submitPassword">
                      <div class="form-group mb-3">
                        <input v-if="checked==true" id="inputPassword1" type="text" placeholder="Podaj nowe hasło"
                               v-model="pas1" required=""
                               class="text-dark form-control  border-0 shadow-sm  text-primary">
                        <input v-else id="inputPassword1" type="password" placeholder="Podaj nowe hasło" required=""
                               v-model="pas1" class="text-dark form-control  border-0 shadow-sm  text-primary">
                      </div>
                      <div class="form-group mb-3">
                        <input v-if="checked==true" id="inputPassword2" type="text" placeholder="Powtórz nowe hasło"
                               v-model="pas2" required=""
                               class="text-dark form-control  border-0 shadow-sm  text-primary">
                        <input v-else id="inputPassword2" type="password" placeholder="Powtórz nowe hasło" required=""
                               v-model="pas2" class="text-dark form-control  border-0 shadow-sm  text-primary">
                      </div>
                      <div class="form-group mb-3">
                        <input v-if="checked==true" id="inputPassword3" type="text" placeholder="Podaj stare hasło"
                               v-model="password" required=""
                               class="text-dark form-control  border-0 shadow-sm  text-primary">
                        <input v-else id="inputPassword3" type="password" placeholder="Podaj stare hasło" required=""
                               v-model="password" class="text-dark form-control  border-0 shadow-sm  text-primary">
                      </div>
                      <div class="custom-control custom-checkbox mb-3">
                        <input id="showPass" type="checkbox" v-model="checked" checked class="custom-control-input">
                        <label for="showPass" class="custom-control-label">
                          <b-icon v-if="checked==true" icon="eye-fill" scale="1" variant="primary"></b-icon>
                          <b-icon v-else icon="eye-slash" scale="1" variant="primary"></b-icon>
                          Pokaż hasło</label>
                      </div>
                      <p v-if="pas1!==pas2" class="text-danger"> Hasła się nie zgadzają</p>
                      <button type="submit" :disabled="pas1!==pas2 || !pas1 || !pas2"
                              class="btn btn-primary btn-block text-uppercase mb-2  shadow-sm">Zapisz
                      </button>
                    </form>
                  </b-modal>

                  <button v-b-modal.modal-email class="btn btn-primary px-4 ms-3 mb-1">Zmień email</button>

                  <b-modal hide-footer
                           id="modal-email"
                           title="Zmień adres e-mail">
                    <form @submit.prevent="submitEmail">
                      <div class="form-group mb-3">
                        <input id="inputEmail" type="email" placeholder="Podaj nowy adres e-mail" v-model="email" required=""
                               class="text-dark form-control  border-0 shadow-sm  text-primary">
                      </div>
                      <div class="form-group mb-3">
                        <input id="inputPassword" type="password" placeholder="Podaj hasło" v-model="password" required=""
                               class="text-dark form-control  border-0 shadow-sm  text-primary">
                      </div>
                      <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2  shadow-sm">Zapisz
                      </button>
                    </form>
                  </b-modal>
                </div>

              </div>
            </div>
            <div class="text-center pt-1">
              <img src="/logo2.png" style="width: 63px; height: 14px;"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      url: require("../static/bgg.png"),
      checked: false,
      pas1: "",
      pas2: "",
      name:"",
      password:"",
      email:"",
      kappa: {
        "id": "",
        "login": "",
        "name": "",
        "avatar": "",
        "role": "",
        "email": "",
        "email_updated_at": "",
        "email_verified_at": ""
      },
      accessToken: "",

    }
  },
  methods: {
    submitData() {
      this.accessToken = window.localStorage.getItem('authToken')
      axios.post('http://localhost:8080/api/change-profile', {
        name:this.name,
        password: this.password
      }, {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + this.accessToken
        }
      }).then(response => {
        console.log(response);
        this.response = response.data;
        if(this.response ==="True"){

          window.location.href = "http://localhost:3000/subpages/change"
        }
      }).catch(error => {
        this.response = 'Error: ' + error.response.status
      })
    },
    submitPassword() {
      this.accessToken = window.localStorage.getItem('authToken')
      axios.post('http://localhost:8080/api/change-password', {
        newpassword:this.pas1,
        newpassword_confirmation: this.pas2,
        password: this.password,
      }, {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + this.accessToken
        }
      }).then(response => {
        console.log(response);
        this.response = response.data;
        if(this.response ==="True"){

          window.location.href = "http://localhost:3000/subpages/change"
        }
      }).catch(error => {
        this.response = 'Error: ' + error.response.status
      })
    },
    submitEmail() {
      this.accessToken = window.localStorage.getItem('authToken')
      axios.post('http://localhost:8080/api/change-email', {
        email:this.email,
        password: this.password
      }, {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + this.accessToken
        }
      }).then(response => {
        console.log(response);
        this.response = response.data;
        if(this.response ==="True"){

          window.location.href = "http://localhost:3000/subpages/change"
        }
      }).catch(error => {
        this.response = 'Error: ' + error.response.status
      })
    },
  },

  async fetch() {

    this.accessToken = localStorage.getItem('authToken')

    await fetch('http://localhost:8080/api/profile', {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.accessToken
      }
    }).then(res => res.json())
      .then(data => {
        this.kappa = data
      })
  },
  fetchOnServer: false
}

</script>

<style>
.bg2 {
  min-height: 100vh;
  background-image: url('static/bggch.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

