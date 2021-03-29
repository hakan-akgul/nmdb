<template>
  <div class="flex items-center w-screen h-10 px-4 pt-2 bg-gray-800">
    <transition name="fade">
      <button
        v-if="$route.name=='index'"
        v-click-outside
        class="absolute text-white sm:hidden"
        @click="$store.commit('TOGGLE_SIDEBAR')"
      >
        <ClientOnly>
          <eva-icon name="menu" width="24px" height="24px" fill="#DB2777" />
        </ClientOnly>
      </button>
    </transition>
    <transition name="fade">
      <nuxt-link
        v-if="$route.name=='movies-id'"
        to="/"
        class="absolute text-white"
        @click="$store.commit('CLOSE_SIDEBAR')"
      >
        <ClientOnly>
          <eva-icon name="arrow-back" width="24px" height="24px" fill="#DB2777" />
        </ClientOnly>
      </nuxt-link>
    </transition>
    <nuxt-link to="/" class="px-2 py-1 ml-auto font-bold text-pink-600 align-top">
      NMDb
    </nuxt-link>
  </div>
</template>
