/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
// import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/dist/vuetify.min.css';
import 'vuetify/styles'
// import 'material-design-icons-iconfont/dist.material-design-icons.css'

// Composables
import { createVuetify } from 'vuetify'

import { VDatePicker } from 'vuetify/labs/VDatePicker'

// All Vuetify components
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({

  // icons:{
  //   iconfont: 'fa' || 'md'
  // },


  directives,

  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
  components: {
    VDatePicker,
  },
})
