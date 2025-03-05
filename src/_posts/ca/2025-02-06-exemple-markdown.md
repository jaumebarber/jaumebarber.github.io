---
layout: post
title: Exemple de Markdown
date: 2025-02-06
lang: ca
categories: [jekyll]
slug: markdown
redirect_from:
  - markdown-sample
  - ejemplo-markdown
  - esempio-markdown
---

El text pot ser **negreta**, _cursiva_ o ~~ratllat~~. Els [enllaços](https://github.com) han d'estar subratllats i la ratlla ha de canviar de color en passar el ratolí.

Hi hauria d'haver espai en blanc entre els paràgrafs. Hi hauria d'haver espai en blanc entre els paràgrafs. Hi hauria d'haver espai en blanc entre els paràgrafs. Hi hauria d'haver espai en blanc entre els paràgrafs.

Hi hauria d'haver espai en blanc entre els paràgrafs. Hi hauria d'haver espai en blanc entre els paràgrafs. Hi hauria d'haver espai en blanc entre els paràgrafs. Hi hauria d'haver espai en blanc entre els paràgrafs.

> No hi hauria d'haver marge a sobre d'aquesta primera frase.
>
> Les cites de bloc haurien de tenir cursiva amb una vora grisa al costat esquerre.
>
> No hi hauria d'haver marge a sota d'aquesta última frase.

# Encapçalament 1

Aquest és un paràgraf normal que segueix un encapçalament. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

## Encapçalament 2

Aquest és un paràgraf normal que segueix un encapçalament. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.


> Aquesta és una cita de bloc que segueix un encapçalament. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

Aquest és un paràgraf normal que segueix un encapçalament. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.


### Encapçalament 3


#### Encapçalament 4

* Aquesta és una llista desordenada que segueix un encapçalament.
* Aquesta és una llista desordenada que segueix un encapçalament.
* Aquesta és una llista desordenada que segueix un encapçalament.

##### Encapçalament 5

1. Aquesta és una llista ordenada que segueix un encapçalament.
2. Aquesta és una llista ordenada que segueix un encapçalament.
3. Aquesta és una llista ordenada que segueix un encapçalament.

###### Encapçalament 6

| Què      | Segueix         |
|-----------|-----------------|
| Una taula   | Un encapçalament        |
| Una taula   | Un encapçalament        |
| Una taula   | Un encapçalament        |

----------------

Hi ha una línia horitzontal a sobre i a sota d'això.

----------------

Aquí teniu una llista desordenada:

* Salt-n-Pepa
* Bel Biv DeVoe
* Kid 'N Play

I una llista ordenada:

1. John Lennon
2. Paul McCartney
3. George Harrison


I una llista niada:

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

Les llistes de definició es poden utilitzar amb sintaxi HTML. Els termes de definició són en negreta i cursiva.

<dl>
    <dt>Nom</dt>
    <dd>Godzilla</dd>
    <dt>Naixement</dt>
    <dd>1952</dd>
    <dt>Lloc de naixement</dt>
    <dd>Japó</dd>
    <dt>Color</dt>
    <dd> Verd</dd>
</dl>

----------------

Les taules haurien de tenir encapçalaments en negreta i files ombrejades alternades.

| Artista            | Àlbum           | Any  |
|-------------------|-----------------|------|
| John Lennon       | Imagine         | 1971 |
| The Beatles       | Abbey Road      | 1969 |
| The Beatles       | Sgt. Pepper's Lonely Hearts Club Band  | 1967 |

Si una taula és massa ampla, hauria de condensar-se i/o desplaçar-se horitzontalment.

| Artista            | Àlbum           | Any  | Segell       | Premis   | Cançons     |
|-------------------|-----------------|------|-------------|----------|-----------|
| John Lennon       | Imagine         | 1971 | Apple Records | Numerosos premis | Imagine, Jealous Guy, Oh My Love, How?, I Don't Want To Be a Soldier, Crippled Inside, Oh Yoko!,  |
| The Beatles       | Abbey Road      | 1969 | Apple Records | Numerosos premis | Come Together, Something, Octopus's Garden, Here Comes the Sun, Because,  |
| The Beatles       | Sgt. Pepper's Lonely Hearts Club Band  | 1967 | Parlophone | Numerosos premis | A Day in the Life, With a Little Help from My Friends, Lucy in the Sky with Diamonds, Strawberry Fields Forever, When I'm Sixty-Four |

----------------

Els fragments de codi com `var foo = "bar";` es poden mostrar en línia.

També, `això hauria d'alinear-se verticalment` ~~`amb això`~~ ~~i això~~.

El codi també es pot mostrar en un element de bloc.
````
var foo = "bar";
````

El codi també pot utilitzar ressaltat de sintaxi.
```Javascript
var foo = "bar";
```

```
Els blocs de codi de línia simple llargs no s'haurien d'embolicar. Haurien de desplaçar-se horitzontalment si són massa llargs. Aquesta línia hauria de ser prou llarga per demostrar això.
```

```Javascript
var foo = "El mateix és cert per al codi amb ressaltat de sintaxi. Una línia única de codi hauria de desplaçar-se horitzontalment si és realment llarga.";
```

El codi en línia dins de les cel·les de la taula encara hauria de ser distingible.

| Language    | Code               |
|-------------|--------------------|
| Javascript  | `var foo = "bar";` |
| Ruby        | `foo = "bar"`      |

Les imatges petites s'haurien de mostrar a la seva mida real.

![](https://placecats.com/g/300/200/)

Les imatges grans sempre s'haurien de reduir i ajustar-se al contenidor de contingut.

![](https://placecats.com/g/1200/800/)

```
Aquest és l'element final de la pàgina i no hi hauria d'haver marge a sota d'això.
```
<!-- %enddocs -->

## Llicència

[MIT](../LICENSE.txt)
