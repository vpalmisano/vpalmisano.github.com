<script setup lang="ts">
import { Content } from 'vitepress'
import { mdiGithub, mdiLinkedin, mdiButterfly } from '@mdi/js'

const mdiMedium =
  'M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/vpalmisano',
    icon: mdiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vpalmisano/',
    icon: mdiLinkedin,
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@vpalmisano',
    icon: mdiMedium,
  },
  {
    label: 'Bluesky',
    href: 'https://bsky.app/profile/vpalmisano.bsky.social',
    icon: mdiButterfly,
  },
]
</script>

<template>
  <div class="author-home">
    <aside class="author-sidebar">
      <img
        class="author-sidebar__avatar"
        src="/images/photo.jpg"
        alt="Vittorio Palmisano"
        width="180"
        height="180"
      />
      <h2 class="author-sidebar__name">Vittorio Palmisano</h2>
      <p class="author-sidebar__bio">PhD, Software Engineer</p>
      <div class="author-sidebar__follow">
        <ul class="author-sidebar__links">
          <li v-for="link in socialLinks" :key="link.href">
            <a
              class="author-sidebar__link"
              :href="link.href"
              :aria-label="link.label"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon
                class="author-sidebar__icon"
                :icon="link.icon"
                size="18"
                aria-hidden="true"
              />
              <span>{{ link.label }}</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <div class="author-home__content vp-doc">
      <Content />
    </div>
  </div>
</template>

<style scoped>
.author-home {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 2.5rem;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem 3rem;
}

.author-sidebar {
  text-align: center;
}

.author-sidebar__avatar {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  margin: 0 auto 1rem;
  border: 3px solid var(--vp-c-divider);
}

.author-sidebar__name {
  margin: 0 0 0.35rem;
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--vp-c-text-1);
}

.author-sidebar__bio {
  margin: 0 0 1.25rem;
  font-size: 0.9rem;
  line-height: 1.4;
  color: var(--vp-c-text-2);
}

.author-sidebar__follow-label {
  margin: 0 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}

.author-sidebar__links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  text-align: left;
}

.author-sidebar__link {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--vp-c-brand-1);
  font-size: 0.95rem;
  text-decoration: none;
}

.author-sidebar__link:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

.author-sidebar__icon {
  flex-shrink: 0;
  color: inherit;
}

.author-home__content {
  min-width: 0;
  padding: 0;
}

.author-home__content :deep(h1) {
  margin-top: 0;
}

@media (max-width: 768px) {
  .author-home {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-top: 1.25rem;
  }

  .author-sidebar__avatar {
    width: 140px;
    height: 140px;
  }

  .author-sidebar__links {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }
}
</style>
