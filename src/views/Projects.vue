<template>
    <div class="container mx-auto">
        <!-- Heading for Projects -->
        <div>
            <p class="text-xl font-bold">Projects</p>
        </div>

        <!-- Search -->
        <div class="relative text-gray-600 search-bar sm:flex mt-4">
            <input
                class="bg-orange-50 h-10 px-5 rounded-full text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
            />
        </div>

        <!-- Project List-->
        <div class="container mx-auto">
            <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10"
            >
                <div v-for="(n, index) in 13" :key="index" class="col-span-1">
                    <BaseCard noPadding class="overflow-hidden mt-2">
                        <div class="px-6 py-6">
                            <!-- Project Details -->
                            <div>
                                <!-- Project Name -->
                                <div
                                    class="text-gray-500 text-2xl font-bold mt-0"
                                >
                                    Thrive Development
                                </div>

                                <!--Project Description  -->
                                <div class="mt-5">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. harum atque harum
                                        atque harum atque accusantium? ipsum
                                        dolor sit amet consectetur adipisicing
                                        elit...
                                    </p>
                                </div>

                                <!-- Project Classification -->

                                <div
                                    class="flex gap-4 text-2 mt-7"
                                    style="font-size: 12px"
                                >
                                    <p
                                        class="bg-orange-200 px-2 py-1 text-extrabold rounded-md"
                                    >
                                        Button
                                    </p>
                                    <p
                                        class="bg-orange-200 px-2 py-1 text-extrabold rounded-md"
                                    >
                                        Button
                                    </p>
                                    <p
                                        class="bg-orange-200 px-2 py-1 text-extrabold rounded-md"
                                    >
                                        Button
                                    </p>
                                </div>
                            </div>

                            <div class="mx-auto max-w-screen-xl text-gray-500">
                                <div
                                    class="mt-7 flex justify-between items-center"
                                >
                                    <!-- Ownership -->
                                    <div class="flex w">
                                        <div class="text-gray-400">
                                            <!-- Personal icon -->
                                            <!-- <span>
                                                <i class="fas fa-user mx-2"></i>
                                            </span> -->

                                            <!-- Personal icon -->
                                            <!-- <span>
                                                <i
                                                    class="fas fa-users mx-2"
                                                ></i>
                                            </span> -->

                                            <!-- Company icon -->
                                            <!-- <span>
                                            <i
                                                class="fas fa-university mx-2 "
                                            ></i>
                                        </span> -->
                                        </div>

                                        <p>Ade & Sons</p>
                                    </div>

                                    <!-- Completion Rate -->
                                    <p>45%</p>
                                </div>
                            </div>
                        </div>
                    </BaseCard>
                </div>
            </div>
        </div>
    </div>
</template>

