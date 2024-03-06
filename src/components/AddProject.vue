<template>
    <div>
        <!-- Add a Project Header -->
        <section>
            <p class="text-xl font-bold">Add a New Project</p>
        </section>

        <!-- Form Section -->
        <section class="overflow-hidden mt-10">
            <div class="md:flex">
                <form class="w-full md:w-2/3 lg:w-1/2">
                    <!-- Project Name -->
                    <div class="mb-9">
                        <label
                            for="name"
                            class="block text-gray-700 text-sm font-bold mb-2"
                            >Project Name</label
                        >
                        <input
                            type="text"
                            id="name"
                            v-model="name"
                            placeholder="Enter your name"
                            class="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                        />
                    </div>

                    <!-- Project Description -->
                    <div class="mb-9">
                        <label
                            for="description"
                            class="block text-gray-700 text-sm font-bold mb-2"
                            >Project Description</label
                        >
                        <textarea
                            id="description"
                            v-model="description"
                            placeholder="Enter project description"
                            class="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary resize-none h-24"
                        ></textarea>
                    </div>

                    <!-- Priority Level -->
                    <div class="mb-12">
                        <label
                            for="priority"
                            class="block text-gray-700 text-sm font-bold mb-2"
                            >Priority Level</label
                        >
                        <select
                            id="priority"
                            v-model="priority"
                            class="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <!-- Project Ownership -->
                    <div class="mb-9">
                        <div class="flex items-center justify-between">
                            <span
                                class="block text-gray-700 text-sm font-bold mb-2"
                                >{{ toggleLabel }}</span
                            >
                            <label class="switch">
                                <input
                                    type="checkbox"
                                    v-model="toggle"
                                    class="toggle-checkbox"
                                    @change="toggleChanged"
                                />
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>

                    <!-- Client Details Section -->
                    <div v-if="toggle">
                        <!-- Client Name -->
                        <div class="mb-9">
                            <label
                                for="clientName"
                                class="block text-gray-700 text-sm font-bold mb-2"
                                >Client Name</label
                            >
                            <select
                                id="clientName"
                                v-model="clientName"
                                class="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                            >
                                <option>Add New Client</option>
                                <option v-for="(n, index) in 4" :key="index">
                                    Randy
                                </option>
                            </select>
                        </div>

                        <!-- Currency -->
                        <div class="mb-9">
                            <label
                                for="currency"
                                class="block text-gray-700 text-sm font-bold mb-2"
                                >Currency</label
                            >
                            <select
                                id="currency"
                                v-model="currency"
                                class="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                            >
                                <option v-for="(n, index) in 4" :key="index">
                                    Naira
                                </option>
                            </select>
                        </div>

                        <!-- Amount -->
                        <div class="mb-9">
                            <label
                                for="amount"
                                class="block text-gray-700 text-sm font-bold mb-2"
                                >Amount</label
                            >
                            <input
                                type="text"
                                id="amount"
                                v-model="amount"
                                placeholder="Enter amount"
                                class="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                            />
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <button
                        @click="submitForm"
                        class="w-full mt-6 font-bold bg-primary text-white px-4 py-2 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-primary"
                    >
                        Save & Continue
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
            name: '',
            description: '',
            priority: '',
            toggle: false,
            clientName: '',
            clientEmail: '',
            clientPhone: '',
        }
    },
    computed: {
        toggleLabel() {
            return this.toggle ? 'Client Project' : 'Personal Project'
        },
    },
    methods: {
        toggleChanged() {
            if (!this.toggle) {
                // Reset client details when switching to personal project
                this.clientName = ''
                this.clientEmail = ''
                this.clientPhone = ''
            }
        },
        submitForm() {
            // Handle form submission here
            console.log('Form submitted')
        },
    },
}
</script>
  
  <style>
/* Add your custom styles here */
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
  