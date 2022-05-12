<template>
<div class="bg2">
  <div style="padding-top:10%;">
    <div class="container">

    <div class="row d-flex justify-content-center">

        <div class="col-md-7">

            <div class="card p-3 py-4 shadow">

                <div class="text-center">
                  <h4 class="mb-3"  >Mój profil</h4>
                   <figure class="figure ">
                      <label for="avatar">
                      <img v-if="url" :src="url" class="figure-img img-fluid rounded-circle img-thumbnail shadow-sm" style="width: 150px; height: 150px" alt="..."/>
                      </label>
                      <figcaption class="figure-caption">
                        <b>@{{pseudonim}}</b>
                        <br>
                        {{email}}
                      </figcaption>
                    </figure>
                    <b-row>

                    </b-row>

                    <div class="buttons">

                        <button class="btn btn-outline-primary px-4 mb-1">Dane publiczne</button>
                        <button class="btn btn-primary px-4 ms-3 mb-1">Zmień email</button>
                        <button class="btn btn-primary px-4 ms-3 mb-1">Zmień hasło</button>
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
  .bg2 {
    min-height: 100vh;
    background-image: url('static/bggch.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>

