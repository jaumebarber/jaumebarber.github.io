---
layout: category-post
title: Helvetic Docs
date: 2024-07-20
lang: en
categories: [docs]
slug: helvetic-docs
redirect_from:
  - helvetic-documents
  - helvetic-documentos
  - helvetic-documenti
---

Helvetic Resume is a bold Jekyll theme inspired by Swiss design and the works of Massimo Vignelli. This theme lends itself well to sites heavy on written content.

### Features:
* Mobile-first design ensures this theme performs fastest on mobile while scaling elegantly to desktop-size screens.
* Designed for blogs and sites heavy on written content, with bold typography styles, homepage summaries, and previous/next snippets.
* Multi-language support, comes preset in 4 languages.
* Supports a wide range of HTML elements and markdown.
* Flexible styles that can be reused for customization without adding additional CSS.
* Dynamically generated navigation links. See docs for adding pages with specific post category for-loops.

## Installation

### Using Devcontainers (recommended)
There are only three basic requirements to use this theme right away:
- Docker
- VS Code
- Devcontainers extension

If you have these three things, this project is like a yoghourt, just open the lid and it's ready to eat ;).

If you open the project and it doesn't ask you to open it in a container, look for the blue button in the lower left edge of the screen and select `Reopen folder in container`. 

If you ever need to rebuild your container from scratch, just select `Rebuild container without cache` from Ctrl + Shift + P menu.


### Installing dependencies
Assuming you've got Ruby and Bundler installed: 
```bash
cd src
bundle install
````
Let the process finish and then run:
```bash
bundle exec jekyll serve
```

### Using your own Dockerfile
You can dockerise the app yourself by creating your own Dockerfile and or adapt and use the one in `.devcontainer` folder, then run it with your own `compose.yaml` or however you like best. 

We've not provided any of them to avoid repetition and because this is an opinionated repo, but it should be very easy to make and it's your best option if you are not using VS Code.

## Multi-language setup

Helvetic Resume comes preconfigured with `jekyll-polyglot` and `jekyll-redirect-from` plugins that render its multi-language capabilities. 

To demonstrate them, this theme comes preset in four languages: English, Catalan, Spanish and Italian, but you can add or remove as many as you wish from `_config.yml` file.

You'll find the translations currently in use in `_data` folder. Lastly, we're using plugin `jekyll-date-localization` to localise dates. The plugin already has some languages, but if your language is not there, you can always add it to the `_locales` folder, the same way we've done with Catalan.

## Modes and colors

This theme has been designed with the utmost desire of being faithful to it's original counterpart, albeit upgraded to modern standards not only in terms of dependencies but also tastes. 
That's why we've put an amazing animation button to toggle between Dark and Light modes (thank you [web.dev](https://web.dev/patterns/theming/theme-switch?hl=es-419) for it!). 

Each time you press it, you'll not only be toggling from light to dark or vice versa, but also randomly changing between most of broccolini's designs for the Swiss theme. We've only discarded gray for a fresh alternative (we didn't like it ;P) and severely tweaked blue. The rest is kept as is, only adapting to the light/dark schemes. 

|                                                                                                                                          |                                                                                                                                          |
|:-----------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| `theme_color: black`                                                                                                                     | `theme_color: red`                                                                                                                       |
| <img width="330" alt="black" src="{{ site.base_url }}/assets/images/theme_black.png">  | <img width="330" alt="red" src="{{ site.base_url }}/assets/images/theme_red.png">    |
| `theme_color: mint`                                                                                                                     | `theme_color: white`                                                                                                                      |
| <img width="330" alt="mint" src="{{ site.base_url }}/assets/images/theme_mint.png">  | <img width="330" alt="white" src="{{ site.base_url }}/assets/images/theme_white.png">   |
| `theme_color: blue`                                                                                                                      | `theme_color: magenta`                                                                                                                      |
| <img width="330" alt="blue" src="{{ site.base_url }}/assets/images/theme_blue.png">   | <img width="330" alt="magenta" src="{{ site.base_url }}/assets/images/theme_magenta.png">   |
| `theme_color: orange`                                                                                                                    | `theme_color: yellow`                                                                                                                    |
| <img width="330" alt="orange" src="{{ site.base_url }}/assets/images/theme_orange.png"> | <img width="330" alt="yellow" src="{{ site.base_url }}/assets/images/theme_yellow.png"> |


## Development

Your theme is setup just like a normal Jekyll site! To test your theme, just open it in a devcontainer or run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `src`, tracked with Git will be released.

## Contributing

Bug reports and pull requests are welcome on GitHub at [https://github.com/hipervincle/helvetic-resume](https://github.com/hipervincle/helvetic-resume). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.
## License

The theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
