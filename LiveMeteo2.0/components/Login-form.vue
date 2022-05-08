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
                            <br>
                            <form>
                                <div class="form-group mb-3">
                                    <input id="inputEmail" type="text" placeholder="Login" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4">
                                </div>
                                <div class="form-group mb-3">
                                    <input id="inputPassword" type="password" placeholder="Hasło" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary">
                                </div>
                                <div class="custom-control custom-checkbox mb-3">
                                    <input id="customCheck1" type="checkbox" checked class="custom-control-input">
                                    <label for="customCheck1" class="custom-control-label">Zapamiętaj hasło</label>
                                </div>
                                <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Zaloguj się</button>
                                <div class="text-center">
                                <div class="text-center d-flex justify-content-between mt-4"><p>Nie masz jeszcze konta? <a href="/subpages/register">
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
