# Swiss Jekyll Theme v2.0

[![Gem Version](https://badge.fury.io/rb/jekyll-swiss.svg)](https://badge.fury.io/rb/jekyll-swiss)

[![Check Links](https://github.com/jaumebarber/jaumebarber.github.io/actions/workflows/link-checker.yml/badge.svg)](https://github.com/jaumebarber/jaumebarber.github.io/actions/workflows/link-checker.yml)

Swiss is a bold Jekyll theme inspired by Swiss design and the works of Massimo Vignelli. This theme lends itself well to sites heavy on written content.

### Features:
* Mobile-first design ensures this theme performs fastest on mobile while scaling elegantly to desktop-size screens.
* Designed for blogs and sites heavy on written content, with bold typography styles, homepage summaries, and previous/next snippets.
* Supports a wide range of HTML elements and markdown.
* Flexible styles that can be reused for customization without adding additional CSS.
* Dynamically generated navigation links. See docs for adding pages with specific post category for-loops.

## Installation

Add this line to your Jekyll site:

```yaml
remote_theme: jaumebarber/swiss
```

And then execute:

    $ bundle install

## Usage

This theme comes in eight different color variations, divided in dark and light themes. You can only choose whether to use a dark or a light theme by clicking the theme toggle icon. The eight different color variations will appear randomly.


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/jaumebarber/swiss. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, and `_sass` tracked with Git will be released.

## Lighthouse PageSpeed Insights
### Desktop
[![Lighthouse Desktop](lighthouse_results/desktop/pagespeed.svg)](lighthouse_results/desktop/pagespeed.svg)

[Desktop report](https://htmlpreview.github.io/?https://raw.githubusercontent.com/jaumebarber/jaumebarber.github.io/refs/heads/master/lighthouse_results/desktop/jaumebarber_com.html)

### Mobile
[![Lighthouse Mobile](lighthouse_results/mobile/pagespeed.svg)](lighthouse_results/mobile/pagespeed.svg)

[Mobile report](https://htmlpreview.github.io/?https://raw.githubusercontent.com/jaumebarber/jaumebarber.github.io/refs/heads/master/lighthouse_results/desktop/jaumebarber_com.html)

## License

The theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
