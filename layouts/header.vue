<template>
  <header class="baby__header" @click="$emit('click:outsidemenu')">
    <menu-button @click="$emit('click:menu')" />
    <div class="baby__title">Keep <span class="baby__title--name">{{ title }}</span></div>
    <profile />
  </header>

  <body class="main__container" @click="$emit('click:outsidemenu')">
    <slot />
  </body>
</template>
<script setup lang="ts">
const props = defineProps({ title: { type: String, default: 'Baby' } });
const emit = defineEmits(['click:menu', 'click:outsidemenu']);
</script>
<style lang="scss" scoped>
.baby__header {
  background-color: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 2rem;

  padding: .5rem 1.25rem;
}



.baby__title {
  font-size: 1.75rem;

  &--name {
    color: $primary;
  }
}

.main__container {
  background-color: red;
  margin: 0 !important;
  max-height: calc(100vh - 2rem);
  min-height: calc(100vh - 2rem);
}
</style>