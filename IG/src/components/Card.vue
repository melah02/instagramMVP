<script setup>
    import { defineProps } from 'vue';


    const { card } = defineProps(['card'])
</script>


<template>
   <ACard class="card" hoverable style="width: 240px">
        <template #cover>
            <img alt="image" :src="card.url" />
        </template>
        <ACardMeta :title="card.username">
            <template #description>
                {{ card.caption }}
            </template>
        </ACardMeta>
    </ACard>

</template>

<style scoped>
.card{
    margin-bottom: 20px;
}
</style>