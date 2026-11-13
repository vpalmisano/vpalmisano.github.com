<script setup lang="ts">
import { onMounted } from 'vue'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import { cookieConsentConfig } from './cookieconsent-config'

onMounted(async () => {
  const root = document.documentElement
  const syncDarkMode = () => {
    root.classList.toggle('cc--darkmode', root.classList.contains('dark'))
  }

  syncDarkMode()
  new MutationObserver(syncDarkMode).observe(root, {
    attributes: true,
    attributeFilter: ['class'],
  })

  const CookieConsent = await import('vanilla-cookieconsent')
  CookieConsent.run(cookieConsentConfig)
})
</script>

<template></template>
