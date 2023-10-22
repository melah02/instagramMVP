<script setup>
import {defineProps} from 'vue';


const props = defineProps(['username','userInfo'])
</script>

<template>
    <div class="userbar-container">
        <div class="top-content">
            <ATypographyTitle :level="2">
                {{ props.username }}
            </ATypographyTitle>
        </div>
            <div class="buttom-content">
                <ATypographyTitle :level="5">
                    {{ props.userInfo.posts }} posts
                </ATypographyTitle>
                <ATypographyTitle :level="5">
                    {{props.userInfo.followers}} followers
                </ATypographyTitle>
                <ATypographyTitle :level="5">
                    {{ props.userInfo.following }} following
                </ATypographyTitle>
            </div>
    </div>
</template>

<style scoped>
.userbar-container{

    padding-bottom:75px;
}
.buttom-content{
    display: flex;
    align-items: center;
}
.buttom-content h5{
    padding: 0;
    margin:30px 30px 30px 0 !important;
    align-items: center;
}
</style>