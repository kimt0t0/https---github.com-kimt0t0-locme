<script lang="ts" setup>
    const reassurances: {
        title: String,
        paragraphs: String[],
        image: any
    }[] = [
        {
            title: "Gardez l'esprit tranquille",
            paragraphs: [
                "On s'occupe de tout !",
                "Une fois les bracelets loués, nos équipes gèrent l'organisation sur place: distribution aux festivaliers ayant réservé un bracelet, échange en cas de panne, support technique auprès de votre équipe de sécurité."
            ],
            image: 'reassurance_placeholder.jpg'
        }
    ]
</script>

<template>
    <section class="reassurance-section">
        <ul class="rs-list">
            <li class="reassurance-card" v-for="reassurance in reassurances">
                <img class="rc-icon" alt="illustration" src="'@/assets/icons/' + reassurance.image" />
                <h3 class="rc-title">{{ reassurance.title }}</h3>
                <div class="rc-txt">
                    <p v-for="par in reassurance.paragraphs">{{ par }}</p>
                </div>
            </li>
        </ul>
    </section>
</template>

<style lang="scss"></style>