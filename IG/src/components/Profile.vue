<script setup>
import Container from './Container.vue';
import ImageGallery from './ImageGallery.vue';
import UserBar from './UserBar.vue'

const userInfo = {
    posts:4,
    followers:100,
    following:342
}
</script>

<template>
    <Container>
        <div class="profile-container">
           <UserBar
                username="Melah"  
                :userInfo="userInfo"   
           />
            <ImageGallery
            :posts="[
                {
                id:'1',
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Q_TO1DAOBY7YIXWvb_JQQtKMR3XVcvR7wg&usqp=CAU'
                },
                {
                id:'2',
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Q_TO1DAOBY7YIXWvb_JQQtKMR3XVcvR7wg&usqp=CAU'
                },
            ]"
            />
        </div>
    </Container>
</template>
<style scoped>
.profile-container{
    display: flex;
    flex-direction: column;
    
    padding: 5rem 0;

}
</style>