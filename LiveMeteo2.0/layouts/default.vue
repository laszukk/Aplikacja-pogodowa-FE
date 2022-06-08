<template>
  <div>

        <b-navbar toggleable="lg" class="navbar navbar-dark" type="light" variant="primary">
          <b-navbar-brand href="/">
        <img src="/logo2.png" style="width: 63px; height: 14px;"/>
        </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>
              <b-nav-item href="/">Strona główna</b-nav-item>
        <b-nav-item  href="/subpages/report">Utwórz raport</b-nav-item>
        <b-nav-item  href="#">Zarządzaj użytkownikami</b-nav-item>
        <b-nav-item  href="#">Dashboard</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">

              <b-nav-item-dropdown text="Profil" right>
              <b-dropdown-item  href="/subpages/login">Zaloguj się</b-dropdown-item>
              <b-dropdown-item  href="/subpages/register">Zarejestruj się</b-dropdown-item>
              <b-dropdown-item  href="/subpages/change">Moj profil</b-dropdown-item>
              <b-dropdown-item   href="/subpages/login">Wyloguj się</b-dropdown-item>
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
        log: ""
      }
    },
    async fetch(){
      this.log= await fetch('http://localhost:8080/api/login').then(res=>res.json())
    },
  }
</script>

