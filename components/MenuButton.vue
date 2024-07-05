<template>
  <Icon class=navigation__menu name="material-symbols:menu" color="black" size="2rem" @click.stop="clickMenu" />
</template>

<script lang="ts" setup>
const emit = defineEmits(['click']);

function clickMenu() {
  // todo Open left menu
  emit('click');
}
</script>

<style lang="scss" scoped>
.navigation__menu {
  cursor: pointer;
}
</style>