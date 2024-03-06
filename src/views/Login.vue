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
                        <h1
                            class="text-xl font-bold leading-tight tracking-tight text-gray-600 md:text-2xl"
                        >
                            Sign in to your account
                        </h1>

                        <!-- Form -->
                        <form class="space-y-4 md:space-y-6" action="#">
                            <!-- Email Address -->
                            <div>
                                <label
                                    for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900"
                                    >Email Address</label
                                >
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                    placeholder="name@mail.com"
                                    required=""
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
                                    id="password"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                                    required=""
                                />
                            </div>

                            <!-- Remember & Forgot Password -->
                            <div class="flex items-center justify-between">
                                <!-- Remember Me -->
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            class="w-4 h-4 border border-primary rounded bg-primary focus:ring-3 focus:ring-primary"
                                            required=""
                                        />
                                    </div>

                                    <div class="ml-3 text-sm">
                                        <label
                                            for="remember"
                                            class="text-gray-500"
                                            >Remember me</label
                                        >
                                    </div>
                                </div>

                                <!-- Forgot Password -->
                                <router-link
                                    to="/forgot-password"
                                    class="text-sm font-medium text-primary hover:underline"
                                    >Forgot password?</router-link
                                >
                            </div>

                            <!-- Login -->
                            <button
                                type="submit"
                                class="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Sign in
                            </button>
                            <div class="text-sm font-light text-gray-500">
                                Don’t have an account yet?
                                <router-link
                                    to="/register"
                                    class="font-medium text-primary hover:underline"
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

