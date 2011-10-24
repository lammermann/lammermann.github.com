---
layout: post
title: "Vordefinierte Variablen beim gcc ermitteln"
tags:
  - gcc
---
Manchmal möchte man gerne die Defines des Compilers wissen. Dies geschieht zum
Beispiel wenn man platformspezifische Informationen mit #ifdef Anweisungen
berücksichtigen möchte oder muss. Leider ist es kaum möglich diese Angaben aus
der Dokumentation zu ermitteln. Die folgende Befehlsfolge hilft weiter:

{% highlight sh %}
$ touch empty.c
$ gcc -v -dD -E empty.c
{% endhighlight %}
