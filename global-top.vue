<!-- global-top.vue -->

<template>
  <footer v-if="Object.entries($slidev.themeConfigs) !== 0"
    class="absolute bottom-0 p-4 mt-auto flex items-center w-full text-primary z-10 h-16">
    <div v-if="$slidev.nav.currentPage!==1" class="mb-0 flex items-center">
      <a v-if="$slidev.themeConfigs.leftLogo" :href="$slidev.themeConfigs.leftLogoUrl" target="_blank"><img
          :src="$slidev.themeConfigs.leftLogo" class="h-8 mr-4" alt="Event image" /></a>
    </div>
    <a v-if="$slidev.themeConfigs.github" :href="$slidev.themeConfigs.githubUrl" target="_blank" ml-auto><mdi-github />{{
      $slidev.themeConfigs.github }}</a>
  </footer>
</template>
