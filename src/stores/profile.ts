// // IMPORTS
// import { defineStore } from 'pinia'
// import { ref } from 'vue'

// // LOGIC
// export const useProfileStore = defineStore('profile', () => {
//     // Connexion state
//     const connected = ref<boolean>(false)

//     const setConnected = (value: boolean) => {
//         connected.value = value
//     }

//     const userProfile: {
//         name: string,
//         age: string,
//         role: string,
//         avatar: string
//     } = {
//         name: "Lucas Fet",
//         age: "38",
//         role: 'ORGANIZER',
//         avatar: 'lucas.webp'
//     }

//     return {
//         // variables
//         connected,
//         userProfile,
//         // functions
//         setConnected
//     }

// })