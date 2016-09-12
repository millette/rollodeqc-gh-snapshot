# Theano

## Préambule
Il existe tellement de projets libres issus de Québécois et de Québécoises.
Déjà 15 ans à patauger dans les communautés du libre du Québec et
je découvre encore chaque jour une nouvelle codeuse [*1][] ou un nouveau logiciel.

Je profite donc de l'approche de la
[Semaine québécoise de l'informatique libre 2016][SQIL] pour rédiger
une [série d'articles](.) à propos de ces découvertes.

## Theano
Theano est une bibliothèque Python qui vous permet de définir,
d'optimiser, et d'évaluer des expressions mathématiques impliquant
des tableaux multi-dimensionnels. C'est une bibliothèque qui est
fréquemment utilisée dans le domaine de l'apprentissage machine.

### Utilisation
Theano est une application qui a la particularité de faire de la
compilation en temps réel. Comme la compilation de code est une opération
qui est très mal adaptée à un système de fichiers parallèle comme ceux
qui sont disponibles sur Helios et plusieurs autres serveurs de calcul,
il est important de prendre quelques précautions afin d'accélérer
ce processus et d'éviter de surcharger le système de fichiers.

**Source**: [Wiki Calcul Québec][cq:Theano]

### Le développement
* Université de Montréal
* L’institut des algorithmes d’apprentissage de Montréal
(Montreal Institute for Learning Algorithms ou MILA)
* deeplearning.net

### Traductions automatiques (nos vérifiées)
*Theano is a Python library that allows you to define, optimize, and evaluate mathematical expressions involving multi-dimensional arrays efficiently. It can use GPUs and perform efficient symbolic differentiation.*

**Théano est une bibliothèque Python qui vous permet de définir, d'optimiser et d'évaluer des expressions mathématiques impliquant des tableaux multi-dimensionnels efficacement. Il peut utiliser les GPU et d'effectuer une différenciation symbolique efficace.**

*Theano has been powering large-scale computationally intensive scientific investigations since 2007. But it is also approachable enough to be used in the classroom (University of Montreal’s deep learning/machine learning classes).*

**Théano a été mis sous tension à grande échelle des études scientifiques de calcul intensif depuis 2007. Mais il est aussi assez abordable pour être utilisé dans la salle de classe (Université de profondes classes d'apprentissage d'apprentissage / Machine de Montréal).**

## License
[CC-BY-SA-4.0][] © 2016 [Robin Millette][]

------

## Notes
### Note 1
À moins de spécifier autrement, j'utiliserai les genres (Québécois/Québécoises)
de façon interchangeable au cours du texte.

[*1]: #note-1
[SQIL]: <http://2016.sqil.info/>
[CC-BY-SA-4.0]: cc-by-sa.md
[Robin Millette]: <http://robin.millette.info/>
[Theano]: <https://github.com/Theano/Theano>
[nouiz]: <https://github.com/nouiz>
[nouiz/Theano]: <https://github.com/nouiz/Theano>
[Calcul Québec]: <http://calculquebec.ca/fr/>
[Calcul Quebec]: <http://calculquebec.ca/en/>
[cq:Theano]: <https://wiki.calculquebec.ca/w/Theano>
[dl:Theano]: <http://deeplearning.net/software/theano/>
[Deep Learning]: <http://deeplearning.net/>
