---
layout: post
title: "Vim Virtual Block Modus"
tags:
  - vim
---
Eines der wichtigsten Werkzeuge für jeden Programmierer ist der Editor. Ich
persönlich bevorzuge [Vim](http://www.vim.org) für diese Aufgabe. Auf ein
besonders nützliches Feature dieses Editors möchte ich heute eingehen:

Den visuellen Block Modus
-------------------------
Dieser Modus ermöglicht es Text spaltenweise zu bearbeiten. Man erreicht ihn
unter normalen Umständen mit der Tastenkombination "CTRL-V". Vor allem, wenn
man Tabellarische Daten oder Quelltexte bearbeitet kann man das gut gebrauchen.
So lassen sich beispielsweise ähnliche Anweisungen in einem Quelltext mit nur
einem Befehl schreiben, ändern oder Teile davon löschen, ohne dass man die
entsprechende Befehlsfolge in jeder Zeile neu ausführen muss. Allerdings
funktioniert das nur dann so richtig gut, wenn die jeweiligen Spalten genau
übereinander liegen und exakt die gleiche Länge haben. Was kann man tun um mit
diesem Problem fertig zu werden.

Suchen und Ersetzen im visuellen Block Modus
--------------------------------------------
Ein weiteres nützliches Feature von Vim ist der "substitute"-Befehl. Dieser
kann in Kombination mit dem visuellen Block Modus viele Problemlösungen
erleichtern. Wechselt man bei gewähltem visuellen Bereich in den ex-Modus wird
als Kontext aber leider nicht der ausgewählte Bereich, sondern alle Zeilen in
denen der Bereich liegt ausgewählt. Den visuellen Bereich gibt man mit /\%V an.
Zum Beispiel

{% highlight vim %}
:'<,'>s/\%Vpattern/ersatz/g
{% endhighlight %}

Den visuellen Bereich nachträglich anpassen
-------------------------------------------
Manchmal möchte man den visuellen Bereich für mehrere Befehle verwenden. Um den
selben Bereich wie beim vorigen Mal auszuwählen gibt man einfach gv ein.

In anderen Fällen möchte man die Auswahl des Bereiches vielleicht erweitern
oder anpassen, ohne den ganzen Bereich erneugt auszuwählen. Hierzu gibt man
während man im visuellen Modus ist die Befehle o oder O ein um den Curser
jeweils in die engegegngesetzte Ecke des visuellen Bereiches zu bewegen bzw. an
das andere Ende der Zeile.

Weitere Möglichkeit und Erklärungen zum visuellen Modus bekommt man mit

{% highlight vim %}
:help visual
{% endhighlight %}
