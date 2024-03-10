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
                        <!-- Text Header -->
                        <button
                            class="text-xl font-bold leading-tight tracking-tight text-gray-600 md:text-2xl"
                        >
                            Create an account
                        </button>

                        <!-- Form -->
                        <form
                            class="space-y-4 md:space-y-6"
                            @submit.prevent="register"
                        >
                            <!-- Email Address -->
                            <div>
                                <label
                                    for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900"
                                    >Email</label
                                >
                                <input
                                    type="email"
                                    name="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                    v-model="name"
                                />
                            </div>

                            <!-- Password -->
                            <div>
                                <label
                                    for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900"
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
                                class="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Create an Account
                            </button>

                            <!-- Log In -->
                            <div class="text-sm font-light text-gray-500">
                                Already have an account?
                                <router-link
                                    to="/login"
                                    class="font-medium text-primary hover:underline"
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



