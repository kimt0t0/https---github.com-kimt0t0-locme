<script lang="ts" setup>
import { ref } from 'vue';

// Fake data
const userFests = ref<any>([
    {
        id: 1,
        name: 'Hellfest 2024',
        teams: [
            'sécurité',
            'stand xyz',
            'lorem ipsum'
        ]
    },
    {
        id: 2,
        name: 'Les vieilles charrues 2023',
        teams: [
            'sécurité',
            'stand xyz',
            'lorem ipsum'
        ]
    },
    {
        id: 3,
        name: 'Hellfest 2023',
        teams: [
            'sécurité',
            'stand xyz',
            'lorem ipsum'
        ]
    }
])

// Handle show / hide dropdowns contents
const showContent = ref<number>(-10);
const setShowContent = (id: number) => {
    showContent.value = id
}

const showSecondContent = ref<number>(-10);
const setShowSecondContent = (id: number) => {
    showSecondContent.value = id
}

</script>

<template>
    <div class="dropdown-content-box __orders">
        <div class="dropdown-bloc __subbloc" v-for="fest of userFests">
            <Button class="dropdown-btn" color="white" size="dropdown inbox" type="button"
                @click="showContent === fest.id ? setShowContent(-10) : setShowContent(fest.id)">
                {{ fest.name }}
                <Icon icon="sort-down" id="devis-dd-icon" />
            </Button>
            <div v-show="showContent === fest.id" class="dropdown-content">
                <Button v-for="team of fest.teams" class="dropdown-btn __second-content" color="primary" size="dropdown inbox" type="button"
                    @click="showSecondContent === team.id ? setShowSecondContent(-10) : setShowSecondContent(team.id)">
                    {{ team }}
                    <Icon icon="sort-down" id="devis-dd-icon" />
                </Button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.dropdown-content {
    margin-left: $space-m;
    font-size: 1rem;
    line-height: 2;

    .order-title {
        margin-bottom: 1rem;
    }

    .__second-content {
        text-transform: uppercase;
    }
}
</style>