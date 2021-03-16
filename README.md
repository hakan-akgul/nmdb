# NMDb (Nuxt Movie Db)

## !!! comment these lines in "nuxt.config.js" for SSR in local
### these configs added for NETLIFY SSG
* target
* ssr
* generate
---
## Build Setup

```bash
# 1. install dependencies
$ yarn install

# 2. build for production and launch server
$ yarn build
$ yarn start

```
---
## Briefing
```
Added comments to functions (and some maybe confusing parts) for detailing.
Here is the basic folder structure and explanation of NMDb:

nmdb
├─ assets
│  └─ css
│     ├─ fonts.css
│     └─ tailwind.css
├─ components
│  ├─ moviecard.vue     -> movie brief cards in homescreen
│  ├─ movies
│  │  ├─ actorcard.vue  -> actor images and names in movie detail page
│  │  ├─ cast.vue       -> actors tab in movie detail page
│  │  ├─ info.vue       -> details tab in movie detail page
│  │  └─ review.vue     -> details tab in movie detail page
│  └─ navbar.vue
├─ config
│  └─ tailwind          -> tailwindcss extra configs moved to here for readable tailwind.config.js
│     ├─ spacing.js
│     └─ width.js
├─ layouts
│  └─ default.vue
├─ pages
│  ├─ index.vue         -> homescreen
│  └─ movies
│     └─ _id.vue        -> movie details page
├─ plugins
│  └─ icons.js          -> vue eva icons for some styling. (tree shaked)
└─ store
   └─ index.js          -> vuex "state" for store data. "mutations" for save data to states.
```
