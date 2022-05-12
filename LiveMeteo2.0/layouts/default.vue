<template>
  <div>

        <b-navbar toggleable="lg" class="navbar navbar-dark" type="light" variant="primary">
          <b-navbar-brand href="/">
        <img src="/logo2.png" style="width: 63px; height: 14px;"/>
        </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>
              <b-nav-item href="/">Strona głowna</b-nav-item>
        <b-nav-item v-if="role==1 || role==2" href="/subpages/report">Utwórz raport</b-nav-item>
        <b-nav-item v-if="role==2" href="#">Zarządzaj użytkownikami</b-nav-item>
        <b-nav-item v-if="role==2" href="#">Dashboard</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">

              <b-nav-item-dropdown text="Profil" right>
              <b-dropdown-item v-if="role==0" href="/subpages/login">Zaloguj się</b-dropdown-item>
              <b-dropdown-item v-if="role==0" href="/subpages/register">Zarejestruj się</b-dropdown-item>
              <b-dropdown-item v-if="role==1 || role==2" href="/subpages/change">Moj profil</b-dropdown-item>
              <b-dropdown-item v-if="role==1 || role==2" href="/subpages/login">Wyloguj się</b-dropdown-item>
            </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
       <Nuxt />
   </div>

</template>

<script>
  export default {
    data() {
      return {
        role: 2, // role: guest - 0 , user - 1 , admin - 2
      }
    },
  }
</script>

