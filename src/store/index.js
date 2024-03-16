import { createStore } from 'vuex'


import largeSidebar from './modules/largeSidebar'
import auth from './modules/auth'


export default  createStore({
    modules: {
        largeSidebar,
        auth
        
    }
});