<template>
  <div id="app" class="container">
    
    <nav class="navbar">
      <router-link to="/history">History</router-link>
      <router-link to="/">Quiz</router-link>
      <router-link to="/options">Options</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @import '../assets/variables.scss';

  .container {
    background-color: $body-background;
    min-height: 100%;
    overflow: auto;
    justify-content: center;
  }

  .navbar {
    height: 50px;
    display: flex;
    justify-content: space-around;

    a {
      padding: 5px 30px;
      color: $white;
      font-size: 40px;
      font-weight: 100;
      text-decoration: none;

      &:first-child, &:last-child {
        font-size: 25px;
      }
    }
  }
</style>