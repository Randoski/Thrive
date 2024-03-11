<template>
    <div>
        <section class="">
            <div
                class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
            >
                <!-- Logo -->
                <router-link to="/">
                    <img
                        src="../assets/logo.png"
                        alt="Thrive Logo"
                        class="w-16 h-16"
                    />
                </router-link>

                <!-- Form Heading -->
                <div
                    class="w-full bg-white rounded-lg shadow mt-8 sm:max-w-md xl:p-0"
                >
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <button
                            class="text-xl font-bold leading-tight tracking-tight text-gray-600 md:text-2xl"
                        >
                            Reset Your Password
                        </button>

                        <!-- Form -->
                        <form
                            class="space-y-4 md:space-y-6"
                            @submit.prevent="resetPassword"
                        >
                            <!-- Email Address -->
                            <div>
                                <label
                                    for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900"
                                    >Email</label
                                >
                                <input
                                    name="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                    v-model="email"
                                />
                            </div>

                            <!-- Reset Your Password -->
                            <button
                                type="submit"
                                class="w-full text-white bg-primary hover:bg-warning focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                :disabled="resetting"
                            >
                                <span v-if="resetting"
                                    ><i class="fas fa-spinner fa-spin"></i>
                                </span>
                                <span v-else>Reset Your Password</span>
                            </button>

                            <!-- Log In -->
                            <div class="text-sm font-light text-gray-500">
                                Remember Your Password?
                                <router-link
                                    to="/login"
                                    class="font-medium text-primary hover:underline hover:text-warning"
                                    >Login</router-link
                                >
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { notify } from '@kyvg/vue3-notification'

export default {
    data() {
        return {
            email: '',
            resetting: false,
        }
    },

    methods: {
        // Email Validation Logic
        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(email)
        },

        // Reset Password
        resetPassword() {
            // Email Validation
            if (!this.isValidEmail(this.email)) {
                notify({
                    title: 'Invalid E-mail Format',
                    text: 'Please enter a valid email address',
                    type: 'error',
                })
                return
            }

            // Reset Password
            const auth = getAuth()
            this.resetting = true
            sendPasswordResetEmail(auth, this.email)
                .then(() => {
                    notify({
                        title: 'Email Sent!',
                        text:
                            'A Password reset email has been sent to ' +
                            this.email,
                        type: 'success',
                    })
                    this.$router.push('/login')
                })

                // Firebase Error
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    notify({
                        title: 'Password reset Error',
                        text: errorMessage,
                        type: 'error',
                    })
                    this.resetting = false
                })
        },
    },
}
</script>

