<template>
  <div
    class="flex flex-col justify-between lg:flex-row md:flex-row absolute lg:top-[150px] md:top-[150px] top-[110px] left-0 right-0 lg:ml-[125px] md:ml-[125px] ml-4 mr-[20px]"
  >
    <BaseCard>
      <div class="flex flex-col w-full">
        <div class="flex justify-between items-center">
          <input
            class="w-full md:w-[400px] px-4 py-2 border border-gray-300 bg-gray-600 text-white placeholder:text-white rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            type="text"
            placeholder="search by name, gender, location , status "
            v-model="searching"
          />

          <div
            class="flex justfify-center items-center gap-4 text-[16px] font-[500]"
          >
            <label class="flex mr-2 items-center">
              <input
                type="radio"
                name="show"
                checked
                v-model="radioFilter"
                value="all"
              />
              <span>show All</span>
            </label>

            <label class="flex ml-2 items-center">
              <input
                type="radio"
                name="show"
                value="today"
                v-model="radioFilter"
              />
              <span>Today</span>
            </label>

            <label class="flex ml-2 items-center">
              <input
                type="radio"
                name="show"
                value="past"
                v-model="radioFilter"
              />
              <span>Past</span>
            </label>
          </div>
        </div>

        <table
          class="table-auto w-full border border-gray-300 rounded-lg shadow-md"
        >
          <thead class="bg-gray-500 text-white">
            <tr class="text-gray-700">
              <th class="py-3 text-left">Name</th>

              <th class="py-2 text-left">Images</th>
              <th class="py-2 text-left">Gender</th>
              <th class="py-2 text-left">Status</th>
              <th class="py-2 text-left">Location</th>
              <th class="py-2 text-left">Joined the Team</th>
              <th class="py-2 text-left">Age</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr
              class="text-center hover:bg-gray-100 transition duration-200"
              v-for="detail in filteredDetails"
              :key="detail"
            >
              <td class="px-4 py-2 text-left">
                {{ detail.name }}
              </td>

              <td
                class="bg-white flex flex-col itms-center justify-center text-black font-[500] px-4 py-2 text-left"
              >
                <img
                  class="w-20 bg-slate-400 rounded-full"
                  :src="detail.picture"
                  alt=""
                />
              </td>

              <td class="px-4 py-2 text-left">
                {{ detail.gender }}
              </td>
              <td
                :class="
                  detail.status === 'Joogo' ? 'text-green-500' : 'text-red-500'
                "
                class="bg-white text-bllack font-[500] px-4 py-2 text-left"
              >
                {{ detail.status }}
              </td>
              <td class="text-black font-[500] px-4 py-2 text-left">
                {{ detail.location }}
              </td>

              <td class="bg-white text-black font-[500] px-4 py-2 text-left">
                {{ detail.joined }}
              </td>
              <td class="px-4 py-2 text-left">
                {{ detail.age }}
              </td>
            </tr>

            <tr v-if="filteredDetails.length === 0">
              <td colspan="7" class="text-center text-red-500 py-4">
                No matching results found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
export default {
  components: { BaseCard },
  data() {
    return {
      searching: "",
      radioFilter: "all",
      details: [
        {
          name: "maxamad",
          picture: require("../assets/manUser.png"),

          location: "mogadisho",
          age: 21,
          gender: "Rag",
          status: "Joogo",
          joined: "5-12-2025",
        },
        {
          name: "cali",
          picture: require("../assets/studentUser.png"),

          location: "afgooye",
          age: 31,
          gender: "Rag",
          status: "Joogo",
          joined: "2025-07-28",
        },
        {
          name: "caasho",
          picture: require("../assets/profile-icon.png"),

          location: "afgooye",
          age: 21,
          gender: "dumar",
          status: "Maqan",
          joined: "2025-07-28",
        },
        {
          name: "cayni",
          picture: require("../assets/avaterUser.png"),

          location: "mogadisho",
          age: 19,
          gender: "dumar  ",
          status: "Maqan",
          joined: "2025-07-28",
        },
        {
          name: "Warsame",
          picture: require("../assets/bussinesMan.png"),

          location: "mogadisho",
          age: 25,
          gender: "Rag",
          status: "Joogo",
          joined: "2025-08-04",
        },
        {
          name: "hidaayo",
          picture: require("../assets/femaleUser.png"),

          location: "howlWadaag",
          age: 18,
          gender: "dumar",
          status: "Maqan",
          joined: "2025-08-04",
        },
      ],
    };
  },

  computed: {
    filteredDetails() {
      const today = new Date();
      const searchLower = this.searching.trim().toLowerCase();

      // Start with date filtering
      let filteredByDate;

      switch (this.radioFilter) {
        case "today":
          filteredByDate = this.details.filter((detail) => {
            const joinedDate = new Date(detail.joined);
            return joinedDate.toDateString() === today.toDateString();
          });
          break;

        case "past":
          filteredByDate = this.details.filter((detail) => {
            const joinedDate = new Date(detail.joined);
            return joinedDate < today;
          });
          break;

        case "all":
        default:
          filteredByDate = this.details;
          break;
      }

      // Then filter by search text if any
      if (searchLower === "") {
        return filteredByDate; // no search, return only date-filtered
      }
      return filteredByDate.filter((detail) => {
        return (
          detail.name.toLowerCase().includes(searchLower) ||
          detail.location.toLowerCase().includes(searchLower) ||
          detail.gender.toLowerCase().includes(searchLower) ||
          detail.status.toLowerCase().includes(searchLower)
        );
      });
    },
  },
};
</script>
