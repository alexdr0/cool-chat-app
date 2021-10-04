<template>
    <div>
        <h1>Sign in</h1>
        <button type="button" class="btn btn-primary" @click="signin()">Sign in with google</button>

    </div>
</template>

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