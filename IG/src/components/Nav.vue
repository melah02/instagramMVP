<script setup>
import {RouterLink,useRouter} from 'vue-router';
import Container from './Container.vue';
import AuthModal from './AuthModal.vue';

import {ref} from 'vue'

const searchUsername = ref('');
const isAuthenthicated = ref(true);
const router = useRouter();

const onSearch = ()=>{

    if(searchUsername.value){
        router.push(`/profile/${searchUsername.value}`);
        searchUsername.value = '';
    }
}
</script>

<template>
    <a-layout-header  class="nav" >
        <Container>
            <div class="navContainer" >
               <div class="IGAndSearch">
                 <RouterLink to="/">Instagram</RouterLink>
                <a-input-search 
                class="input"
                v-model:value="searchUsername"
                placeholder="username..."
                style="width: 150px;"
                @search="onSearch"
                />
               </div>

               <div v-if="isAuthenthicated" class="authButtonsDefault">
                   <AuthModal :isLogin="true" />
                   <AuthModal :isLogin="false" /> 
               </div>
               <div v-else class="authButtons">
                   <AButton class="authButtons" type="primary">Profile</AButton> 
                   <AButton class="authButtons" type="primary" >Log Out</AButton> 
               </div>
            </div>
        </Container> 
    </a-layout-header>
    
</template>


<style scoped>
.nav{
    background-color: black;
    height: 3rem;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 99;
}

.IGAndSearch{
    display: flex;
    align-items: center;
}

.IGAndSearch a{
    margin-right: 10px;
    text-decoration: none;
    color: aliceblue;
}
.authButtonsDefault{
    display: flex;
    margin-left: 10px;
    border-radius: 0;
}
.authButtons{
    display: flex;
    margin-left: 10px;
    border-radius: 0;
}

.navContainer{
    display: flex;
    justify-content: space-between;
}

</style>