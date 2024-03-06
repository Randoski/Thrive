<template>
    <div>
        <section class="bg-white mt-14">
            <div
                class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
            >
                <router-link
                    to="/register"
                    class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200"
                    role="alert"
                >
                    <span
                        class="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3"
                        >New</span
                    >
                    <span class="text-sm font-medium"
                        >Thrive is here to help you work Better</span
                    >
                    <svg
                        class="ml-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </router-link>

                <!-- Text Heading -->
                <h1
                    class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-600 md:text-5xl lg:text-6xl"
                >
                    This is going to be the heading.
                </h1>

                <!-- Hero Copy -->
                <p
                    class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48"
                >
                    This is the hero text This is the hero textThis is the hero
                    text This is the hero text This is the hero text This is the
                    hero text This is the hero text
                </p>

                <div
                    class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
                >
                    <!-- Get Started -->
                    <router-link
                        to="/register"
                        class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-orange-500 focus:ring-4 focus:ring-transparent"
                    >
                        Get Started
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

