<script lang="ts" setup>
    defineProps<{
        title: String;
    }>()
</script>

<template>
    <section class="cta-section">
        <h3 class="cta-title">{{ title  }}</h3>
        <div class="ctas-group">
            <ButtonLink class="cta cta-btn" color="primary" size="medium" path="/contact">Demandez un devis gratuit en un clic !</ButtonLink>
            <RouterLink class="cta white-link" to="/contact" alt="Aller vers la page de contact">
                Je souhaite être recontacté·e
            </RouterLink>
        </div>
    </section>
</template>

<style lang="scss">
@use '@/styles/App.scss' as *;
    .cta-section {
        background-color: #000;
        box-sizing: border-box;
        padding: $space-l;
        display: flex;
        flex-direction: column;
        align-items: center;
        .cta-title {
            color: #fff;
            text-transform: uppercase;
        }
    }
    .ctas-group {
        margin-top: $space-xl;
        display: flex;
        flex-direction: column;
        align-items: center;
        .cta {
            margin-top: $space-m;
            font-weight: 200;
        }
    }
</style>