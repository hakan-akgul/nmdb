<template>
  <div class="absolute flex flex-wrap items-center justify-center w-auto h-auto">
    <div v-for="cast in credits.cast" :key="cast.id">
      <movies-actorcard
        :name="cast.name"
        :image="cast.profile_path"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    credits: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>

</style>
