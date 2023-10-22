<script setup>
import Container from './Container.vue';
import Card from './Card.vue'
import image1 from '../assets/images/carousel1.jpg';
import image2 from '../assets/images/carousel2.jpg';
import image3 from '../assets/images/carousel3.jpg';
import image4 from '../assets/images/carousel4.jpg';



const data = [
    {
        id:'1',
        username:'Melah',
        url:image1,
        caption:'Coding'
    },
    {
        id:'2',
        username:'James',
        url:image2,
        caption:'playing CODM'
    },
    {
        id:'3',
        username:'isaac',
        url:image3,
        caption:'out with my ....'
    },
    {
        id:'4',
        username:'benjamin',
        url:image4,
        caption:'went for a work out'
    },
] 

</script>

<template>
    <Container>
        <div class="timeline-container">
            <Card v-for="card in data" :key="card.id"  :card="card" />
            
        </div>
    </Container>
</template>
<style scoped>
.timeline-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0;

}
</style>