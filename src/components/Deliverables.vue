<template>
    <div>
        <!-- Deliverables Header -->
        <section>
            <p class="text-xl font-bold">{{ projectName }} Deliverables</p>
            <p class="mt-3">Lorem, ipsum dolor sit nobis! Veritatis voluptates in deserunt repellendus delectus.</p>
        </section>

        <!-- Deliverables Form Section -->
        <section class="overflow-hidden mt-10">
            <div class="md:flex">
                <form class="w-full md:w-2/3 lg:w-1/2">
                    <!-- Deliverable Name -->
                    <div class="mb-9">
                        <label
                            for="deliverableName"
                            class="block text-gray-700 text-sm font-bold mb-2"
                            >Deliverable Name</label
                        >
                        <input
                            type="text"
                            id="deliverableName"
                            v-model="deliverableName"
                            placeholder="Enter deliverable name"
                            class="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                        />
                    </div>

                    <!-- Deliverable Description -->
                    <div class="mb-9">
                        <label
                            for="deliverableDescription"
                            class="block text-gray-700 text-sm font-bold mb-2"
                            >Deliverable Description</label
                        >
                        <textarea
                            id="deliverableDescription"
                            v-model="deliverableDescription"
                            placeholder="Enter deliverable description"
                            class="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary resize-none h-24"
                        ></textarea>
                    </div>

                    <!-- Deliverable Dates -->
                    <div class="mb-9 md:flex md:space-x-4">
                        <div class="mb-4 md:w-1/2">
                            <label
                                for="startDate"
                                class="block text-gray-700 text-sm font-bold mb-2"
                                >Start Date</label
                            >
                            <input
                                type="date"
                                id="startDate"
                                v-model="startDate"
                                class="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                            />
                        </div>
                        <div class="mb-4 md:w-1/2">
                            <label
                                for="endDate"
                                class="block text-gray-700 text-sm font-bold mb-2"
                                >End Date</label
                            >
                            <input
                                type="date"
                                id="endDate"
                                v-model="endDate"
                                class="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                            />
                        </div>
                    </div>

                    <!-- Tasks -->
                    <div v-for="(task, index) in tasks" :key="index">
                        <div class="mb-9">
                            <label
                                for="taskName"
                                class="block text-gray-700 text-sm font-bold mb-2"
                                >Task Name</label
                            >
                            <input
                                type="text"
                                v-model="task.name"
                                placeholder="Enter task name"
                                class="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                            />
                        </div>
                        <div class="mb-9">
                            <label
                                for="taskDescription"
                                class="block text-gray-700 text-sm font-bold mb-2"
                                >Task Description</label
                            >
                            <textarea
                                v-model="task.description"
                                placeholder="Enter task description"
                                class="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary resize-none h-24"
                            ></textarea>
                        </div>
                        <div class="mb-9 md:flex md:space-x-4">
                            <div class="mb-4 md:w-1/2">
                                <label
                                    for="taskStartDate"
                                    class="block text-gray-700 text-sm font-bold mb-2"
                                    >Task Start Date</label
                                >
                                <input
                                    type="date"
                                    v-model="task.startDate"
                                    class="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div class="mb-4 md:w-1/2">
                                <label
                                    for="taskEndDate"
                                    class="block text-gray-700 text-sm font-bold mb-2"
                                    >Task End Date</label
                                >
                                <input
                                    type="date"
                                    v-model="task.endDate"
                                    class="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                                />
                            </div>
                        </div>
                    </div>

                    <!-- Add Task Button -->
                    <button
                        @click.prevent="addTask"
                        class="w-full mt-6 font-bold bg-primary text-white px-4 py-2 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-primary"
                    >
                        Add Task
                    </button>

                    <!-- Save Deliverable Button -->
                    <button
                        @click.prevent="saveDeliverable"
                        class="w-full mt-6 font-bold bg-primary text-white px-4 py-2 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-primary"
                    >
                        Save Deliverable
                    </button>
                </form>
            </div>
        </section>
    </div>
</template>
  
  <script>
export default {
    data() {
        return {
            projectName: 'ProjectName',
            deliverableName: '',
            deliverableDescription: '',
            startDate: '',
            endDate: '',
            tasks: [],
        }
    },
    methods: {
        addTask() {
            this.tasks.push({
                name: '',
                description: '',
                startDate: '',
                endDate: '',
            })
        },
        saveDeliverable() {
            // Handle saving the deliverable and tasks
            console.log('Deliverable saved')
        },
    },
}
</script>
  
  <style>
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
}

.slider:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 5px;
    bottom: 5px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
}

input:checked + .slider {
    background-color: #ff9900;
}

input:focus + .slider {
    box-shadow: 0 0 1px #ff9900;
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
  