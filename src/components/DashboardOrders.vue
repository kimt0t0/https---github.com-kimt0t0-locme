<script lang="ts" setup>
    import { ref } from 'vue';

    // Fake data
    const orders = ref<any>([
        {
            id: 1,
            date_start: new Date(2023-6-27),
            date_end: new Date(2023-6-30),
            ordernum: '00120',
            bracelets: 1500,
            referentPhone: '02 51 02 23 14'
        },
        {
            id: 2,
            date_start: new Date(2022 - 6 - 15),
            date_end: new Date(2023 - 6 - 12),
            ordernum: '00110',
            bracelets: 1000,
            referentPhone: '02 51 03 45 67'
            },
        {
            id: 3,
            date_start: new Date(2023 - 6 - 12),
            date_end: new Date(2023 - 6 - 13),
            ordernum: '00098',
            bracelets: 400,
            referentPhone: '02 51 02 23 14'
        }
    ])

    // Handle show / hide dropdowns contents
    const showContent= ref<number>(-10);
    const setShowContent = (id: number) => {
        showContent.value = id
    }

</script>

<template>
    <div class="dropdown-content-box __orders">
        <div class="dropdown-bloc __subbloc" v-for="order of orders">
            <Button class="dropdown-btn" color="white" size="dropdown inbox" type="button" @click="showContent === order.id ? setShowContent(-10) : setShowContent(order.id)">
                Festival du {{ order.date_start.toLocaleDateString() }}
                <Icon icon="sort-down" id="devis-dd-icon" />
            </Button>
            <div v-show="showContent === order.id" class="dropdown-content">
                <h3 class="order-title">Numéro de commande: {{ order.ordernum }}</h3>
                <ul class="order-details">
                    <li class="od-item">Nombre de bracelets loués: {{ order.bracelets }}</li>
                    <li class="od-item">Téléphone de mon interlocuteurice: {{ order.referentPhone }}</li>
                </ul>
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
    }
</style>