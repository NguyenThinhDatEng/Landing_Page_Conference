import './assets/main.css'
import './assets/common.scss';

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserPlus, faLocationDot  } from '@fortawesome/free-solid-svg-icons'

library.add(faUserPlus, faLocationDot)

import GlobalComponents from './global-components'

const app = createApp(App)
app.use(GlobalComponents)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
