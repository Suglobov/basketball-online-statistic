<template>
    <BasketballPlayground />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import BasketballPlayground from './components/BasketballPlayground.vue';

export default defineComponent({
    components: {
        BasketballPlayground,
    },
    setup() {
        return {
            test: 'test',
        };
    },
});
</script>

<style lang="scss"></style>
