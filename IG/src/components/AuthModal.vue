<script setup>
import {ref,defineProps,reactive} from 'vue';
import {useUserStore} from '../stores/users'
import { storeToRefs } from 'pinia';

const userStore = useUserStore();

const {errorMessage} = storeToRefs(userStore);

const props = defineProps(["isLogin"])


const visible = ref(false);

const userCredentials = reactive({
    email:'',
    username:'',
    password:''
})

const showModal = () => {
    visible.value = true;
}

const handleOk = (e) =>{
    userStore.handleSignup(userCredentials)
    
}

const title = props.isLogin ? 'Login' :'Sign Up';

</script>



<template>
    <div>
        <AButton class="btn" type="primary" @click="showModal">{{ title }}</AButton>
        <AModal v-model:open="visible" :title="title" @ok="handleOk">
            <AInput class="input" v-if="!isLogin" v-model:value="userCredentials.username" type="text" placeholder="username" />
            <AInput class="input" v-model:value="userCredentials.email" type="email" placeholder="Email" />
            <AInput class="input" v-model:value="userCredentials.password" type="password" placeholder="Password" />
            <ATypographyText v-if="errorMessage" type="danger">{{ errorMessage }}</ATypographyText>
        </AModal>
    </div>
</template>

<style scoped>
.btn{
    margin-left: 10px;
    border-radius: 0;
}

.input{margin-top: 5px;}

</style>