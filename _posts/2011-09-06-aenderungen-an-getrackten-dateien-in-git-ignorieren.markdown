---
layout: post
title: "Änderungen an getrackten Dateien in git ignorieren"
tags:
  - git
---

Manchmal möchte man Dateien nur einmal in git einchecken und sie danach in die
.gitignore-Datei packen. Sie dienen dann als eine Art template, welches jeder
bei sich anpassen kann ohne das diese Änderungen Auswirkungen auf den auf dem
Server gespeicherten Stand haben. Dabei tritt das Problem auf, dass git Dateien
welche einmal in das Repository aufgenommen wurden immer im Index aktualisiert
auch wenn sie in der Ignore-Liste stehen.

Mit dem Befehl

    git update-index --assume-unchanged ${FILE} ...

können die betreffenden Dateien und Ordner ignoriert werden. Dies hat ausserdem
den Vorteil dass der

    git status

Befehl unwichtige Änderungen nicht anzeigt und man sich auf das konzentrieren
kann was wichtig ist. Will man die Datei wieder aufnehmen so führt man den
Befehl

    git update-index --no-assume-unchanged ${FILE} ...

aus um die Dateien nicht länger zu ignorieren.
