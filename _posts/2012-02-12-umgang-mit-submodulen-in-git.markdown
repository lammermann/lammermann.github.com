---
layout: post
title: "Umgang mit Submodulen in git"
tags:
  - git
---
Was sind git Submodule?
-----------------------
Submodule bieten die Möglichkeit Unterprojekte in ein Repository einzubinden
ohne dass ihre Versionsinformationen verloren gehen. Das ist sehr nützlich wenn
ein Projekt von einem anderen Projekt als Abhängigkeit benötigt wird und dabei
die genaue Version entscheidend ist.

Git stellt dafür den Befehl git submodule zur Verfügung.

{% highlight sh %}
$ git submodule add ${SUBREPO_URL}
{% endhighlight %}

Wird dieser Befehl ausgeführt lädt git das Projekt automatisch herunter und
speichert die aktuellen Versionsinformationen im Index des Hauptprojektes. Dies
ist sehr platzsparend da nur Verweise auf das Submodul gespeichert werden statt
alles zu kopieren.

Umfassendere Informationen zu Submodulen finden sich bei [Progit](http://progit.org/book/de/ch6-8.html).

Bestehende Unterverzeichnisse als Submodul einbinden
----------------------------------------------------
Oft entwickelt sich die Projektstruktur aus den Gegebenheiten heraus ohne eine
gezielte Planung. Oder Unterprojekte mussten erstellt werden bevor mit der
Entwicklung des Hauptprojektes begonnen werden konnte. So kann es passieren,
dass ein Projekt entsteht welches bereits Repositories in seinen
Unterverzeichnissen enthält. In der Vergangenheit hatte ich das Problem, dass
ich Unterprojekte nur über den weiter oben beschriebenen Befehl aufnehmen
konnte. Wenn bereits ein Unterverzeichnis mit gleichem Namen existierte gab git
beim Versuch das Repository des Unterprojektes auszuchecken eine Fehlermeldung
aus.  Damit das Repository als Unterprojekt aufgenommen wird muss auf jeden
Fall der Pfad dorthin als Argument übergeben werden.

{% highlight sh %}
$ git submodule add ${SUBREPO_URL} ${existing/submodule/path}
{% endhighlight %}

Dieser Befehl wird auch dann verwendet, wenn der Name des Unterverzeichnisses
anders als der des Repositories lauten soll.
