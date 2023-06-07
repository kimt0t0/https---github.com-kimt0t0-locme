<template>
    <section class="legals-section">
        <div class="classic-container">
            <h1 class="legals-title __main">Mentions légales</h1>
    
            <div class="legals-contents">
                <h2 class="legals-title __second">Propriétaire du site</h2>
                <p class="legals-txt __owner"><strong>Les Mandarines</strong></p>
    
                <h3 class="legals-ter-title">Adresse</h3>
    
                <div class="content-group">
                    <p class="legals-txt">Les Mandarines / MDP</p>
                    <p class="legals-txt">My Digital School</p>
                    <p class="legals-txt">4 rue de la Chatterie</p>
                    <p class="legals-txt">44800 Saint Herblain</p>
                </div>
    
                <div class="content-group">
                    <p class="legals-txt">Forme juridique : SARL</p> 
                    <p class="legals-txt">Capital : 0 €</p>
                    <p class="legals-txt">Numéro d’immatriculation : 000.000.000.00000</p>  
                    <p class="legals-txt">Directeur de publication : équipe Les Mandarines </p>
                    <p class="legals-txt">Éditeurs principaux : équipe Les Mandarines</p> 
                </div>
    
                <h3 class="legals-ter-title">Crédits photos</h3>
    
                <div class="content-group">
                    <p class="legals-txt">Illustrations du site : Mélina pour la charte graphique (inclus le logo), Magaly pour les illustrations des bracelets.</p>
                    <p class="legals-txt">Pictogrammes issus ou inspirés de Freepick.</p> 
                    <p class="legals-txt">Photographies :</p> 
                    <p class="legals-txt">- L’équipe Mandarine pour les photos de ses membres</p>
                    <p class="legals-txt">- Adobe stock pour les photos d’illustration (festivals)</p> 
                    <p class="legals-txt">- Les photographies des avis sont des photographies personnelles des personnes ayant posté ces avis. Ils les ont fournies en connaissance de la politique de confidentialité.</p>
                </div>
    
                <h3 class="legals-ter-title">Hébergeur</h3>
    
                <p class="legals-txt">Site hébergé sur GitHub Pages</p> 
    
                <h3 class="legals-ter-title">Qui sommes-nous ?</h3>
    
                <div class="content-group">
                    <p class="legals-txt">L’adresse de notre site Web est : https://www.locme.fr</p>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    .legals-section {
        padding: $space-xxl 0 400px;
        background: lighten($primary, 40%) url('@/assets/images/bracelets-04.webp') no-repeat;
        background-position: bottom $space-l left $space-m;
        color: $dark;
    }

    .legals-title {
        text-transform: uppercase;
        margin: $space-l 0;
        &.__main {
            font-size: $fsize-xl;
            text-align: center;
            margin-bottom: $space-xxl;
        }
    }

    .legals-txt {
        &.__owner {
            color: lighten($dark, 10%);
        }
    }

    .legals-ter-title, .content-group {
        margin: $space-l 0;
    }
</style>