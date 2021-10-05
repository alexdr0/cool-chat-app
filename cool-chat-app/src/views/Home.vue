<template>
  <div class="home">
    <h1>Alexcord</h1>
    <h2>Beacause I don't understand <i>"What isn't broke don't fix"</i></h2>

    <router-link to="/signin">
      <button type="button" class="btn btn-primary">Sign in</button>
    </router-link>

  </div>
</template>

<style lang="scss">
  h1{
    margin-top:20%;
    color:white;
    font-family: Roboto;
    font-size:90pt;
  }
  h2{
    color:lightgray;
    font-family:Roboto;
    font-weight:400;
    font-size:17pt;
  }

  .home{
    background: #2c2f33;
    height:100%;width:100%;
    position:absolute;

  }
</style>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
