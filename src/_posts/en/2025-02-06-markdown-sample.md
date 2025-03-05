---
layout: post
title: Markdown sample
date: 2025-02-06
lang: en
categories: [jekyll]
slug: markdown
redirect_from:
  - exemple-markdown
  - ejemplo-markdown
  - esempio-markdown
---

Text can be **bold**, _italic_, or ~~strikethrough~~. [Links](https://github.com) should be underlined and display a growing accent-coloured underline on hover.

There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs.

There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs.

> There should be no margin above this first sentence.
>
> Blockquotes should be a italicized with a gray border along the left side.
>
> There should be no margin below this final sentence.

# Heading 1

This is a normal paragraph following a Heading. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

## Heading 2

This is a normal paragraph following a Heading. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.


> This is a blockquote following a Heading. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

This is a normal paragraph following a Heading. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.


### Heading 3


#### Heading 4

* This is an unordered list following a Heading.
* This is an unordered list following a Heading.
* This is an unordered list following a Heading.

##### Heading 5

1. This is an ordered list following a Heading.
2. This is an ordered list following a Heading.
3. This is an ordered list following a Heading.

###### Heading 6

| What      | Follows         |
|-----------|-----------------|
| A table   | A Heading        |
| A table   | A Heading        |
| A table   | A Heading        |

----------------

There's a horizontal rule above and below this.

----------------

Here is an unordered list:

* Salt-n-Pepa
* Bel Biv DeVoe
* Kid 'N Play

And an ordered list:

1. John Lennon
2. Paul McCartney
3. George Harrison


And a nested list:

* The Beatles
  * John Lennon
  * Paul McCartney
  * George Harrison
  * Ringo Starr
* TMNT
  * Leonardo
  * Michelangelo
  * Donatello
  * Raphael

Definition lists can be used with HTML syntax. Definition terms are bold and italic.

<dl>
    <dt>Name</dt>
    <dd>Godzilla</dd>
    <dt>Born</dt>
    <dd>1952</dd>
    <dt>Birthplace</dt>
    <dd>Japan</dd>
    <dt>Color</dt>
    <dd>Green</dd>
</dl>

----------------

Tables should have bold headings and alternating shaded rows.

| Artist            | Album           | Year |
|-------------------|-----------------|------|
| John Lennon       | Imagine         | 1971 |
| The Beatles       | Abbey Road      | 1969 |
| The Beatles       | Sgt. Pepper's Lonely Hearts Club Band  | 1967 |

If a table is too wide, it should condense down and/or scroll horizontally.

| Artist            | Album           | Year | Label       | Awards   | Songs     |
|-------------------|-----------------|------|-------------|----------|-----------|
| John Lennon       | Imagine         | 1971 | Apple Records | Numerous awards | Imagine, Jealous Guy, Oh My Love, How?, I Don't Want To Be a Soldier, Crippled Inside, Oh Yoko!,  |
| The Beatles       | Abbey Road      | 1969 | Apple Records | Numerous awards | Come Together, Something, Octopus's Garden, Here Comes the Sun, Because,  |
| The Beatles      | Sgt. Pepper's Lonely Hearts Club Band  | 1967 | Parlophone | Numerous awards | A Day in the Life, With a Little Help from My Friends, Lucy in the Sky with Diamonds, Strawberry Fields Forever, When I'm Sixty-Four |

----------------

Code snippets like `var foo = "bar";` can be shown inline.

Also, `this should vertically align` ~~`with this`~~ ~~and this~~.

Code can also be shown in a block element.
````
var foo = "bar";
````

Code can also use syntax highlighting.
````Javascript
var foo = "bar";
````

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```Javascript
var foo = "The same thing is true for code with syntax highlighting. A single line of code should horizontally scroll if it is really long.";
```

Inline code inside table cells should still be distinguishable.

| Language    | Code               |
|-------------|--------------------|
| Javascript  | `var foo = "bar";` |
| Ruby        | `foo = "bar"`      |

----------------

Small images should be shown at their actual size.

![](https://placecats.com/g/300/200/)

Large images should always scale down and fit in the content container.

![](https://placecats.com/g/1200/800/)

```
This is the final element on the page and there should be no margin below this.
```
<!-- %enddocs -->

## License

[MIT](../LICENSE.txt)
