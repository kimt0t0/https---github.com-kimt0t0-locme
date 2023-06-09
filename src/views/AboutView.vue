<template>
  <section class="section-classic section-about">
    <h1 class="sa-title">Qui sommes-nous ?</h1>
    <img class="about-picture" src="@/assets/images/team.webp" alt="Photographie des membres de notre équipe" />

    <div class="sa-contents">

      <HeroSecondary color="dark" icon="dark">La Dream Team</HeroSecondary>

      <div class="sac-bloc">
        <p class="classic-txt">Notre équipe est composée de six étudiants passionnés du digital, provenant de différentes filières de l'école MyDigitalSchool à Nantes. Nous avons uni nos compétences et notre créativité pour travailler ensemble sur ce projet de bracelet connecté pour les festivals. Nous avons chacun apporté notre expertise, que ce soit en développement web, design, marketing digital ou encore communication.</p>
      </div>

      <div class="sac-bloc">
        <p class="classic-txt">Nous sommes fiers de pouvoir offrir une solution innovante et pratique aux organisateurs de festivals, ainsi qu'aux festivaliers, pour améliorer leur expérience en toute sécurité.</p>
        <p class="classic-txt">Nous sommes à votre écoute pour répondre à vos questions et vous accompagner dans l'utilisation de nos services.</p>
      </div>

      <div class="sac-bloc __btn-bloc">
        <ButtonLink color="primary" size="large" path="/contact">Nous contacter</ButtonLink>
      </div>
    </div>

  </section>
</template>

<style lang="scss">
  @use '@/styles/App.scss' as *;

  .sa-title {
    font-size: $fsize-xl;
    text-transform: uppercase;
    text-align: center;
  }

  .about-picture {
    max-width: $classic-ctn;
    margin: $space-xl 0;

    @media (max-width: $bp-l) {
      width: 100%;
    }
  }

  .sa-contents {
    @media (max-width: $bp-l) {
      padding: 0 $space-s;
    }
  }
  
  .sac-bloc {
    margin: $space-l 0;
    &.__btn-bloc {
      display: flex;
      justify-content: center;
    }
  }
</style>
