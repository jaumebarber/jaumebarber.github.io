---
layout: page
title: Documentació
headline: Documentació
lang: ca
order: 2
page_id: docs
permalink: documentacio
category_name: documentacio
---

Helvetic Resume és un tema Jekyll audaç inspirat en el disseny suís i en les obres de [Massimo Vignelli]({{ site.base_url }}/vignelli). Aquest tema s'adapta bé a llocs amb molt de contingut escrit.

### Característiques:
* El disseny "mobile-first" garanteix que aquest tema funcione de manera òptima en mòbils mentre s'adapta elegantment a pantalles de mida d'escriptori.
* Dissenyat per a blocs i llocs amb molt de contingut escrit, amb tipografia destacada, resums a la pàgina principal i fragments d'entrades anteriors/següents.
* Suport per a múltiples idiomes, preconfigurat en 4 llengües.
* Compatible amb una àmplia gamma d'elements HTML i markdown.
* Estils flexibles que es poden reutilitzar per a la personalització sense afegir CSS addicional.
* Enllaços de navegació generats dinàmicament. Consulta la documentació per afegir pàgines amb categories específiques d'entrades mitjançant bucles "for".

## Instal·lació

### Ús de Devcontainers (recomanat)
Només hi ha tres requisits bàsics per utilitzar aquest tema immediatament:
- Docker
- VS Code
- Extensió Devcontainers

Si teniu aquests tres elements, aquest projecte és com un iogurt: només cal obrir la tapa i ja està llest per menjar ;).

Si en obrir el projecte no se us demana obrir-lo en un contenidor, busqueu el botó blau a la cantonada inferior esquerra de la pantalla i selecciona `Reopen in container`.

Si mai necessiteu reconstruir el teu contenidor des de zero, seleccioneu `Rebuild container without cache` des del menú Ctrl + Shift + P.

### Instal·lació de dependències
Assumint que teniu Ruby i Bundler instal·lats: 
```bash
cd src
bundle install
```

Deixeu que el procés finalitze i després executeu:
```bash
bundle exec jekyll serve
```

### Ús del vostre propi Dockerfile
Podeu dockeritzar l'aplicació pel vostre compte creant el vostre propi Dockerfile o adaptant i utilitzant el que hi ha a la carpeta `.devcontainer`, després executeu-lo amb el vostre propi `compose.yaml` o com preferiu.

No hem proporcionat cap d'aquests fitxers per evitar repeticions i perquè aquest és un repositori d'opinió marcada, però hauria de ser molt fàcil de crear i és la millor opció si no utilitzeu VS Code.

## Configuració multilingüe
Helvetic Resume ve preconfigurat amb els complements `jekyll-polyglot` i `jekyll-redirect-from`, que habiliten les seves capacitats multilingües.

Per demostrar-ho, aquest tema està preconfigurat en quatre llengües: anglès, català, espanyol i italià, però podeu afegir o eliminar tants idiomes com vulgueu des del fitxer `_config.yml`.

Trobareu les traduccions actualment en ús a la carpeta `_data`. Finalment, utilitzem el complement `jekyll-date-localization` per traduir les dates. El complement ja inclou alguns idiomes, però si el vostre no hi és, sempre el podeu afegir a la carpeta `_locales`, tal com hem fet amb el català.

## Modes i colors
Aquest tema ha estat dissenyat amb el màxim desig de ser fidel al seu homòleg original, encara que actualitzat als estàndards moderns no només en termes de dependències, sinó també de gustos.

És per això que hem afegit un increïble botó d'animació per canviar entre els modes Clar i Fosc (gràcies [web.dev](https://web.dev/patterns/theming/theme-switch) per això!).

Cada cop que el preméu, no només canviareu entre clar i fosc o viceversa, sinó que també alternareu aleatòriament entre la majoria dels dissenys de broccolini per al tema Swiss. Només hem descartat el gris per una alternativa més fresca (no ens agradava ;P) i hem canviat significativament el blau. La resta es manté igual, només adaptant-los als esquemes clar/fosc.

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

## Desenvolupament
El vostre està configurat com a lloc web Jekyll normal! Per provar-lo, només obriu-lo en un devcontainer o executeu `bundle exec jekyll serve` i obriu el navegador a `http://localhost:4000`. Això inicia un servidor Jekyll utilitzant el tema. Afegiu pàgines, documents, dades, etc., com és habitual per provar-ne el contingut. A mesura que féu modificacions al tema i al contingut, el lloc es regenerarà i podreu anar veient els canvis al navegador, com de costum.

Quan el tema es publique, només es publicaran els fitxers a `src` que estiguen versionats amb Git.

## Contribució
Podeu fer sol·licituds de "pull request" i obrir informes d'errades a GitHub a [https://github.com/hipervincle/helvetic-resume](https://github.com/hipervincle/helvetic-resume). Aquest projecte vol ser un espai segur i acollidor per a la col·laboració, i s'espera que els col·laboradors adhereixin al codi de conducta de [Contributor Covenant](http://contributor-covenant.org).

## Atribucions
- Botó mode tema: [web.dev](https://web.dev/patterns/theming/theme-switch)
- Favicon: [narak0rn](https://www.flaticon.com/free-icons/swiss-army-knife)

## Llicència
El tema està disponible com a codi obert sota els termes de la [Llicència MIT](http://opensource.org/licenses/MIT).
