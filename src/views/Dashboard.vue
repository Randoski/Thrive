<template>
    <div class="container mx-auto">

        <!-- Heading for Dashboard -->
        <div>
            <p class="text-xl font-bold">Dashboard</p>
        </div>

        <div class="grid grid-cols-12 gap-5 mt-10">
            <!-- Active Projects -->
            <div
                class="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-6"
            >
                <BaseCard noPadding class="overflow-hidden">
                    <div class="p-5">
                        <i class="fas fa-tasks fa-2x text-success"></i>
                        <div class="mt-28">
                            <p
                                class="text-gray-500 text-5xl m-0 font-extrabold"
                            >
                                5
                            </p>
                            <div class="text-gray-500 font-bold mt-2">
                                Active Projects
                            </div>
                        </div>
                    </div>
                </BaseCard>
            </div>

            <!-- Completed Projects -->
            <div
                class="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-6"
            >
                <BaseCard noPadding class="overflow-hidden">
                    <div class="p-5">
                        <i class="fas fa-trophy fa-fw fa-2x text-primary"></i>
                        <div class="mt-28">
                            <p
                                class="text-gray-500 text-5xl m-0 font-extrabold"
                            >
                                2
                            </p>
                            <div class="text-gray-500 font-bold mt-2">
                                Completed Projects
                            </div>
                        </div>
                    </div>
                </BaseCard>
            </div>

            <!-- Upcoming Projects -->
            <div
                class="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-6"
            >
                <BaseCard noPadding class="overflow-hidden">
                    <div class="p-5">
                        <i
                            class="fas fa-calendar-alt fa-fw fa-2x text-info"
                        ></i>
                        <div class="mt-28">
                            <p
                                class="text-gray-500 text-5xl m-0 font-extrabold"
                            >
                                0
                            </p>
                            <div class="text-gray-500 font-bold mt-2">
                                Upcoming Projects
                            </div>
                        </div>
                    </div>
                </BaseCard>
            </div>

            <!-- Overdue Projects -->
            <div
                class="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-6"
            >
                <BaseCard noPadding class="overflow-hidden">
                    <div class="p-5">
                        <i
                            class="fas fa-hourglass-half fa-fw fa-2x text-danger"
                        ></i>
                        <div class="mt-28">
                            <p
                                class="text-gray-500 text-5xl m-0 font-extrabold"
                            >
                                0
                            </p>
                            <div class="text-gray-500 font-bold mt-2">
                                Overdue Projects
                            </div>
                        </div>
                    </div>
                </BaseCard>
            </div>

            <!-- Pending Tasks Table -->
            <div class="col-span-12">
                <BaseCard>
                    <template v-slot:cardHeader>
                        <div class="card-header">
                            <div class="card-title py-3 font-bold">
                                Pending Tasks
                            </div>
                        </div>
                    </template>

                    <div
                        class="block w-full overflow-x-auto whitespace-nowrap borderless hover"
                    >
                        <div
                            class="dataTable-wrapper dataTable-loading no-footer fixed-columns"
                        >
                            <div
                                class="dataTable-container block w-full overflow-x-auto whitespace-nowrap borderless hover"
                            >
                                <!-- Loading -->
                                <i
                                    class="fa fa-refresh fa-spin fa-3x fa-fw"
                                ></i>
                                <span class="sr-only">Loading...</span>
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

                                            <!-- Project Name -->
                                            <th
                                                class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                                            >
                                                Project
                                            </th>
                                            <!-- Project Description -->
                                            <th
                                                class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                                            >
                                                Description
                                            </th>

                                            <!-- Project Priority -->
                                            <th
                                                class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                                            >
                                                Project Priority
                                            </th>

                                            <!-- Project Deadline -->
                                            <th
                                                class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold"
                                            >
                                                Deadline
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

                                            <!-- Project Name -->

                                            <td class="py-5 font-extrabold">
                                                Website Development
                                            </td>

                                            <!-- Project Description -->

                                            <td class="py-5">
                                                <p>
                                                    This is the description of
                                                    the Project, it might be
                                                    long or not
                                                </p>
                                            </td>

                                            <!-- Project Priority -->

                                            <td class="py-5">
                                                <span
                                                    class="px-3 py-1 rounded-full text-primary border border-primary mr-3 text-xs"
                                                    >Delivered</span
                                                >
                                            </td>

                                            <!-- Project Deadline -->
                                            <td class="py-5">
                                                {{ 3.34 * index + 1 }}%
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </BaseCard>
            </div>
        </div>
    </div>
</template>