<template>
    <section class="conditions-section">
        <div class="classic-container">
            <h1 class="conditions-title __main">Conditions Générales de l’Utilisateur et des Ventes (Locations) – CGUV</h1>

            <div class="conditions-contents">
                <p class="conditions-txt content-group">Les présentes Conditions Générales d’Utilisation et de Vente (ci-après les « CGUV ») sont proposées par la société LocMe, une société française (ci-après « LocMe »), propriétaire et opérateur de <RouterLink to='/' title="Aller vers le site">www.locme.fr</RouterLink> (le « Site », « Site LocMe », ou « LocMe »), de l’application LocMe (ci-après « Application », « Application LocMe », ou « Appli LocMe »), et du bracelet connecté LocMe (« Bracelet », « Bracelet LocMe », « Produit », ou « Service »). </p>
                <p class="conditions-txt content-group">LocMe propose, par l’intermédiaire de son site internet <RouterLink to='/' title="Aller vers le site">www.locme.fr</RouterLink>, la location (ci-après « commande », « location ») de bracelets connectés.</p>
                <p class="conditions-txt content-group">Chaque client reconnaît avoir eu connaissance, de manière lisible et compréhensible, des présentes CGUV ainsi que de l’ensemble des informations nécessaires à l’exécution des présentes, conformément aux articles L.111-1 à L.111-8 du Code de la consommation, préalablement à la passation de sa commande, à la création de comptes personnels sur le Site et avant toute conclusion d’un contrat avec LocMe.</p>
                
                <h2 class="conditions-title __second content-group">APPLICATION ET OPPOSABILITÉ DES CGUV</h2>


                <div class="content-group">
                    <p class="conditions-txt">Selon la loi n° 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers
                        et aux libertés :</p>
                    <p class="conditions-txt">“Les droits des personnes de décider et de contrôler les usages qui sont faits
                        des données à caractère personnel les concernant et les obligations incombant aux personnes qui
                        traitent ces données s’exercent dans le cadre du règlement (UE) 2016/679 du Parlement européen et du
                        Conseil du 27 avril 2016, de la directive (UE) 2016/680 du Parlement européen et du Conseil du 27
                        avril 2016 et de la présente loi.” (Ci-après le “RGPD”).</p>
                </div>

                <div class="content-group">
                    <p class="conditions-txt">Conformément à ladite-loi, les personnes ayant fourni des informations
                        personnelles ont un droit de regard total sur celles-ci. Pour exercer vos droits d’accès et de
                        modification sur ces données, envoyer un courrier électronique à l’adresse mail suivante :
                        contact@locme.fr ou s’adresser à LocMe via le formulaire de contact. De plus, aucune information
                        personnelle n’est collectée à l’insu des utilisateurs du site, ni cédée à des tiers, ni utilisée à
                        des fins personnelles.</p>
                </div>

                <h2 class="conditions-title __second content-group">Utilisation des données personnelles collectées </h2>
                <h3 class="conditions-ter-title content-group">1-collecte et traitement des données </h3>
                <p class="conditions-txt content-group">Lors d’une visite sur le site LocMe, qu’il loue ou non, achète (dans
                    une évolution possible du service LocMe) ou non, un produit, l’utilisateur renseigne les données
                    techniques comme les informations sur les cookies (en acceptant ou non la présence des cookies, tel
                    qu’indiqué sur l’onglet et la page de politique des cookies du site).</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use '@/styles/App.scss' as *;

.conditions-section {
    padding: $space-xxl 0 400px;
    background: lighten($primary, 40%) url('@/assets/images/bracelets-04.webp') no-repeat;
    background-position: bottom $space-l left $space-m;
    color: $dark;
}

.conditions-title {
    text-transform: uppercase;
    margin: $space-l 0;

    &.__main {
        font-size: $fsize-xl;
        text-align: center;
        margin-bottom: $space-xxl;
    }
}

.conditions-ter-title,
.content-group {
    margin: $space-l 0;
}

.conditions-txt {
    &.__italic {
        font-style: italic;
    }
}</style>