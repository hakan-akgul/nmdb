<template>
  <div class="absolute h-auto">
    <div v-for="review in reviews.results" :key="review.id">
      <div class="my-8">
        <div class="flex items-start">
          <p class="mb-1 font-bold text-pink-600">
            Author: {{ review.author }}
          </p>
          <div v-if="review.author_details.rating" class="flex items-center justify-center w-6 h-6 ml-2 bg-gray-900 border-2 border-pink-600 rounded-lg top-10 left-10 bottom-20">
            <p class="text-xs text-white" v-text="review.author_details.rating" />
          </div>
        </div>

        <p class="border-b">
          {{ review.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reviews: {
      type: Object,
      default: null
    }

  }
}
</script>
