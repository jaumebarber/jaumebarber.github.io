---
layout: page
title: Documentación
headline: Documentación
lang: es
order: 2
page_id: docs
permalink: documentacion
category_name: documentacion
---

Helvetic Resume es un tema Jekyll audaz inspirado en el diseño suizo y en las obras de [Massimo Vignelli]({{ site.base_url }}/vignelli). Este tema se adapta bien a sitios con mucho contenido escrito.

### Características:
* El diseño "mobile-first" garantiza que este tema funcione de manera óptima en dispositivos móviles mientras se adapta elegantemente a pantallas de tamaño de escritorio.
* Diseñado para blogs y sitios con mucho contenido escrito, con tipografía destacada, resúmenes en la página principal y fragmentos de entradas anteriores/siguientes.
* Soporte para múltiples idiomas, preconfigurado en 4 lenguas.
* Compatible con una amplia gama de elementos HTML y Markdown.
* Estilos flexibles que se pueden reutilizar para la personalización sin agregar CSS adicional.
* Enlaces de navegación generados dinámicamente. Consulta la documentación para añadir páginas con categorías específicas de entradas mediante bucles "for".

## Instalación

### Uso de Devcontainers (recomendado)
Solo hay tres requisitos básicos para utilizar este tema de inmediato:
- Docker
- VS Code
- Extensión Devcontainers

Si tienes estos tres elementos, este proyecto es como un yogur: solo hay que abrir la tapa y ya está listo para usar ;).

Si al abrir el proyecto no se te pide abrirlo en un contenedor, busca el botón azul en la esquina inferior izquierda de la pantalla y selecciona `Reopen in container`.

Si alguna vez necesitas reconstruir tu contenedor desde cero, selecciona `Rebuild container without cache` desde el menú Ctrl + Shift + P.

### Instalación de dependencias
Asumiendo que tienes Ruby y Bundler instalados: 

```bash
cd src
bundle install
```

Deja que el proceso finalice y luego ejecuta:

```bash
bundle exec jekyll serve
```

### Uso de tu propio Dockerfile
Puedes dockerizar la aplicación por tu cuenta creando tu propio Dockerfile o adaptando y utilizando el que hay en la carpeta `.devcontainer`, luego ejecutarlo con tu propio `compose.yaml` o como prefieras.

No hemos proporcionado estos archivos para evitar repeticiones y porque este es un repositorio de opinión marcada, pero debería ser muy fácil de crear y es la mejor opción si no utilizas VS Code.

## Configuración multilingüe
Helvetic Resume viene preconfigurado con los complementos `jekyll-polyglot` y `jekyll-redirect-from`, que habilitan sus capacidades multilingües.

Para demostrarlo, este tema está preconfigurado en cuatro idiomas: inglés, catalán, español e italiano, pero puedes añadir o eliminar tantos idiomas como desees desde el archivo `_config.yml`.

Encontrarás las traducciones actualmente en uso en la carpeta `_data`. Finalmente, utilizamos el complemento `jekyll-date-localization` para traducir las fechas. El complemento ya incluye algunos idiomas, pero si el tuyo no está, siempre puedes añadirlo a la carpeta `_locales`, tal como hemos hecho con el catalán.

## Modos y colores
Este tema ha sido diseñado con el máximo deseo de ser fiel a su homólogo original, aunque actualizado a los estándares modernos no solo en términos de dependencias, sino también de estilo.

Por ello, hemos añadido un increíble botón de animación para cambiar entre los modos Claro y Oscuro (¡gracias [web.dev](https://web.dev/patterns/theming/theme-switch) por esto!).

Cada vez que lo pulses, no solo cambiarás entre claro y oscuro o viceversa, sino que también alternarás aleatoriamente entre la mayoría de los diseños de broccolini para el tema Swiss. Solo hemos descartado el gris por una alternativa más fresca (no nos gustaba ;P) y hemos cambiado significativamente el azul. El resto se mantiene igual, solo adaptándose a los esquemas claro/oscuro.

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

## Desarrollo
Tu tema está configurado como un sitio Jekyll normal. Para probarlo, solo ábrelo en un devcontainer o ejecuta `bundle exec jekyll serve` y abre el navegador en `http://localhost:4000`. Esto inicia un servidor Jekyll utilizando el tema. Agrega páginas, documentos, datos, etc., como es habitual para probar el contenido del tema. A medida que realices modificaciones en el tema y en el contenido, el sitio se regenerará y podrás ver los cambios en el navegador después de actualizar, como de costumbre.

Cuando el tema se publique, solo se publicarán los archivos en `src` que estén versionados con Git.

## Contribución
Puedes hacer solicitudes de "pull request" y abrir informes de errores en GitHub en [https://github.com/hipervincle/helvetic-resume](https://github.com/hipervincle/helvetic-resume). Este proyecto pretende ser un espacio seguro y acogedor para la colaboración, y se espera que los colaboradores se adhieran al código de conducta de [Contributor Covenant](http://contributor-covenant.org).

## Atribuciones
- Botón de cambio de tema: [web.dev](https://web.dev/patterns/theming/theme-switch)
- Favicon: [narak0rn](https://www.flaticon.com/free-icons/swiss-army-knife)

## Licencia
El tema está disponible como código abierto bajo los términos de la [Licencia MIT](http://opensource.org/licenses/MIT).
