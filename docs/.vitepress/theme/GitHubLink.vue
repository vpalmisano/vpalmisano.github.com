<script setup lang="ts">
import { mdiGithub } from '@mdi/js'

defineProps<{
  href: string
}>()
</script>

<template>
  <a
    class="project-github"
    :href="href"
    aria-label="GitHub"
    target="_blank"
    rel="noopener noreferrer"
  >
    <v-icon :icon="mdiGithub" size="20" aria-hidden="true" />
    <span class="github-link-text">Link</span>
  </a>
</template>

<style scoped>
.github-link-text {
  margin-left: 4px;
}
</style>