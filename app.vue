<template>
  <NuxtRouteAnnouncer />
  <!-- <NuxtWelcome /> -->
  <NuxtLayout name="header" @click:menu="sideBarOpen = true" @click:outsidemenu="sideBarOpen = false">
    <NuxtPage />
  </NuxtLayout>
  <side-bar :isOpen="sideBarOpen" @close="sideBarOpen = false" />
</template>

<script setup lang="ts">

const sideBarOpen = ref(false);

definePageMeta({
  layout: 'header'
});
</script>
