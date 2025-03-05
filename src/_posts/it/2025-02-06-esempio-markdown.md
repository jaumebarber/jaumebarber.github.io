---
layout: post
title: Esempio di Markdown
date: 2025-02-06
lang: it
categories: [jekyll]
slug: markdown
redirect_from:
  - exemple-markdown
  - markdown-sample
  - ejemplo-markdown
---

Il testo può essere **grassetto**, _corsivo_ o ~~barrato~~. I <a href="https://github.com">link</a> dovrebbero avere sottolineature puntinate e sottolineature solide al passaggio del mouse.

Dovrebbe esserci spazio bianco tra i paragrafi. Dovrebbe esserci spazio bianco tra i paragrafi. Dovrebbe esserci spazio bianco tra i paragrafi. Dovrebbe esserci spazio bianco tra i paragrafi.

Dovrebbe esserci spazio bianco tra i paragrafi. Dovrebbe esserci spazio bianco tra i paragrafi. Dovrebbe esserci spazio bianco tra i paragrafi. Dovrebbe esserci spazio bianco tra i paragrafi.

> Non dovrebbe esserci margine sopra questa prima frase.
>
> Le citazioni di blocco dovrebbero essere in corsivo con un bordo grigio sul lato sinistro.
>
> Non dovrebbe esserci margine sotto questa ultima frase.

# Titolo 1

Questo è un paragrafo normale che segue un titolo. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

## Titolo 2

Questo è un paragrafo normale che segue un titolo. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.


> Questa è una citazione di blocco che segue un titolo. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

Questo è un paragrafo normale che segue un titolo. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.


### Titolo 3


#### Titolo 4

* Questa è una lista non ordinata che segue un titolo.
* Questa è una lista non ordinata che segue un titolo.
* Questa è una lista non ordinata che segue un titolo.

##### Titolo 5

1. Questa è una lista ordinata che segue un titolo.
2. Questa è una lista ordinata che segue un titolo.
3. Questa è una lista ordinata che segue un titolo.

###### Titolo 6

| Cosa      | Segue         |
|-----------|-----------------|
| Una tabella   | Un titolo        |
| Una tabella   | Un titolo        |
| Una tabella   | Un titolo        |

----------------

C'è una linea orizzontale sopra e sotto questo.

----------------

Ecco una lista non ordinata:

* Salt-n-Pepa
* Bel Biv DeVoe
* Kid 'N Play

E una lista ordinata:

1. John Lennon
2. Paul McCartney
3. George Harrison


E una lista nidificata:

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

Le liste di definizione possono essere usate con sintassi HTML. I termini di definizione sono in grassetto e corsivo.

<dl>
    <dt>Nome</dt>
    <dd>Godzilla</dd>
    <dt>Nascita</dt>
    <dd>1952</dd>
    <dt>Luogo di nascita</dt>
    <dd>Giappone</dd>
    <dt>Colore</dt>
    <dd>Verde</dd>
</dl>

----------------

Le tabelle dovrebbero avere intestazioni in grassetto e righe ombreggiate alternate.

| Artista            | Album           | Anno  |
|-------------------|-----------------|------|
| John Lennon       | Imagine         | 1971 |
| The Beatles       | Abbey Road      | 1969 |
| The Beatles       | Sgt. Pepper's Lonely Hearts Club Band  | 1967 |

Se una tabella è troppo larga, dovrebbe rimpicciolirsi e/o scorrere orizzontalmente.

| Artista            | Album           | Anno  | Etichetta       | Premi   | Canzoni     |
|-------------------|-----------------|------|-------------|----------|-----------|
| John Lennon       | Imagine         | 1971 | Apple Records | Numerosi premi | Imagine, Jealous Guy, Oh My Love, How?, I Don't Want To Be a Soldier, Crippled Inside, Oh Yoko!,  |
| The Beatles       | Abbey Road      | 1969 | Apple Records | Numerosi premi | Come Together, Something, Octopus's Garden, Here Comes the Sun, Because,  |
| The Beatles       | Sgt. Pepper's Lonely Hearts Club Band  | 1967 | Parlophone | Numerosi premi | A Day in the Life, With a Little Help from My Friends, Lucy in the Sky with Diamonds, Strawberry Fields Forever, When I'm Sixty-Four |

----------------

I frammenti di codice come `var foo = "bar";` possono essere mostrati in linea.

Anche, `questo dovrebbe allinearsi verticalmente` ~~`con questo`~~ ~~e questo~~.

Il codice può anche essere mostrato in un elemento a blocco.
````
var foo = "bar";
````

Il codice può anche usare l'evidenziazione della sintassi.
````Javascript
var foo = "bar";
````

```
I blocchi di codice di una singola riga lunghi non dovrebbero andare a capo. Dovrebbero scorrere orizzontalmente se sono troppo lunghi. Questa riga dovrebbe essere abbastanza lunga per dimostrarlo.
```

```Javascript
var foo = "La stessa cosa è vera per il codice con evidenziazione della sintassi. Una singola riga di codice dovrebbe scorrere orizzontalmente se è davvero lunga.";
```

Il codice in linea all'interno delle celle della tabella dovrebbe comunque essere distinguibile.


| Linguaggio    | Codice               |
|-------------|--------------------|
| Javascript  | `var foo = "bar";` |
| Ruby        | `foo = "bar"`      |

----------------

Le imagini piccole dovrebbero essere mostrate nella sua forma originale. 

![](https://placecats.com/g/300/200/)

Le imagini grandi dovrebbero essere ridotte per agiustare nel container del contenuto.

![](https://placecats.com/g/1200/800/)

```
Questo è l'elemento finale della pagina e non dovrebbe esserci margine sotto di esso.
```
<!-- %enddocs -->

## Licenzia

[MIT](LICENSE.txt)
