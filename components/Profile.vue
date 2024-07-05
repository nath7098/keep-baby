<template>
  <div class="profile__menu" @click.prevent="clickProfile">
    <NuxtImg :src="profileSrc" :alt="altText" class="profile-img" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  src: {
    type: String,
  },
  alt: {
    type: String,
    default: 'User Profile'
  }
});

const profileSrc = ref(props.src || 'default-user-icon.png');
const altText = ref(props.alt);

function clickProfile() {
  // todo
}
</script>

<style lang="scss" scoped>
.profile__menu {
  cursor: pointer;

  width: 2.5rem;
  height: 2.5rem;
  // border: 1px solid black;
  border-radius: 50%;
  overflow: hidden;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  background-color: #f0f0f0;
}

.profile-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
</style>