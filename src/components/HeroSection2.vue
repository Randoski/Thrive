<template>
    <div>
        <section class="bg-gray-100">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <!-- Heading Text -->
                    <h2
                        class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-600"
                    >
                        Get Started
                    </h2>

                    <!-- Body Copt -->
                    <p
                        class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg"
                    >
                        Start Managing your Projects Now!
                    </p>

                    <!-- CTA -->
                    <router-link
                        to="/register"
                        class="inline-flex items-center text-white bg-primary hover:bg-orange-600 focus:ring-4 focus:ring-transparent font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Get started
                        <svg
                            class="ml-2 -mr-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

