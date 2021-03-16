<template>
  <div class="flex items-center w-screen h-10 px-4 pt-2 bg-gray-800">
    <button
      class="text-white sm:hidden "
      @click="$store.commit('TOGGLE_SIDEBAR')"
    >
      <ClientOnly>
        <eva-icon name="menu" width="24px" height="24px" fill="#DB2777" />
      </ClientOnly>
    </button>

    <nuxt-link to="/" class="px-2 py-1 ml-auto font-bold text-pink-600 align-top">
      NMDb
    </nuxt-link>
  </div>
</template>
