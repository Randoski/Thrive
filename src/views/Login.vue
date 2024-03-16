<template>
  <div>
    <section>
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <!-- Logo -->
        <router-link to="/">
          <img src="../assets/logo.png" alt="Thrive Logo" class="w-12 h" />
        </router-link>

        <!-- Form Heading -->
        <div class="w-full rounded-lg mt-8 sm:max-w-md xl:p-0 border border-gray-100">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <!-- Text Header -->
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-600 md:text-2xl"
            >
              Sign in to your account
            </h1>

            <!-- Form -->
            <form class="space-y-4 md:space-y-6" @submit.prevent="login">
              <!-- Email Address -->
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
                  >Email Address</label
                >
                <input
                  name="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
                  v-model="email"
                />
              </div>

              <!-- Password -->
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900"
                  >Password</label
                >
                <input
                  name="password"
                  type="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  v-model="password"
                />
              </div>

              <!-- Forgot Password -->
              <router-link
                to="/forgot-password"
                class="text-sm font-medium text-gray-500 hover:underline item-center float-right"
                >Forgot password?</router-link
              >

              <!-- Sign in -->
              <button
                type="submit"
                class="w-full text-white bg-primary hover:bg-warning focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                :disabled="loading"
              >
                <span v-if="loading"><i class="fas fa-spinner fa-spin"></i> </span>
                <span v-else>Sign In</span>
              </button>

              <div class="text-sm font-light text-gray-500">
                Don’t have an account yet?
                <router-link
                  to="/register"
                  class="font-medium text-primary hover:underline hover:text-warning"
                  >Sign up</router-link
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { notify } from "@kyvg/vue3-notification";

export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },

  methods: {
    // Email Validation Logic
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    // Login
    login() {
      // Email Validation
      if (!this.isValidEmail(this.email)) {
        notify({
          title: "Invalid E-mail Format",
          text: "Please enter a valid email address",
          type: "error",
        });
        return;
      }

      // Login
      const auth = getAuth();
      this.loading = true;
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          notify({
            title: "Authentication Successful!",
            text: "You would be redirected to your Dashboard Shortly!",
            type: "success",
          });
          this.$router.push("/dashboard");
        })

        // Firebase Error
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          notify({
            title: "Authentication Error!",
            text: errorMessage,
            type: "error",
          });
          this.loading = false;
        });
    },
  },
};
</script>

<style>
input[type="password"] {
  outline: none;
  -webkit-appearance: none; /* For Safari and older versions of Chrome */
}
</style>
