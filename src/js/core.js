import App from '../components/app.vue'
import '../css/style.sass'
const details = require('./details')
new Vue({ el: '#app', render: h => h(App, {props:{details:details}})})
