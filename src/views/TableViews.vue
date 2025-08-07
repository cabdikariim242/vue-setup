<template>
  <div
    class="flex flex-col justify-between lg:flex-row md:flex-row absolute lg:top-[150px] md:top-[150px] top-[110px] left-0 right-0 lg:ml-[125px] md:ml-[125px] ml-4 mr-[20px] 2xl:ml-[360px] 2xl:mr-[270px]"
  >
    <div
      class="lg:p-10 md:p-5 p-[5px] bg-white dark:bg-[#0f0f0f] dark:text-white w-full rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div class="overflow-x-auto lg:p-4 md:p-4 p-[4px]">
        <!-- Filter Section -->
        <div class="flex justify-between w-full flex-wrap gap-4 mb-4">
          <input
            type="text"
            v-model="searchText"
            placeholder="Search by name, gender, status, age, or date"
            class="w-full md:w-[400px] px-4 py-2 border border-gray-300 bg-gray-600 text-white dark:text-black placeholder:text-white dark:placeholder:text-black rounded-lg focus:outline-none focus:ring focus:border-blue-400"
          />

          <div class="flex items-center gap-4">
            <label
              ><input type="radio" value="all" v-model="dateFilter" /> Show
              All</label
            >
            <label
              ><input type="radio" value="past" v-model="dateFilter" />
              Past</label
            >
            <label
              ><input type="radio" value="today" v-model="dateFilter" />
              Today</label
            >
          </div>
        </div>

        

        <!-- Loading Spinner -->
        <div v-if="isLoading" class="flex justify-center py-6">
          <svg
            class="animate-spin h-8 w-8 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="2"
            />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        </div>

        <!-- Table Section -->
        <table
          v-else
          class="table-auto w-full border bg-black border-gray-300 rounded-lg shadow-md"
        >
          <thead class="bg-gray-500 text-white">
            <tr>
              <th class="lg:px-4 md:px-2 sm:px-1 px-[5px] py-2">Full Name</th>
              <th
                class="lg:px-4 md:px-2 sm:px-1 px-[5px] py-2 hidden lg:flex md:flex"
              >
                Image
              </th>
              <th class="lg:px-4 md:px-2 sm:px-1 px-[5px] py-2">Gender</th>
              <th class="lg:px-4 md:px-2 sm:px-1 px-[5px] py-2">Status</th>
              <th class="lg:px-4 md:px-2 sm:px-1 px-[5px] py-2">Joined</th>
              <th class="lg:px-4 md:px-2 sm:px-1 px-[5px] py-2">Age</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-black text-gray-500 dark:text-white">
            <tr
              v-for="(member, index) in filteredMembers"
              :key="index"
              class="text-center transition duration-200"
            >
              <td class="lg:px-4 md:px-2 sm:px-1 px-[5px] py-2">
                {{ member.fullName }}
              </td>
              <td
                class="lg:px-4 md:px-2 sm:px-1 px-[5px] py-2 hidden lg:flex md:flex"
              >
                <img
                  :src="member.image"
                  :alt="member.fullName"
                  class="w-[50px] h-[50px] rounded-full mx-auto border border-gray-400"
                />
              </td>
              <td class="lg:px-4 md:px-2 sm:px-1 px-[5px] py-2">
                {{ member.gender }}
              </td>
              <td class="lg:px-4 md:px-2 sm:px-1 px-[5px] py-2">
                <span
                  :class="
                    member.status === 'joogo'
                      ? 'bg-green-600 font-semibold lg:px-2 md:px-1 px-[5px] py-1 rounded-lg text-white'
                      : 'bg-red-600 font-semibold lg:px-2 md:px-1 px-[5px] py-1 rounded-lg text-white'
                  "
                >
                  {{ member.status }}
                </span>
              </td>
              <td class="lg:px-4 md:px-2 sm:px-1 px-[5px] py-2">
                {{ member.joined }}
              </td>
              <td class="lg:px-4 md:px-2 sm:px-1 px-[5px] py-2">
                {{ member.age }}
              </td>
            </tr>

            <tr v-if="filteredMembers.length === 0">
              <td colspan="6" class="text-center text-red-500 py-4">
                ❌ Ma jiro user la helay!
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Show Limit Buttons -->
        <div class="flex gap-4 justify-end mt-4 mb-4">
          <button
            @click="displayLimit = 20"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Show 20
          </button>
          <button
            @click="displayLimit = 30"
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Show 30
          </button>
          <button
            @click="displayLimit = 'all'"
            class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            Show All
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";

export default {
  components: { BaseCard },

  data() {
    return {
      searchText: "",
      dateFilter: "all",
      displayLimit: "10",
      isLoading: false,
      teamMembers: [
        {
          fullName: "Amina Mohamed",
          image: require("../assets/3.jpeg"),
          gender: "Female",
          status: "joogo",
          joined: "2023-05-01",
          age: 28,
        },
        {
          fullName: "Abdullahi Yusuf",
          image: require("../assets/2.jpeg"),
          gender: "Male",
          status: "maqan",
          joined: "2022-11-15",
          age: 34,
        },
        {
          fullName: "Hodan Ahmed",
          image: require("../assets/5.jpeg"),
          gender: "Female",
          status: "joogo",
          joined: "2025-07-30",
          age: 25,
        },
        {
          fullName: "Farxan Ahmed",
          image: require("../assets/1.jpeg"),
          gender: "Female",
          status: "maqan",
          joined: "2025-08-04",
          age: 25,
        },
        {
          fullName: "Amina Mohamed",
          image: require("../assets/femal 1.avif"),
          gender: "Female",
          status: "joogo",
          joined: "2023-03-10",
          age: 28,
        },
        {
          fullName: "Hodan Ahmed",
          image: require("../assets/female 2.avif"),
          gender: "Female",
          status: "maqan",
          joined: "2022-08-25",
          age: 25,
        },
        {
          fullName: "Layla Hassan",
          image: require("../assets/female 3.avif"),
          gender: "Female",
          status: "joogo",
          joined: "2021-12-01",
          age: 30,
        },
        {
          fullName: "Ifrah Ali",
          image: require("../assets/female 4.avif"),
          gender: "Female",
          status: "maqan",
          joined: "2024-06-15",
          age: 29,
        },
        {
          fullName: "Zahra Osman",
          image: require("../assets/female 5.avif"),
          gender: "Female",
          status: "joogo",
          joined: "2023-10-05",
          age: 26,
        },
        {
          fullName: "Nasteexo Mahad",
          image: require("../assets/female 6.avif"),
          gender: "Female",
          status: "maqan",
          joined: "2022-05-11",
          age: 31,
        },
        {
          fullName: "Rahma Abdi",
          image: require("../assets/female 7.avif"),
          gender: "Female",
          status: "joogo",
          joined: "2024-02-20",
          age: 27,
        },
        {
          fullName: "Fartun Nur",
          image: require("../assets/female 8.avif"),
          gender: "Female",
          status: "joogo",
          joined: "2021-07-08",
          age: 32,
        },
        {
          fullName: "Muna Farah",
          image: require("../assets/female 9.avif"),
          gender: "Female",
          status: "maqan",
          joined: "2023-11-29",
          age: 24,
        },
        {
          fullName: "Hani Shire",
          image: require("../assets/female 10.avif"),
          gender: "Female",
          status: "joogo",
          joined: "2024-09-10",
          age: 26,
        },

        // 🔹 MALE MEMBERS (16)
        {
          fullName: "Abdullahi Yusuf",
          image: require("../assets/male 1.webp"),
          gender: "Male",
          status: "maqan",
          joined: "2022-11-15",
          age: 34,
        },
        {
          fullName: "Farxaan Ahmed",
          image: require("../assets/male 2.webp"),
          gender: "Male",
          status: "joogo",
          joined: "2025-01-22",
          age: 29,
        },
        {
          fullName: "Jama Ali",
          image: require("../assets/male 3.webp"),
          gender: "Male",
          status: "maqan",
          joined: "2024-04-14",
          age: 33,
        },
        {
          fullName: "Ismail Hassan",
          image: require("../assets/male 4#.webp"),
          gender: "Male",
          status: "joogo",
          joined: "2023-09-01",
          age: 31,
        },
        {
          fullName: "Khadar Mohamed",
          image: require("../assets/male 5.avif"),
          gender: "Male",
          status: "joogo",
          joined: "2022-02-18",
          age: 27,
        },
        {
          fullName: "Yahye Warsame",
          image: require("../assets/male 6.avif"),
          gender: "Male",
          status: "maqan",
          joined: "2024-12-25",
          age: 35,
        },
        {
          fullName: "Abshir Roble",
          image: require("../assets/male 7.avif"),
          gender: "Male",
          status: "joogo",
          joined: "2023-05-04",
          age: 28,
        },
        {
          fullName: "Said Ahmed",
          image: require("../assets/male 8.avif"),
          gender: "Male",
          status: "joogo",
          joined: "2021-10-12",
          age: 30,
        },
        {
          fullName: "Faysal Isse",
          image: require("../assets/male 9.avif"),
          gender: "Male",
          status: "maqan",
          joined: "2024-03-03",
          age: 32,
        },
        {
          fullName: "Khalif Mahamud",
          image: require("../assets/male 10.avif"),
          gender: "Male",
          status: "joogo",
          joined: "2023-07-19",
          age: 26,
        },
        {
          fullName: "Bashir Hassan",
          image: require("../assets/male 11.avif"),
          gender: "Male",
          status: "maqan",
          joined: "2024-01-30",
          age: 33,
        },
        {
          fullName: "Mustaf Omar",
          image: require("../assets/male 12.avif"),
          gender: "Male",
          status: "joogo",
          joined: "2025-05-09",
          age: 28,
        },
        {
          fullName: "Mohamed Noor",
          image: require("../assets/male 13.avif"),
          gender: "Male",
          status: "joogo",
          joined: "2022-06-22",
          age: 30,
        },
        {
          fullName: "Liban Sharif",
          image: require("../assets/male 14.avif"),
          gender: "Male",
          status: "maqan",
          joined: "2021-08-18",
          age: 29,
        },
        {
          fullName: "Ali Yasin",
          image: require("../assets/male 15.avif"),
          gender: "Male",
          status: "joogo",
          joined: "2023-04-01",
          age: 31,
        },
        {
          fullName: "Hamza Abukar",
          image: require("../assets/male 16.avif"),
          gender: "Male",
          status: "maqan",
          joined: "2025-08-01",
          age: 27,
        },
      ],
    };
  },

  watch: {
    searchText() {
      this.triggerLoading();
    },
    dateFilter() {
      this.triggerLoading();
    },
    displayLimit() {
      this.triggerLoading();
    },
  },

  methods: {
    triggerLoading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
  },

  computed: {
    filteredMembers() {
      const text = this.searchText.toLowerCase();
      const today = new Date().toISOString().split("T")[0];

      const filtered = this.teamMembers.filter((member) => {
        const matchSearch =
          member.fullName.toLowerCase().includes(text) ||
          member.gender.toLowerCase().includes(text) ||
          member.status.toLowerCase().includes(text) ||
          String(member.age).includes(text) ||
          member.joined.toLowerCase().includes(text);

        let matchDate = true;
        if (this.dateFilter === "past") {
          matchDate = member.joined < today;
        } else if (this.dateFilter === "today") {
          matchDate = member.joined === today;
        }

        return matchSearch && matchDate;
      });

      // Apply limit (10, 20, or all)
      if (this.displayLimit === "all") {
        return filtered;
      }
      return filtered.slice(0, this.displayLimit);
    },
  },
};
</script>
