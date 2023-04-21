<script lang="ts" setup></script>

<template>
    <section class="hero-section">
        <div class="hero-title-ctn">
            <h1 class="hero-title">LocMe</h1>
            <h2 class="hero-slogan">
                Un bracelet connecté pour le plaisir et la sécurité dans votre festival
            </h2>
            <p class="hero-subtitle">Location de bracelets stylés et pratiques !</p>
        </div>
        <div class="hero-subcontent">
            <Button class="hs-btn" color="classic" size="medium">Votre devis gratuit et sur-mesure en 1 clic</Button>
            <RouterLink class="classic-link" to="/contact" alt="Aller vers la page de contact">
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
            max-width: 800px;
            white-space: pre-line;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-size: $fsize-xl;
            font-weight: 600;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-transform: uppercase;
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
            text-transform: uppercase;
            font-weight: 800;
            max-width: 300px;
            margin-bottom: $space-s;
        }
    }
}
</style>