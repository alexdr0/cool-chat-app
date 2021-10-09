<template>
    <div class="maindiv">
        <div v-for="message in data.value.docs.reverse()" :key="message">
            <div class="message">
              <b>{{ message.data().username }}</b><br>
              <span>{{ message.data().message }}</span>
            </div>
        </div>
        <div class="messageSend">
          <input placeholder="Write shakespear as I would..." v-model="message" type="text" @keyup.enter="sendMessage(message)" />
          <button type="button" class="btn btn-primary botton" @click="sendMessage(message)">Send</button>
        </div>

    </div>
</template>
<style lang="scss">
  .messageSend{
    height:35pt;
    width:100%;
    position:fixed;
    bottom:0;

    .botton{
      width:50pt;
      height:35pt;
      border-radius:0pt;
    }

    input{
      height:30pt;
      width:calc(100% - 50pt);
      background: #2c2f33;
      border-radius:1.55pt;  
      font-family:roboto;
      font-weight:400;
      border:none;
      color:white;
    }
  }
  .maindiv{
    background: #23272a;
    color:white;
    position:fixed;

    height:100%;width:100%;
    top:0;bottom:0;left:0;right:0;

    .message{
      b{
        font-family: Roboto;
        font-weight:800;
        color:white;
      }
      span{
        font-weight:400;
        color:white;
        font-family:Roboto;
      }
    }
  }
</style>
<script>
import firebase from '../Firebase-script'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { v4 as uuidv4 } from 'uuid';


export default{
    name: 'Chat',
    setup(){
        
        let store = useStore()
        let router = useRouter()
        const data = reactive({})
        const message = reactive('')

        if(store.getters.getUser.uid == null){
            router.push('/')
        }

        function sendMessage(value){
            if (value.length == 0){
                alert("empty")
                return
            }


            firebase.firestore().collection("messages").doc(uuidv4()).set({
                timestamp: Date.now(),
                username: store.getters.getUser.displayName,
                message: value,
                uid: store.getters.getUser.uid
            })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        }

        

        firebase.firestore().collection("messages")
            .orderBy("timestamp", "asc")
            .limit(15)
            .get()
            .then((querySnapshot) => {
                console.log(querySnapshot)
                console.log(querySnapshot.docs[0].data())
                data.value = querySnapshot
            })
            .catch((error) => {
                alert("Error")
                console.log("Error getting documents: ", error);
            });
        
        let reload = () => {
            firebase.firestore().collection("messages")
            .orderBy("timestamp", "asc")
            .limit(15)
            .get()
            .then((querySnapshot) => {
                data.value = querySnapshot
            })
        }




        firebase.firestore().collection("messages")
        .onSnapshot(() => {
            reload()
        });
            
        return { data, message, sendMessage }
    }
}
</script>