<template>
    <div class="container mx-auto">
        <!-- Heading for Projects -->
        <div>
            <p class="text-xl font-bold">Clients</p>
        </div>

        <!-- Search -->
        <div class="relative text-gray-600 search-bar sm:flex mt-4">
            <input
                class="bg-orange-50 bg-gray-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
            />
        </div>

        <!-- Clients Table -->
        <div class="col-span-12 mt-16">
                <div
                    class="block w-full overflow-x-auto whitespace-nowrap borderless hover"
                >
                    <div
                        class="dataTable-wrapper dataTable-loading no-footer fixed-columns"
                    >
                        <div
                            class="dataTable-container block w-full overflow-x-auto whitespace-nowrap borderless hover"
                        >
                            <table
                                class="table-3 dataTable-table max-w-full w-full"
                            >
                                <thead>
                                    <!-- S/N -->
                                    <tr class="">
                                        <th
                                            class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                                        >
                                            No.
                                        </th>

                                        <!-- Name -->
                                        <th
                                            class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                                        >
                                            Name
                                        </th>
                                        <!-- Email -->
                                        <th
                                            class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                                        >
                                            Email
                                        </th>

                                        <!-- Phone No -->
                                        <th
                                            class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                                        >
                                            Phone No.
                                        </th>

                                        <!-- Open Balance -->
                                        <th
                                            class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                                        >
                                            Open Balance
                                        </th>

                                     
                                    </tr>
                                </thead>

                                <!-- Table Body -->
                                <tbody>
                                    <tr
                                        class="hover:bg-gray-100 cursor-pointer"
                                        v-for="(n, index) in 2"
                                        :key="index"
                                    >
                                        <!-- S/N -->
                                        <td class="text-xs py-5 px-4">
                                            {{ index + 1 }}
                                        </td>

                                        <!-- Name -->

                                        <td class="py-5 font-extrabold">
                                            Randy Monye
                                        </td>

                                        <!-- Email -->

                                        <td class="py-5">
                                            <p>monyerandy15@gmail.com</p>
                                        </td>

                                        <!-- Phone No. -->

                                        <td class="py-5">0708 701 9218</td>

                                        <!-- Open Balance -->
                                        <td class="py-5">N1,200,000.47</td>

                                      
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

