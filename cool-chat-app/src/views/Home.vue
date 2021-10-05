<template>
  <div class="home">
    <h1>Alexcord</h1>
    <h2>Beacause I don't understand <i>"What isn't broke don't fix"</i><h2>

    <router-link to="/signin">
      <button type="button" class="btn btn-primary">Sign in</button>
    </router-link>

  </div>
</template>

<style lang="scss">
  h1{
    top:20%;
    color:white;
    font-family: Roboto;
    font-size:40pt;
  }
  .h2{
    color:lightgray;
    font-family:Roboto;
    font-weight:400;
    font-size:12pt;
  }

  .home{
    background: #2c2f33;
    height:100%;width:100%;
  }
</style>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
