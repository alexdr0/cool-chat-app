<template>
  <div class="home">
    <h1>Alexcord</h1>

    <router-link to="/signin">
      <button type="button" class="btn btn-primary">Sign in</button>
    </router-link>

  </div>
</template>

<style lang="scss">
  h1{
    top:20%;
    color:white;
  }

  .home{
    background: #2c2f33;
  }
</style>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
