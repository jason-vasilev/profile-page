<script setup lang="ts">
import { computed } from 'vue'
import { ButtonVariant } from '~/components/button-basic/button-basic-enum'

const props = defineProps<{
  profileImage?: string
}>()

const computedProfileImage = computed(() => {
  return props.profileImage
    ? props.profileImage
    : 'images/user-default-avatar.svg'
})

const computedClasses = computed(() => {
  return props.profileImage ? '' : 'profile-avatar__img--default'
})
</script>

<template>
  <section class="profile-avatar">
    <figure class="profile-avatar__figure">
      <img
        class="profile-avatar__img"
        :class="computedClasses"
        :src="computedProfileImage"
        alt="Profile of <First Name, Last Name>"
      />
    </figure>

    <div class="profile-avatar__text">
      <h1 class="h2 profile-avatar__headline">Profile</h1>
      <p class="profile-avatar__description">
        Update your photo and personal information.
      </p>
    </div>

    <div class="profile-avatar__controls">
      <Button-basic text="Upload new picture" class="profile-avatar__button" />
      <Button-basic
        text="Delete picture"
        class="profile-avatar__button"
        :variant="ButtonVariant.PLANE"
      />
    </div>
  </section>
</template>

<style scoped src="./Profile-avatar.scss" />
