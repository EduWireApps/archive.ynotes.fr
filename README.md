# ynotes-website

## Build setup

Win + R : `%SystemRoot%\system32\drivers\etc\hosts`

Ajouter une ligne
```
127.0.0.1 support.localhost
```

```bash
$ yarn # install dependencies
$ yarn dev # serve with hot reload at localhost:3000

$ yarn generate # generate static project
$ yarn start # launch server
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Project stucture

### `/assets`

Files built by Webpack, not accessible with `/assets/myfile`.

Example

```html
<img src="~/assets/images/phoneScreen.png" />
```

won't be accessible at `https://ynotes.fr/assets/images/phoneScreen.png`.

Check out https://nuxtjs.org/docs/2.x/directory-structure/assets#webpack-assets.

#### `/assets/content`

Contains all the displayed texts on the website, you don't have to browse any other files except for the Q&A, located in `/content/faq.md`. See [section](#content)

### `/components`

Contains all the components used in the site.

### `/content`

`faq.md` contains all the Q&A questions and answers available at `https://ynotes.fr/faq`.

### `/layouts`

Contains the layout applied to every page. Header and Footer are referenced here.

### `/pages`

All the pages of the website, check out https://nuxtjs.org/docs/2.x/get-started/routing.

### `/plugins`

Contains all plugins, referenced in `/nuxt.config.js`.

### `/static`

Contains all static files such as `favicon.ico`, accessible from `https://ynotes.fr/favicon.ico`.

Legal files are stored here.

## Deployment WIP

https://nuxtjs.org/faq/vercel-deployment
