<template>
    <div>
        <header>
            <!-- Navbar -->
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-4">
                <div
                    class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
                >
                    <!-- Logo -->
                    <router-link to="/" class="flex items-center">
                        <img
                            src="../assets/images/Thrive.svg"
                            class="mr-3 h-6 sm:h-9"
                            alt="Thrive Logo"
                        />
                    </router-link>

                    <div class="flex items-center lg:order-2">
                        <!-- Login -->
                        <router-link
                            to="/login"
                            class="text-gray-00 hover:bg-gray-100 focus:ring-4 focus:ring-transparent font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >Login</router-link
                        >

                        <!-- Get Started -->
                        <router-link
                            to="/register"
                            class="text-white bg-primary hover:bg-orange-600 focus:ring-4 focus:ring-transparent font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >Get started</router-link
                        >
                    </div>
        
                </div>
            </nav>
        </header>
    </div>
</template>

