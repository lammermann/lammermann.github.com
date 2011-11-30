---
layout: post
title: "Arbeiten mit der Fehlerliste in Vim"
tags:
  - vim
  - fugitive
---
Beim Arbeiten mit [Vim](http://www.vim.org) kommt man immer wieder mit einem
temporären Puffer in Berührung, in welchem beispielsweise die beim Kompilieren
zwischengespeichert werden. Dieser Buffer funktioniert als eine Art Link-Liste
mit deren Hilfe man an die Position des jeweiligen Fehlers springen kann.

Beim Kompilieren wird der Puffer mit dem Befehl

{% highlight vim %}
:make
{% endhighlight %}

gefüllt werden. Das aktuelle Editierfenster springt automatisch zum ersten
Fehler.  Das ist sehr nützlich um sofort an die Stellen im Quelltext zu kommen,
an denen man Korrekturen vornehmen muss.

Mit

{% highlight vim %}
:cfirst
:cnext
:cprevious
:clast
{% endhighlight %}

navigiert man von einer Stelle zur nächsten. Manchmal ist es allerdings
sinnvoll die ganze Liste sehen zu können und anhand dessen eine Vorauswahl
treffen zu können um Folge- oder weniger wichtige Fehler zu übergehen und sich
auf die wichtigen Stellen konzentrieren zu können. Dazu wird folgender Befehl
verwendet:

{% highlight vim %}
:copen
{% endhighlight %}

Es öffnet sich ein neues Fenster, in dem die Fehler und deren Stellen
aufgelistet sind. Durch drücken der Entertaste springt man an die Stelle,
welche auf der aktuellen Zeile verlinkt ist.

Weitere Anwendungen
-------------------
Natürlich ist die Verwendung als Fehlerliste nur eine von vielen möglichen
Verwendungen. Viele weitere Plugins setzen diese Funktionalität ebenfalls ein.
Zum Beispiel benutzt das Plugin
[fugitive](https://github.com/tpope/vim-fugitive) (Ein Wrapper zur Benutzung
von [git](http://git-scm.com) aus Vim heraus) sie für die Befehle `Ggrep` und
`Glog`.
