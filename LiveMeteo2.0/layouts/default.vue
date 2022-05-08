<template>
  <div>
    <div class="fixed-top">
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-primary shadow-sm">
  <a class="navbar-brand" href="/">
          <img src="/logo2.png" style="width: 63px; height: 14px;"/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Strona głowna <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/subpages/report">Utwórz raport <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Zmiana danych <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
      </li>
      </ul>
      <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <b-nav-item-dropdown text="Autoryzacja" right>
        <b-dropdown-item href="/subpages/login">Zaloguj się</b-dropdown-item>
        <b-dropdown-item href="/subpages/register">Zarejestruj się</b-dropdown-item>
        <b-dropdown-item href="/subpages/change">Moj profil</b-dropdown-item>
        <b-dropdown-item href="/subpages/login">Wyloguj się</b-dropdown-item>
      </b-nav-item-dropdown>
      </li>
    </ul>
  </div>
</nav>
   </div>
       <Nuxt />
   </div>

</template>

