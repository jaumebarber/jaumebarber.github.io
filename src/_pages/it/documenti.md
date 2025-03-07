---
layout: page
title: Documenti
headline: Documenti
lang: it
order: 2
page_id: docs
permalink: documenti
category_name: documenti
---

Helvetic Resume è un tema Jekyll audace ispirato al design svizzero e alle opere di [Massimo Vignelli]({{ site.base_url }}/vignelli). Questo tema si adatta bene a siti con molto contenuto scritto.

### Caratteristiche:
* Il design "mobile-first" garantisce che questo tema funzioni in modo ottimo sui dispositivi mobili mentre si adatta elegantemente agli schermi desktop.
* Progettato per blog e siti con molto contenuto scritto, con tipografia ben definita, riassunti nella pagina principale e frammenti di articoli precedenti/successivi.
* Supporto multilinguale, preconfigurato in 4 lingue.
* Compatibile con un'ampia gamma di elementi HTML e Markdown.
* Stili flessibili che possono essere riutilizzati per la personalizzazione senza aggiungere più CSS.
* Collegamenti di navigazione generati dinamicamente. Consulta la documentazione per aggiungere pagine con categorie specifiche di articoli utilizzando dei cicli "for".

## Installazione

### Uso di Devcontainers (consigliato)
Ci sono solo tre requisiti fondamentali per utilizzare subito questo tema:
- Docker
- VS Code
- Estensione Devcontainers

Se ha questi tre elementi, questo progetto è come uno yogurt: basta aprire il coperchio ed è pronto all'uso ;).

Se aprendo il progetto non vi viene chiesto di avviarlo in un container, cercare il pulsante blu nell'angolo in basso a sinistra dello schermo e selezionare `Reopen in container`.

Se mai avesse bisogno di ricostruire il container da zero, selezioni `Rebuild container without cache` dal menu Ctrl + Shift + P.

### Installazione delle dipendenze
Assumendo che abbia Ruby e Bundler installati:

```bash
cd src
bundle install
````
Lascia che il processo finisca e poi esegui:

```bash
bundle exec jekyll serve
```

### Uso di un proprio Dockerfile
Può dockerizzare l'applicazione per conto suo creando il suo Dockerfile o adattando e utilizzando quello presente nella cartella .devcontainer, poi avviarlo con il suo compose.yaml o come preferisca.

Non abbiamo fornito questi file per evitare ripetizioni e perché questo è un repository "opinionated", ma dovrebbe essere molto semplice da creare ed è la scelta migliore se non utilizza VS Code.

### Configurazione multilingue
Helvetic Resume viene preconfigurato con i plugin `jekyll-polyglot` e `jekyll-redirect-from`, che abilitano le funzionalità multilingue.

Per dimostrarlo, questo tema è preconfigurato in quattro lingue: inglese, catalano, spagnolo e italiano, ma può aggiungere o rimuovere quante lingue vuole dal file `_config.yml`.

Troverà le traduzioni attualmente in uso nella cartella `_data`. Infine, utilizziamo il plugin `jekyll-date-localization` per tradurre le date. Il plugin include già alcune lingue, ma se la sua non è presente, può sempre aggiungerla nella cartella `_locales`, come abbiamo fatto con il catalano.

### Modalità e colori
Questo tema è stato progettato con il massimo desiderio di rimanere fedele alla sua controparte originale, pur aggiornandosi agli standard moderni non solo in termini di dipendenze, ma anche di stile.

Per questo motivo, abbiamo aggiunto un incredibile pulsante animato per passare tra le modalità Chiara e Scura (grazie [web.dev](https://web.dev/patterns/theming/theme-switch) per questo!).

Ogni volta che lo prema, non solo passerà da chiaro a scuro o viceversa, ma alternerà anche aleatoriamente tra la maggior parte dei design broccolini per il tema Swiss. Abbiamo solo cambiato il grigio per un'alternativa più fresca (non ci piaceva ;P) e modificato significativamente il blu. Il resto rimane invariato, adattandosi semplicemente agli schemi chiaro/scuro.

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

## Sviluppo
Il tema è configurato come un normale sito Jekyll. Per testarlo, apralo in un devcontainer o avvii `bundle exec jekyll serve` e aprite il browser su `http://localhost:4000`. Questo avvia un server Jekyll utilizzando il tema. Aggiunga pagine, documenti, dati, ecc., come di consueto per testare il contenuto del tema. Mentre apporti modifiche al tema e al contenuto, il sito si rigenererà e potrà vedere le modifiche nel browser dopo l'aggiornamento, come di consueto.

Quando il tema verrà pubblicato, saranno pubblicati solo i file in `src` che sono versionati con Git.

## Contributi
Può inviare richieste di "pull request" e segnalare problemi su GitHub all'indirizzo [https://github.com/hipervincle/helvetic-resume](https://github.com/hipervincle/helvetic-resume). Questo progetto vuole essere uno spazio sicuro e accogliente per la collaborazione, e si prevede che i collaboratori aderiscano al codice di condotta di [Contributor Covenant](http://contributor-covenant.org).

## Attribuzioni
- Pulsante di cambio tema: [web.dev](https://web.dev/patterns/theming/theme-switch)
- Favicon: [narak0rn](https://www.flaticon.com/free-icons/swiss-army-knife)

## Licenza
Il tema è disponibile come software open-source sotto i termini della [Licenza MIT](http://opensource.org/licenses/MIT).

