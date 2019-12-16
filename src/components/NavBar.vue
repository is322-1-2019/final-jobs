<template>
  <div class="card-content">
    <b-navbar>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/LoginPage' }">Login</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/MainPage' }">My Project</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/LandingPage' }">Logout</b-navbar-item>
    
      </template>
    </b-navbar>

    <div class="showUsername">
    <p>Username:  </p>
    </div>

  </div>
</template>