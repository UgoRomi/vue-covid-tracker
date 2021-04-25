<template>
  <main v-if="!loading">
    <DataTitle :text="title" :data-date="dataDate"/>
    <DataBoxes :stats="stats"/>
    <CountrySelect @get-country="getCountryData" :countries="countries"/>
  </main>

  <main class="flex flex-col align-middle justify-center text-center" v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6">Fetching data</div>
    <img :src="loadingImage" class="w-24 m-auto" alt="Loading image">
  </main>
</template>

<script>
import DataTitle from "@/components/DataTitle";
import DataBoxes from "@/components/DataBoxes";
import CountrySelect from "@/components/CountrySelect";

export default {
  name: 'Home',
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect
  },
  data() {
    return {
      loading: true,
      title: 'Global',
      dataDate: '',
      stats: {},
      globalStats: {},
      countries: [],
      loadingImage: require('../assets/hourglass.gif')
    }
  },
  methods: {
    async fetchCovidData() {
      const res = await fetch('https://api.covid19api.com/summary')
      return await res.json()
    },
    getCountryData(country) {
      if (!country) {
        this.stats = this.globalStats
        this.title = 'Global'
        return
      }
      this.stats = country
      this.title = country.Country
    },
  },
  async created() {
    const data = await this.fetchCovidData()
    this.dataDate = data.Date
    this.stats = data.Global
    this.globalStats = data.Global
    this.countries = data.Countries
    setTimeout(() => this.loading = false, 1000)
  }
};
</script>
