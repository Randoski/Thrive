<template>
    <div>
        <section class="bg-white">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="max-w-screen-md">
                    <!-- First Heading -->
                    <h2
                        class="mb-4 text-4xl tracking-tight font-extrabold text-gray-600"
                    >
                        Let's find more that brings us together.
                    </h2>

                    <!-- First Hero Text -->
                    <p class="mb-8 font-light text-gray-500 sm:text-xl">
                        Flowbite helps you connect with friends, family and
                        communities of people who share your interests.
                        Connecting with your friends and family as well as
                        discovering new ones is easy with features like Groups,
                        Watch and Marketplace.
                    </p>

                    <!-- First CTA -->
                    <router-link
                        to="register"
                        class="text-white bg-primary hover:bg-warning focus:ring-4 focus:ring-transparent font-bold rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Get started
                       
                    </router-link>
                </div>
            </div>
        </section>

        <section class="bg-white">
            <div
                class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
            >
                <img
                    class="w-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
                    alt="dashboard image"
                />
                <img
                    class="w-full hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
                    alt="dashboard image"
                />
                <div class="mt-4 md:mt-0">
                    <!-- Second Heading -->
                    <h2
                        class="mb-4 text-4xl tracking-tight font-extrabold text-gray-600"
                    >
                        Let's create more tools and ideas that brings us
                        together.
                    </h2>

                    <!-- Second Hero Text -->
                    <p class="mb-6 font-light text-gray-500 md:text-lg">
                        Flowbite helps you connect with friends and communities
                        of people who share your interests. Connecting with your
                        friends and family as well as discovering new ones is
                        easy with features like Groups.
                    </p>

                    <!-- Second CTA -->
                    <router-link
                        to="/register"
                        class=" text-white bg-primary hover:bg-warning focus:ring-4 focus:ring-transparent font-bold rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Get started
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

