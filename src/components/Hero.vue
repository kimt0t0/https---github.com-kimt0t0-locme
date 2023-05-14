<script lang="ts" setup></script>

<template>
    <section class="hero-section">
        <div class="hero-title-ctn">
            <h1 class="hero-title">LocMe</h1>
            <h2 class="hero-slogan">
                <span class="title-line">Un bracelet connecté</span>
                <span class="title-line">pour profiter de votre festival en toute sécurité</span>
            </h2>
            <p class="hero-subtitle">Louez nos bracelets qui peuvent sauver des vies !</p>
        </div>
        <div class="hero-subcontent">
            <Button class="hs-btn" color="primary" size="medium">Demandez un devis gratuit en un clic !</Button>
            <RouterLink class="white-link" to="/contact" alt="Aller vers la page de contact">
                Je souhaite être recontacté·e
            </RouterLink>
        </div>
    </section>
</template>

<style lang="scss">
@use '@/styles/App.scss' as *;

.hero-section {
    background: url("@/assets/images/placeholder.webp") no-repeat center center;
    background-size: contain;
    box-sizing: border-box;
    padding: $space-s 0;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* Upper half */
    .hero-title-ctn {
        display: flex;
        flex-direction: column;
        align-items: center;
        .hero-title, .hero-slogan {
            color: #fff;
            white-space: pre-line;
            font-size: $fsize-xl;
            font-weight: 600;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-transform: uppercase;
            text-align: center;
        }
        .herol-title {
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        .hero-title {
            color: $primary;
        }
        .hero-subtitle {
            font-size: $fsize-l;
        }
    }
    /* Lower half */
    .hero-subcontent {
        display: flex;
        flex-direction: column;
        align-items: center;
        .hs-btn {
            font-weight: 800;
            max-width: 260px;
            margin-bottom: $space-s;
        }
    }
}
</style>