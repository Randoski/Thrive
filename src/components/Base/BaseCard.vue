<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    noPadding: Boolean,
    bgColor: String,
})

</script>

<template>
    <div :class="['card', bgColor ? 'bgColorClass' : '']">
        <slot name="cardHeader" />
        <div class="card-body" :class="{ 'noPadding': props.noPadding }">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border-radius: 5px;
    box-shadow: 0 4px 20px 1px rgb(0 0 0 / 6%), 0 1px 4px rgb(0 0 0 / 8%);
    // box-shadow:rgb(149 157 165 / 20%) 0px 8px 24px;

    .card-body {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        padding: 1.25rem;
        &.noPadding {
            padding: 0 !important;
        }
    }

    &.bgColorClass {
        background-color: red; 
    }
}
</style>
