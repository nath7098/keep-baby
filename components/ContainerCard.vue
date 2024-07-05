<template>
  <div class="container__card">
    <slot>
      <Icon name="material-symbols-light:person" size="5rem" />
    </slot>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  width: { type: String, default: '15rem' },
  height: { type: String, default: '15rem' },
  background: { type: String, default: 'inherit' }
});

</script>

<style lang="scss" scoped>
.container__card {
  background-color: v-bind(background);

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: v-bind(width);
  height: v-bind(height);

  border-radius: .5rem;
  border: 2px solid black;
}
</style>