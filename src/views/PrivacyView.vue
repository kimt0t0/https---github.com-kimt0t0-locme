<template>
    <section class="privacy-section">
        <div class="classic-container">
            <h1 class="privacy-title __main">Politique de confidentialité</h1>

            <div class="privacy-contents">
                <p class="privacy-txt __italic content-group">Mis à jour le 16 mai 2023</p>
                <p class="privacy-txt content-group">La présente Politique de confidentialité vise à apporter les précisions nécessaires quant aux données à caractère personnel collectées par LocMe auprès des utilisateurs, ainsi que les mesures mises en œuvre pour garantir leur protection. Elle doit être lue et comprise en parallèle des Conditions Générales de Vente de LocMe, également publiées sur le site et accessibles par les utilisateurs, particulièrement lors de la création de leur compte personnel et du calcul estimatif d’une location de bracelets. </p>
                <p class="privacy-txt content-group">Cette Politique de confidentialité est accessible en permanence sur le Site. Elle matérialise, avec les Conditions Générales de Vente, acceptées dans leur intégralité et sans réserve par l’utilisateur lors de son inscription sur le site et lors du calcul estimatif d’une location de bracelets, la relation contractuelle entre cet utilisateur et LocMe. </p>
                
                <h2 class="privacy-title __second content-group">Loi “informatique et libertés”</h2>
                

                <div class="content-group">
                    <p class="privacy-txt">Selon la loi n° 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés :</p>
                    <p class="privacy-txt">“Les droits des personnes de décider et de contrôler les usages qui sont faits des données à caractère personnel les concernant et les obligations incombant aux personnes qui traitent ces données s’exercent dans le cadre du règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016, de la directive (UE) 2016/680 du Parlement européen et du Conseil du 27 avril 2016 et de la présente loi.” (Ci-après le “RGPD”).</p>
                </div>

                <div class="content-group">
                    <p class="privacy-txt">Conformément à ladite-loi, les personnes ayant fourni des informations personnelles ont un droit de regard total sur celles-ci. Pour exercer vos droits d’accès et de modification sur ces données, envoyer un courrier électronique à l’adresse mail suivante : contact@locme.fr ou s’adresser à LocMe via le formulaire de contact. De plus, aucune information personnelle n’est collectée à l’insu des utilisateurs du site, ni cédée à des tiers, ni utilisée à des fins personnelles.</p>
                </div>

                <h2 class="privacy-title __second content-group">Utilisation des données personnelles collectées </h2>
                <h3 class="privacy-ter-title content-group">1-collecte et traitement des données </h3>
                <p class="privacy-txt content-group">Lors d’une visite sur le site LocMe, qu’il loue ou non, achète (dans une évolution possible du service LocMe) ou non, un produit, l’utilisateur renseigne les données techniques comme les informations sur les cookies (en acceptant ou non la présence des cookies, tel qu’indiqué sur l’onglet et la page de politique des cookies du site).</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use '@/styles/App.scss' as *;

.privacy-section {
    padding: $space-xxl 0 400px;
    background: lighten($primary, 40%) url('@/assets/images/bracelets-04.webp') no-repeat;
    background-position: bottom $space-l left $space-m;
    color: $dark;
}

.privacy-title {
    text-transform: uppercase;
    margin: $space-l 0;

    &.__main {
        font-size: $fsize-xl;
        text-align: center;
        margin-bottom: $space-xxl;
    }
}

.privacy-ter-title,
.content-group {
    margin: $space-l 0;
}
.privacy-txt {
    &.__italic {
        font-style: italic;
    }
}
</style>