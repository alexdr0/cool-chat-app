<template>
    <div>
        <button type="button" class="btn btn-primary botton" @click="signin()">Sign in with google</button>

    </div>
</template>

<style lang="scss" scoped>
div{
    background: #2c2f33;
    position:absolute;
    height:100%;width:100%;

    button{
        margin-top:25%;
        background:rgb(114, 137, 218);
        font-family: Roboto;
        font-weight:bold;
        border:none;
    }
}
</style>

<script>
import firebase from '../Firebase-script'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default{
    name: "Signin",
    setup() {
        let router = useRouter()
        let store = useStore()
        function signin() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result)
                store.commit('setUser', result)
                router.push("/chat")
            }).catch((error) => {
                alert('failure. prob incorrect info')
                console.log(error)
            });
        }

        return{ signin }
    }
}
</script>