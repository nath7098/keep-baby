<template>
  <div :class="['sidebar', { 'sidebar--open': isOpen }]">
    <button @click="closeSidebar" class="close-btn">✖</button>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <!-- Add more links as needed -->
    </nav>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  isOpen: { type: Boolean, default: false }
});

const emit = defineEmits(['close']);

const closeSidebar = () => {
  emit('close');
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: -400px;
  /* Adjust width as needed */
  width: 300px;
  /* Adjust width as needed */
  height: 100%;
  background-color: #333;
  color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  transition: left 0.3s ease;

  &--open {
    left: 0;
  }
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

nav {
  display: flex;
  flex-direction: column;

  & a {
    color: white;
    text-decoration: none;
    margin-bottom: 15px;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>