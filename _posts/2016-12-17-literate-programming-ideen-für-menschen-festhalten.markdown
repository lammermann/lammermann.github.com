---
layout: post
title: "Literate Programming: Ideen für Menschen festhalten"
tags:
  - Literate Programming
  - Dokumentation
  - Software Entwicklung
---
Vor kurzem bin ich auf den Artikel [Literate
Programming](http://www.literateprogramming.com/knuthweb.pdf) von Donald Knuth
gestoßen. Da ich auch selber immer auf der Suche bin meine Projekte besser zu
dokumentieren habe ich mich ein wenig mit seinem Ansatz beschäftigt.

Die Grundidee ist folgende: Programme sollten nicht in erster Linie für
Maschinen geschrieben werden sondern damit andere Menschen sie gut verstehen
können. Ein Programm sollte sich lesen lassen wie ein literarisches Werk und es
sollte Freude machen sich damit zu beschäftigen. Um das zu erreichen wird der
Programmcode wie eine Erzählung aufgebaut bei der Erklärungen und Quellcode
miteinander verwoben werden. Aus dem so erstellten Text kann man zwei
verschiedene Ausgaben erzeugen:

* Eine saubere Dokumentation, die sich wie ein Buch liest
* Ein compilierbarer Quelltext (oder bei interpretierten Sprachen ein
  ausführbares Skript)

Die Idee dahinter ist gut (wer will nicht eine Dokumentation, welche genauso
interessant wie eine Erzählung ist) zeigt aber in der Praxis einige Probleme.

### Man hat einen weiteren Erzeugungsschritt
Da der Quelltext in dieser Form nicht direkt kompilierbar ist braucht man immer
ein weiteres Programm. Das macht es schwieriger mit anderen an einem Projekt
zusammen zu arbeiten. Erzeugt man den funktionierenden Quelltext und macht
diesen anderen zugänglich (damit sich der Kompilieraufwand verkleinert) hat man
den eigentlichen Nutzen des ganzen Konzeptes wieder verpasst und eventuelle
Änderungen von dritten müssen mit großem Aufwand in den ursprünglichen
Quelltext eingefügt werden.

Auch beim Debuggen ergeben sich schnell Probleme da die Zeilenverweise auf den
generierten Quelltext statt auf die ursprüngliche Quelle verweisen.

Möglicherweise kann man beiden Problemen mit besseren Tools abhelfen aber diese
zu erstellen (und dauerhaft zu pflegen) ist mit großem Aufwand verbunden.

### Es ist schwer fehlerhafte oder ineffektive Implementierungen aufzuzeigen
Vor kurzem habe ich einige Softwaredokumentationen gelesen die tatsächlich sehr
interssant waren (eines war ein Dokument über die [Implementierung von lua
5.0](https://www.lua.org/doc/jucs05.pdf) bei dem anderen ging es um
Graphendatenbanken). Keiner dieser Texte wurde gemeinsam mit dem Quelltext als
"literate" Programm erstellt obwohl sie sich zum Teil intensiv mit Details der
Implementierung beschäftigten. Was sehr dazu beitrug, dass diese Texte
interessant waren und die Entscheidungen nachvollziehbar waren war, dass das
propagierte Softwaredesign als ineffektiv oder fehlerhaft dargetstellten
Ansätzen gegenübergestellt wurde. Das ist mit literate programing sehr schwer
umsetzbar, da entweder das Programm nicht kompilieren würde oder die
fehlerhaften Teile in keiner Weise validiert werden könnten.

### Die Dokumentation ist statisch
Da die Dokumentation in einem nicht editierbaren Format vorliegt kann der Leser
nicht unmittelbar Änderungen vornehmen. Entwickler am Projekt werden also mit
hoher Wahrscheinlichkeit die Dokumentation nicht (oder nur ein einziges Mal
ganz am Anfang) durchlesen.

Um das zu umgehen ist es sehr wichtig, das der beschreibende Text bereits im
Quelltext gut lesbar ist und sich natürlich in den Programmcode einfügt.

## Lösungsansätze
Das es Probleme gibt soll nicht heißen, die Idee hinter literate programing
wäre schlecht. Gerade der Gedanke die Anordnung des Quelltextes danach zu
wählen, wie man die Prinipien einem anderen erklären würde kann die
Quellcodestruktur deutlich verbessern. Dadurch werden automatisch die Details
einer Implementierung erst nach dem Konzept der Architektur erklärt was sofort
zu einem besseren Verständnis sowohl der Details als auch der übergeordneten
Konzepte beiträgt.

### Den Quelltext als Erzählung aufbauen
In den meisten Sprachen lassen sich diese Prinzipien anwenden, indem man die
Kommentare richtig nutzt und das Programm geschickt struckturiert, ohne ein
Programm zu gebrauchen welches aus dem Ursprungstext erst richtigen Quellcode
erzeugt. Bei Sprachen, welche nicht flexibel genug in Bezug auf die
Struckturierung oder ihre Kommentare sind, sollte man ohnehin überdenken, ob
man nicht lieber eine andere Sprache nutzen will.

Will man einige übergeordnete Konzepte oder zum Quelltext verschiedene
Betrachtungsweisen (z.B. wenn man mehrere Erzählstränge paralell führt um einen
bestimmten Aspeckt einer Architektur besonders heraus zu stellen) erklären kann
man ein markdown-Dokument (oder welche Auszeichnungssprache man nutzen möchte)
erstellen, in welchem Verweise auf den Quelltext eingefügt sind. Oft ist der
Text nur dann verständlich, wenn man die Quelltexte sofort lesen kann und nicht
erst ein weiteres Dokument öffnen muss. Daher sollte man für Dokumente dieser
Art immer ein script oder ein tool haben, welches überprüft, ob die
referenzierte Stelle mit dem Text im Dokument übereinstimmt und ansonsten eine
Fehlermeldung ausgibt.

### Einfache Markupsprachen in Kommentaren verwenden
Die Kommentare sollten in einem normalen Editor gut lesbar sein. Daher sollten
keine Sprachen wie Tex oder html in den Kommentaren verwendet werden, sondern
Markup-Sprachen wie asciidoc, markdown oder textile. Wenn der eigene Editor
Bilder nicht unmittelbar anzeigt (was bei den meisten Texteditoren der Fall
sein dürfte) sollten alle schematischen Darstellungen als Ascii-Art oder in
einer sich intuitiv erschließenden Darstellungssprache erstellt werden
(Verwendet man einen anderen Editor sollte man sich definitiv als Team darauf
einigen und sich bewusst machen, wie stark man sich dadurch einschränkt).

### Druckausgaben generieren (aber nicht Zwischenquellcode)
Man kann extra Programme nutzen um aus diesem Quelltext dann eine druckbare
Dokumentation zu erstellen. Dabei sollte man darauf achten, dass an Stellen wo
der Quelltext erklärt wird man unmittelbare Verweise auf den *editierbaren*
Quellcode hat. Bei Opensource-Programmen kann man z.B. einen Link auf die
passenden Zeilen in github hinterlegen (dort kann man online editieren). Oder
man könnte mit einem extra Programm (z.B. als Browser Plugin) den Editor der
Wahl des Benutzers an der passenden Zeile öffnen.

### Tests als Dokumentation aufbauen
Viele Unit Test Systeme verfolgen die Idee von
[BDD](https://en.wikipedia.org/wiki/Behavior-driven_development). Dabei wird in
weiten Teilen ohnehin normale, menschliche Sprache verwendet um das gewünschte
Verhalten von Software zu dokumentieren. Man kann diese Unittest auch als
Dokumentation schreiben und (mit den richtigen tools) auch eine Druckausgabe
generieren.
