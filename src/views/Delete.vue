<template>
    <div>
      <section class="">
        <div
          class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
        >
          <!-- Logo -->
          <router-link to="/">
            <img src="../assets/logo.png" alt="Thrive Logo" class="w-16 h-16" />
          </router-link>
  
          <!-- Form Heading -->
          <div class="w-full rounded-lg mt-8 sm:max-w-md xl:p-0 border border-gray-100">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <!-- Text Header -->
              <button
                class="text-xl font-bold leading-tight tracking-tight text-gray-600 md:text-2xl"
              >
                Create an account
              </button>
  
              <!-- Form -->
              <form class="space-y-4 md:space-y-6" @submit.prevent="register">
                <!-- Email Address -->
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
                    >Email</label
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
                    type="password"
                    name="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    v-model="password"
                  />
                </div>
  
                <!-- Create an Account-->
                <button
                  type="submit"
                  class="w-full text-white bg-primary hover:bg-warning focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  :disabled="registering"
                >
                  <span v-if="registering"><i class="fas fa-spinner fa-spin"></i> </span>
                  <span v-else>Create an Account</span>
                </button>
  
                <!-- Log In -->
                <div class="text-sm font-light text-gray-500">
                  Already have an account?
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
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { notify } from "@kyvg/vue3-notification";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
        registering: false,
      };
    },
  
    methods: {
      // Email Validation Logic
      isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      },
  
      // Register
      register() {
        // Email Validation
        if (!this.isValidEmail(this.email)) {
          notify({
            title: "Invalid E-mail Format",
            text: "Please enter a valid email address",
            type: "error",
          });
          return;
        }
  
        // Password Length Validation
        if (this.password.length <= 7) {
          notify({
            title: "Password is too short",
            text: "Password must be at least 8 characters long",
            type: "error",
          });
          return;
        }
  
        // Register
        const auth = getAuth();
        this.registering = true;
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            notify({
              title: "Registration Successful!",
              text: "You would be redirected to your Dashboard Shortly!",
              type: "success",
            });
            this.$router.push("/dashboard");
          })
  
          // Firebase Errors
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            notify({
              title: "Registration Error",
              text: errorMessage,
              type: "error",
            });
            this.registering = false;
          });
      },
    },
  };
  </script>
  