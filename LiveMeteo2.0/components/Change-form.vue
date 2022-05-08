<template>
<div class="bg2">
    <div class=spacing1>
      <div class="container corners bg-light shadow">
        <b-row>
          <b-col>
            <div style="position: absolute; top: 28%; left: 34%">
            <div class="text-center">
            <figure class="figure ">
              <label for="avatar">
              <img role="button" v-b-popover.hover.top="'Kliknij aby wybrać zdjęcie'" title="Zmień avatar" v-if="url" :src="url" class="figure-img img-fluid rounded-circle img-thumbnail shadow-sm" style="width: 150px; height: 150px" alt="..."/>
              </label>
              <figcaption class="figure-caption">
                <b>@{{pseudonim}}</b>
                <br>
                {{email}}
              </figcaption>
            </figure>
            </div>
            </div>
          </b-col>
          <b-col>
            <div class="mt-3">
            <h3 class="display-8">Dane profilu</h3>
            <div class="py-3">
            <form>
                                  <div class="form-group mb-3">
                                      <input id="login" type="text" placeholder="Login" v-bind:value="login" required="" autofocus="" class="form-control  border-0 shadow-sm px-4">
                                  </div>
                                  <div class="form-group mb-3">
                                      <input id="email" type="email" placeholder="Email" v-bind:value="email" required="" class="text-muted form-control  border-0 shadow-sm px-4 text-primary">
                                  </div>
                                  <div class="form-group mb-3">
                                      <input id="pass" type="password" placeholder="Hasło" v-bind:value="pass" required="" autofocus="" class="form-control  border-0 shadow-sm px-4">
                                  </div>
                                  <div class="form-group mb-3">
                                      <input id="pass2" type="password" placeholder="Powtórz hasło" v-bind:value="pass" required="" autofocus="" class="form-control  border-0 shadow-sm px-4">
                                  </div>
                                  <div class="form-group mb-3">
                                      <input id="pesudonim" type="text" placeholder="Pseudonim" v-bind:value="pseudonim" required="" autofocus="" class="form-control  border-0 shadow-sm px-4">
                                  </div>
                                  <b-form-group >
                                  <b-form-file id="avatar" accept=".jpg,.png,.jpeg" class="form-control border-0 shadow-sm px-4 text-primary" v-bind:value="url" style="display:none" placeholder="Wybierz zdjęcie profilowe" @change="onFileChange"></b-form-file>
                                  </b-form-group>
                                <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Zapisz </button>
                                  </form>
                                  </div>
                                  </div>
          </b-col>
        </b-row>
      </div>
        <div class="text-center" style="padding-top: 1%">
        <img src="/logo2.png" style="width: 63px; height: 14px;"/>
        </div>
      </div>
    </div>

</template>

<script>
  export default {
    data() {
      return {
        login: "laszukk",
        email: "laszukk@gmail.com",
        pass: "123",
        pseudonim: "laszuk",
        url: require("../static/bgg.png")
      }
    },
    methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      }
    }
  }
</script>

<style>
  .spacing1 {
    padding-top: 10%;
  }

  .corners {
  border-radius: 15px;
  padding: 20px;
  width: 800px;
  height: 460px;
  }

  .bg2 {
    min-height: 100vh;
    background-image: url('static/bggch.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>

