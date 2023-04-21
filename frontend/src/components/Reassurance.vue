<script lang="ts" setup>
    const reassurances: {
        title: String,
        paragraphs: String[],
        image: String
    }[] = [
        {
            title: "Gardez l'esprit tranquille",
            paragraphs: [
                "On s'occupe de tout !",
                "Une fois les bracelets loués, nos équipes gèrent l'organisation sur place: distribution aux festivaliers ayant réservé un bracelet, échange en cas de panne, support technique auprès de votre équipe de sécurité."
            ],
            image: 'rplaceholder.jpg'
        },
        {
            title: "Gardez l'esprit tranquille",
            paragraphs: [
                "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
            ],
            image: 'rplaceholder.jpg'
        },
        {
            title: "Gardez l'esprit tranquille",
            paragraphs: [
                "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
            ],
            image: 'rplaceholder.jpg'
        },
        {
            title: "Gardez l'esprit tranquille",
            paragraphs: [
                "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
            ],
            image: 'rplaceholder.jpg'
        },
        {
            title: "Gardez l'esprit tranquille",
            paragraphs: [
                "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
            ],
            image: 'rplaceholder.jpg'
        },
    ]
</script>

<template>
    <section class="reassurance-section section-classic">
        <ul class="rs-list">
            <li class="reassurance-card" v-for="reassurance in reassurances">
                <img class="rc-icon" alt="illustration" :src="require(`@/assets/icons/${reassurance.image}`)" />
                <h3 class="rc-title">{{ reassurance.title }}</h3>
                <div class="rc-text">
                    <p v-for="par in reassurance.paragraphs">{{ par }}</p>
                </div>
            </li>
        </ul>
    </section>
</template>

<style lang="scss">
@use '@/styles/App.scss' as *;
.reassurance-section {
    margin: $space-xl 0;
    .rs-list {
        display: flex;
        justify-content: space-between;
        .reassurance-card {
            box-sizing: border-box;
            width: 200px;
            margin: 0 $space-s;
            display: flex;
            align-items: center;
            flex-direction: column;
            .rc-icon {
                height: 100px;
                width: 70px;
            }
            .rc-title {
                max-width: 180px;
                text-align: center;
                margin: $space-s 0;
            }
            .rc-text {
                box-sizing: border-box;
                width: 200px;
                height: 300px;
                padding: $space-m $space-s;
                background-color: lighten($c-txt, 50%);
                border-radius: $radius-xxs;
                overflow: hidden;
                flex-wrap: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>