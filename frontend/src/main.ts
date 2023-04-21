// IMPORTS
// Modules
import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faGlobe } from '@fortawesome/free-solid-svg-icons'
// Internal
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// Components
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Button from '@/components/Button.vue'
import Socials from '@/components/Socials.vue'

// LOGIC
// add icons to app library
library.add(faUser, faGlobe)

// create app
const app = createApp(App)

// app use modules
app.use(store)
  .use(router)

// add global components
app.component('Icon', FontAwesomeIcon)
  .component('Button', Button)
  .component('Socials', Socials)

// mount app
app.mount('#app')
