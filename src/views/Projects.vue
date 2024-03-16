<template>
    <div class="container mx-auto">
        <!-- Heading for Projects -->
        <div>
            <div
                class="relative overflow-hidden bg-primary rounded-lg border-prima"
            >
                <div
                    class="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4"
                >
                    <div>
                        <h5 class="mr-3 font-bold text-xl dark:text-white">
                            Projects
                        </h5>
                        <p class="text-white text-sm">
                            Manage all your existing Projects & add new ones
                        </p>
                    </div>

                    <!-- Add Project -->
                    <button
                        type="button"
                        class="flex items-center justify-center px-4 py-2 text-sm text-primary rounded-md bg-white focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5 mr-2 -ml-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                            />
                        </svg>
                        Add new Project
                    </button>
                </div>
            </div>

            <!-- Alternative Heading for Projects -->
            <!-- <div
                class="relative overflow-hidden border border-primary rounded-lg"
            >
                <div
                    class="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4"
                >
                    <div>
                        <h5 class="mr-3 font-bold text-xl text-gray-700">
                            Projects
                        </h5>
                        <p class="text-gray-700 text-sm">
                            Manage all your existing Projects & add new ones
                        </p>
                    </div>

                    <button
                        type="button"
                        class="flex items-center justify-center px-4 py-2 text-sm text-white rounded-md bg-primary focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5 mr-2 -ml-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                            />
                        </svg>
                        Add new Project
                    </button>
                </div>
            </div> -->
        </div>

        <!-- Search -->
        <div class="relative w-full mt-4">
            <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
                <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
            <input
                type="text"
                id="simple-search"
                class="bg-orange-50 text-gray-700 text-sm rounded-sm block w-full md:w-72 pl-10 p-2 focus:outline-none focus:ring-0 focus:ring-transparent"
                placeholder="Search"
                required=""
            />
        </div>

        <!-- Project List-->
        <div class="container mx-auto mt-10">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div v-for="(n, index) in 7" :key="index" class="col-span-1">
                    <!-- Project Container -->
                    <div class="p-5 bg-orange-50 rounded-lg">
                        <!-- Project Name -->
                        <h5 class="font-extrabold tracking-tight text-gray-500">
                            Sparkles Dev
                        </h5>

                        <!-- Project Owner -->
                        <p class="text-xs text-gray-500">Newton & Co</p>

                        <!-- Project Description -->
                        <p class="mt-3 mb-4 text-gray-500 text-xs">
                            Bonnie drives the technical strategy of the flowbite
                            platform and brand.
                        </p>

                        <div
                            class="flex justify-between items-center space-x-4 sm:mt-0 text-gray-500"
                        >
                            <!-- Other Project Info -->
                            <div class="flex gap-3 text-xs">
                                <small
                                    class="bg-red-200 text-red-500 px-1 rounded-sm font-bold"
                                    >Button</small
                                >
                                <small
                                    class="bg-blue-200 text-blue-500 px-1 rounded-sm font-bold"
                                    >Button</small
                                >
                                <small
                                    class="bg-green-200 text-green-500 px-1 rounded-sm font-bold"
                                    >Button</small
                                >
                            </div>

                            <!-- Completion Percentage -->
                            <h5 class="font-extrabold text-sm">45%</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
