---
layout: post
title: Ejemplo de Markdown
date: 2025-02-06
lang: es
categories: [jekyll]
slug: markdown
redirect_from:
  - exemple-markdown
  - markdown-sample
  - esempio-markdown
---

El texto puede ser **negrita**, _cursiva_ o ~~tachado~~. Los [enlaces](https://github.com) deben tener subrayados y cambiar al color de acento al pasar el ratón por encima.

Debe haber espacio en blanco entre los párrafos. Debe haber espacio en blanco entre los párrafos. Debe haber espacio en blanco entre los párrafos. Debe haber espacio en blanco entre los párrafos.

Debe haber espacio en blanco entre los párrafos. Debe haber espacio en blanco entre los párrafos. Debe haber espacio en blanco entre los párrafos. Debe haber espacio en blanco entre los párrafos.

> No debe haber margen encima de esta primera frase.
>
> Las citas de bloque deben estar en cursiva con un borde gris en el lado izquierdo.
>
> No debe haber margen debajo de esta última frase.

# Encabezado 1

Este es un párrafo normal que sigue a un encabezado. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

## Encabezado 2

Este es un párrafo normal que sigue a un encabezado. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.


> Esta es una cita de bloque que sigue a un encabezado. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

Este es un párrafo normal que sigue a un encabezado. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.


### Encabezado 3


#### Encabezado 4

* Esta es una lista desordenada que sigue a un encabezado.
* Esta es una lista desordenada que sigue a un encabezado.
* Esta es una lista desordenada que sigue a un encabezado.

##### Encabezado 5

1. Esta es una lista ordenada que sigue a un encabezado.
2. Esta es una lista ordenada que sigue a un encabezado.
3. Esta es una lista ordenada que sigue a un encabezado.

###### Encabezado 6

| Qué      | Sigue         |
|-----------|-----------------|
| Una tabla   | Un encabezado        |
| Una tabla   | Un encabezado        |
| Una tabla   | Un encabezado        |

----------------

Hay una línea horizontal arriba y debajo de esto.

----------------

Aquí hay una lista desordenada:

* Salt-n-Pepa
* Bel Biv DeVoe
* Kid 'N Play

Y una lista ordenada:

1. John Lennon
2. Paul McCartney
3. George Harrison


Y una lista anidada:

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

Las listas de definición se pueden usar con sintaxis HTML. Los términos de definición están en negrita y cursiva.

<dl>
    <dt>Nombre</dt>
    <dd>Godzilla</dd>
    <dt>Nacimiento</dt>
    <dd>1952</dd>
    <dt>Lugar de nacimiento</dt>
    <dd>Japón</dd>
    <dt>Color</dt>
    <dd>Verde</dd>
</dl>

----------------

Las tablas deben tener encabezados en negrita y filas sombreadas alternas.

| Artista            | Álbum           | Año  |
|-------------------|-----------------|------|
| John Lennon       | Imagine         | 1971 |
| The Beatles       | Abbey Road      | 1969 |
| The Beatles       | Sgt. Pepper's Lonely Hearts Club Band  | 1967 |

Si una tabla es demasiado ancha, debe condensarse y/o desplazarse horizontalmente.

| Artista            | Álbum           | Año  | Sello       | Premios   | Canciones     |
|-------------------|-----------------|------|-------------|----------|-----------|
| John Lennon       | Imagine         | 1971 | Apple Records | Numerosos premios | Imagine, Jealous Guy, Oh My Love, How?, I Don't Want To Be a Soldier, Crippled Inside, Oh Yoko!,  |
| The Beatles       | Abbey Road      | 1969 | Apple Records | Numerosos premios | Come Together, Something, Octopus's Garden, Here Comes the Sun, Because,  |
| The Beatles       | Sgt. Pepper's Lonely Hearts Club Band  | 1967 | Parlophone | Numerosos premios | A Day in the Life, With a Little Help from My Friends, Lucy in the Sky with Diamonds, Strawberry Fields Forever, When I'm Sixty-Four |

----------------

Los fragmentos de código como `var foo = "bar";` se pueden mostrar en línea.

También, `esto debería alinearse verticalmente` ~~`con esto`~~ ~~y esto~~.

El código también se puede mostrar en un elemento de bloque.
````
var foo = "bar";
````

El código también puede usar resaltado de sintaxis.
```Javascript
var foo = "bar";
```

```
Los bloques de código de una sola línea largos no deberían ajustarse. Deberían desplazarse horizontalmente si son demasiado largos. Esta línea debería ser lo suficientemente larga para demostrar esto.
```

```Javascript
var foo = "Lo mismo es cierto para el código con resaltado de sintaxis. Una sola línea de código debería desplazarse horizontalmente si es realmente larga.";
```

El código en línea dentro de las celdas de la tabla todavía debería ser distinguible.

| Language    | Code               |
|-------------|--------------------|
| Javascript  | `var foo = "bar";` |
| Ruby        | `foo = "bar"`      |

Las imágenes pequeñas deberían mostrarse a su tamaño real.

![](https://placecats.com/g/300/200/)

Las imágenes grandes siempre deberían reducirse y ajustarse al contenedor de contenido.

![](https://placecats.com/g/1200/800/)

```
Este es el elemento final de la página y no debería haber margen debajo de esto.
```
<!-- %enddocs -->

## Licencia

[MIT](../LICENSE.txt)
