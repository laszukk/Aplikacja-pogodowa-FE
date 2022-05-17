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
                            <form class="">
                              <div class="form-row">
                                <div class="col">
                                  <div class="form-group mb-3">
                                      <input id="login" type="text" placeholder="Login" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4">
                                  </div>
                                  </div>
                                  <div class="col">
                                  <div class="form-group mb-3">
                                      <input id="email" type="email" placeholder="Email" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary">
                                  </div>
                                  </div>
                                  </div>
                                  <div class="form-row">
                                <div class="col">
                                  <div class="form-group mb-3">
                                      <input id="pass" type="password" placeholder="Hasło" required="" v-model="pas1" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4">
                                  </div>
                                  </div>
                                  <div class="col">
                                  <div class="form-group mb-3">
                                      <input id="pass2" type="password" placeholder="Powtórz hasło" required="" v-model="pas2" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4">
                                  </div>
                                  </div>
                                  </div>
                                  <div class="form-group mb-3">
                                      <input id="pesudonim" type="text" placeholder="Pseudonim" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4">
                                  </div>
                                  <b-form-group >
                                  <b-form-file id="avatar" accept=".jpg,.png,.jpeg" class="form-control border-0 shadow-sm px-4 text-primary"  required="" placeholder="Wybierz zdjęcie profilowe"></b-form-file>
                                  </b-form-group>
                                <div class="custom-control custom-checkbox mb-3">

                                    <input id="regulamin" type="checkbox" class="form-check-input" style="width: 16px; height: 16px;" value="agree" v-model="checked"><label for="agree">Zapoznałem się z <a href="/">regulaminem</a></label>
                                </div>
                                <button type="submit" :disabled="!checked || pas1!==pas2 || !pas1 || !pas2" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Zarejestruj się</button>
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
export default {
  data() {
    return{
      checked : false,
      pas1: "",
      pas2: ""
    }
  },
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
