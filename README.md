# Times

**Times** is a newspaper style hugo theme. It is clean, responsive and support multilangual.

![alt]([/imgaes/screenshot.png](https://github.com/yushinliou/hugo-theme-times/blob/main/imgaes/image-responsive.png))

> Check this [post](https://focusidler.com/en/posts/hugo/) if you don't know what is hugo and why you should use it for your site.

## 🌐 Demo

- Live Site: [https://focusidler.com](https://focusidler.com)
- Responsive Preview: [https://ui.dev/amiresponsive?url=https://focusidler.com](https://ui.dev/amiresponsive?url=https://focusidler.com)

## 📦 Installation

1. Add the theme to your Hugo site:

   ```bash
   git submodule add https://github.com/yushinliou/hugo-theme-times themes/times
   ```

2. Set the theme in your `hugo.toml`:

```toml
theme = "times"
```

3. Run your site:

```bash
hugo server
```


## ✨ Features

- 🎨 Light/Dark Mode with Tailwind's theming
- 🌍 Multilingual support
- 🧩 Built-in categories, tags, year archives pages
- 🧠 Reading time estimation
- 📚 Table of contents (TOC) in posts
- 🖼️ Featured images in summaries (optional, but recommended for better visuals)
- 🧵 DaisyUI & Tailwind Typography plugin ready (update to Tailwind v4)
- 🧾 RSS enabled
- 💡 Code syntax highlighting with Dracula theme

## ⚙️ Configuration Example

Check `example.hugo.toml`

```toml
baseURL = "https://yourdomain.com"
defaultContentLanguage = "en"
title = "Your Site Title"
theme = "times"

[taxonomies]
  category = "categories"
  tag = "tags"
  year = "year"

[languages.en]
  languageName = 'English'
  contentDir = "content/en"

[params]
  description = "Be a focused idler"
  author = "Your Name"
  mainSections = ["posts"]
  featuredPosts = 3
  motto = "Don't be busy, be focused"
  email = "your@email.com"
  lightTheme = "wireframe"
  darkTheme = "black"
  showTableOfContents = true
  showSummaryCoverInPost = true
  showPrevNextPost = true
  headerTitle = "YOUR SITE TITLE" # this will show in header
  headerAvatar = "avatar/avatar-512x512.png" # the profile image show in header, should place in /static
```

---

## 🖼️ Images

### Cover

Each post can optionally include a cover image for summary display.  
To add a cover, use the `cover` param in your front matter:

```toml
cover = "images/your-cover.jpg"
```

Covers are optional, but adding them will make your homepage looks great!

### Avatar

It is recommended to use a 512X512 png image. Be careful if your avatar has a transparent background, it may blend in with the background in dark mode.

## 🔖 Favicon Setup

To ensure your favicon displays correctly across all browsers and devices, you might use a favicon generator like [https://favicon.io](https://favicon.io).

1. Generate `.ico`, `.png`, `.svg`, and Apple Touch icons.
2. Place them in your `static/favicon` folder.
3. Add the following to your `hugo.toml`:

```toml
[params.favicon]
  png = "favicon/favicon-96x96.png"
  svg = "favicon/favicon.svg"
  ico = "favicon/favicon.ico"
  apple = "favicon/apple-touch-icon.png"
  manifest = "favicon/site.webmanifest"
```

## 🗂 Content Organization

Multilingual content should be organized like this:

```sh
content/
├── en
│   ├── about
│   │   ├── _index.md
│   │   └── me.md
│   └── posts
│       ├── _index.md
│       ├── post-1.md
│       └── post-2.md
├── fr
│   ├── about
│   │   ├── _index.md
│   │   └── me.md
│   └── posts
│       ├── _index.md
│       ├── post-1.md
│       └── post-2.md
└── zh
    ├── about
    │   ├── _index.md
    │   └── me.md
    └── posts
        ├── _index.md
        ├── post-1.md
        └── post-2.md
```

`_index.md` is important for hugo to correctly recongnize the structures of `content` folder.
A sample `_index.md`:

```md
---
title: "Home page"
---
```

Check [Hogo doc](https://gohugo.io/content-management/organization/) for more detail.

Taxonomies such as `categories`, `tags`, and `year` will be generated automatically.

## 🛠 (Optional) Customize & Build CSS

If you want to customize the CSS style of this theme, you will need [Tailwind CSS and it's plugins](https://tailwindcss.com).
It is a CSS framework than enable you to fastly build up design directly in html markup. You may check [this tutorial](https://focusidler.com/en/posts/250407-front-css/) for what is it, why I am using it and how to use it.

### install

First of all, make sure you install node.js in your computer

```sh
npm -v # check if you have npm
```

> Install [node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if needed.

Install daisyui and plugin

```bash
npm install -D daisyui
npm install -D @tailwindcss/typography
npm install -D @tailwindcss
npm install -D @tailwindcss/line-clamp
npx @tailwindcss/cli -i ./themes/times/src/input.css -o ./themes/times/assets/css/output.css # Using Tailwind CSS CLI tool to recompile css file
```

### Custumize theme colors

To customize light/dark themes colors, edit in `hugo.toml`:

```toml
[params]
lightTheme = "wireframe"
darkTheme = "black"
```

Available themes: [https://daisyui.com/themes/](https://daisyui.com/themes/)

Afterward, recompile output.csss

```bash
npx @tailwindcss/cli -i ./themes/times/src/input.css -o ./themes/times/assets/css/output.css # Using Tailwind CSS CLI tool to recompile css file
```

### Custumize font

The header's font is `Playfair Display`, while title of my post use `Noto Serif TC`(traditional Chinese font) and `Merriweather`(english font). If you want to add font for your language, one approach is to search on [google font](https://fonts.google.com/?query=roma), find the font you want and adding it to `tailwind.config.js`.

```js
extend: {
  fontFamily:{
    sans: ['Inter', 'sans-serif'], // font I use for body
    merriweather: ['"Merriweather"', 'Noto Serif TC', 'serif'], // font I use for title in post
    playfair: ['"Playfair Display"', 'serif'], // font I use for header
  }
}
```

For example, if your header is write in French and you hope to use `Luxurious Roman`.

```js
extend: {
  fontFamily:{
    sans: ['Inter', 'sans-serif'], // font I use for body
    merriweather: ['"Merriweather"', 'Noto Serif TC', 'serif'], // font I use for title in post
    playfair: ["Luxurious Roman", '"Playfair Display"', 'serif'], // font I use for header
  }
}
```

Add those line in `/layouts/partials/head.html` to import font.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Luxurious+Roman&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap" rel="stylesheet">
```

If you want to use `Luxurious Roman` in `<h1>` text. You could add it in fontFamily:

```js
extend: {
  fontFamily:{
    luxurious: ["Luxurious Roman", 'serif'],
  }
}
```

Afterward, edit `intput.css`

```css
h1 {
    @apply font-luxurious;
}
```

Remember to recompile your css file after those change

```sh
npx @tailwindcss/cli -i ./themes/times/src/input.css -o ./themes/times/assets/css/output.css
```

## 📁 Folder Structure

```sh
themes/times/
├── layouts/
├── assets/
├── static/
├── src/
│   └── input.css        # Tailwind input
├── exampleSite/
├── README.md
```

## 📜 License

Content licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
