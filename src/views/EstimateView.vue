<template>
    <section class="section-estimate">
        <div class="classic-container">
            <HeroSecondary color="classic">Devis en ligne</HeroSecondary>
            <div class="estimate-waiter">
                <p class="waiter-txt">Oups, cette fonctionnalité n'est pas encore active...</p>
                <ButtonLink color="classic" size="large" path="/" class="waiter-btn">Revenir à l'accueil</ButtonLink>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .section-estimate {
        background-color: lighten($primary, 40%);
    }

    .estimate-waiter {
        min-height: 500px;
    }

    .waiter-btn {
        margin: $space-l 0;
    }
</style>