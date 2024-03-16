// auth.js (Vuex module for authentication)

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { notify } from '@kyvg/vue3-notification'

const state = {
    user: null,
    registering: false,
}

const getters = {
    isAuthenticated: (state) => state.user !== null,
    currentUser: (state) => state.user,
}

const actions = {
    register({ commit }, { email, password }) {
        // Email Validation
        if (!isValidEmail(email)) {
            notify({
                title: 'Invalid E-mail Format',
                text: 'Please enter a valid email address',
                type: 'error',
            })
            return
        }

        // Password Length Validation
        if (password.length <= 7) {
            notify({
                title: 'Password is too short',
                text: 'Password must be at least 8 characters long',
                type: 'error',
            })
            return
        }

        // Register
        const auth = getAuth()
        commit('setRegistering', true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                commit('setUser', user)
                notify({
                    title: 'Registration Successful!',
                    text: 'You would be redirected to your Dashboard Shortly!',
                    type: 'success',
                })
                // Redirect to dashboard or any other route
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                notify({
                    title: 'Registration Error',
                    text: errorMessage,
                    type: 'error',
                })
                commit('setRegistering', false)
            })
    },
}

const mutations = {
    setUser(state, user) {
        state.user = user
    },
    setRegistering(state, value) {
        state.registering = value
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}
