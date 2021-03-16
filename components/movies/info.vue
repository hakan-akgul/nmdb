<template>
  <div class="absolute h-auto">
    <table>
      <tbody>
        <tr>
          <td class="font-bold">
            Language:
          </td>
          <td class="uppercase">
            {{ details.original_language }}
          </td>
        </tr>
        <tr>
          <td class="font-bold">
            Status:
          </td>
          <td class="">
            {{ details.status }}
          </td>
        </tr>
        <tr>
          <td class="font-bold">
            Release Date:
          </td>
          <td class="">
            {{ details.release_date }}
          </td>
        </tr>
        <tr>
          <td class="font-bold">
            Runtime:
          </td>
          <td>{{ details.runtime }} min.</td>
        </tr>
        <tr v-if="details.budget">
          <td class="font-bold">
            Budget:
          </td>
          <td>${{ details.budget }}</td>
        </tr>
        <tr>
          <td class="font-bold">
            Rating:
          </td>
          <td>{{ details.vote_average }} ({{ details.vote_count }} vote)</td>
        </tr>
        <tr>
          <td class="font-bold">
            Countries:
          </td>
          <td class="flex">
            <p v-for="country in details.production_countries" :key="country.iso_3166_1">
              {{ country.name }},
            </p>
          </td>
        </tr>
        <tr>
          <td class="font-bold">
            Companies:
          </td>
          <td class="flex flex-wrap">
            <div v-for="company in details.production_companies" :key="company.id" class="flex items-center m-1">
              <div class="w-12 h-12 m-1 bg-gray-100 bg-center bg-no-repeat bg-contain border border-pink-600 rounded-full" :style="{ backgroundImage: 'url( https://image.tmdb.org/t/p/w92' + company.logo_path + ')', }" />
              <p>
                {{ company.name }}
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>

</style>
