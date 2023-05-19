<script lang="ts" setup>
import { ref } from 'vue';

// Fake data
const usersFest = ref<any>([
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
    <div class="dropdown-content-box __teams">
        <div class="dropdown-bloc __subbloc" v-for="fest of usersFest">
            <Button class="dropdown-btn" color="primary __fest-dropdown" size="dropdown inbox" type="button"
                @click="showContent === fest.id ? setShowContent(-10) : setShowContent(fest.id)">
                {{ fest.name }}
                <Icon icon="sort-down" id="devis-dd-icon" />
            </Button>
            <div v-show="showContent === fest.id" class="dropdown-content" v-for="team of fest.teams">
                <Button class="dropdown-btn __second-content" color="primary __teams-dropdown" size="dropdown inbox" type="button"
                    @click="showSecondContent === team ? setShowSecondContent(-10) : setShowSecondContent(team)">
                    {{ team }}
                    <Icon icon="sort-down" id="devis-dd-icon" />
                </Button>
                <div v-show="showSecondContent === team" class="content-container">
                    <TeamList />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '@/styles/App.scss' as *;
.dropdown-content-box.__teams {
    width: 98% !important;
    border: 2px solid $grey;
    background-color: #f1f1f1;
}
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