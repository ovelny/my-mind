# My Mind

This fork of [my-mind](https://github.com/ondras/my-mind/) makes the following changes:

* Remove google analytics
* Remove some UI elements (some links and tip section)
* Replace arrow bindings for node selection & navigation by vim bindings (h/j/k/l)
* Replace WASD navigation by ZQSD navigation, for us poor AZERTY people
* Increase keyboard's scroll speed by a lot, for big mindmaps

This fork is then "compiled" into a single HTML file with [Monolith](https://github.com/Y2Z/monolith) using the following flags:

```bash
# -I: isolate document
# -a: exclude audio
# -M: don't add timestamp and URL information
# -v: exclude videos

monolith -IaMv index.html -o mindmap.html
```
