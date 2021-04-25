<template>
  <div class="grid grid-cols-6 gap-4 mt-10">
    <select @change="onChange()" v-model="selected" class="col-span-4 md:col-span-5 border p-3 rounded">
      <option value="0">Global</option>
      <option v-for="country in countries" :value="country.ID">{{ country.Country }}</option>
    </select>
    <button :disabled="selected === 0" @click="resetSelected()"
            class="disabled:opacity-50 disabled:cursor-not-allowed bg-green-700 text-white rounded p-3 focus:outline-none active:bg-green-600 col-span-2 md:col-span-1">
      Clear
    </button>
  </div>
</template>

<script>
export default {
  name: "CountrySelect",
  props: ['countries'],
  data() {
    return {
      selected: 0
    }
  },
  methods: {
    onChange() {
      const country = this.countries.find(country => country.ID === this.selected)
      this.$emit('get-country', country)
    },
    resetSelected() {
      this.selected = 0
      this.$emit('get-country', undefined)
    }
  }
}
</script>