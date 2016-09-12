# Blocks

## Préambule
Il existe tellement de projets libres issus de Québécois et de Québécoises.
Déjà 15 ans à patauger dans les communautés du libre du Québec et
je découvre encore chaque jour une nouvelle codeuse [*1][] ou un nouveau logiciel.

Je profite donc de l'approche de la
[Semaine québécoise de l'informatique libre 2016][SQIL] pour rédiger
une [série d'articles](.) à propos de ces découvertes.

## Blocks
* [Blocks][]
* [Blocks and fuel paper][]

### Traductions non validées
Blocks is a framework that helps you build neural network models on top of Theano. Currently it supports and provides:

* Constructing parametrized Theano operations, called "bricks"
* Pattern matching to select variables and bricks in large models
* Algorithms to optimize your model
* Saving and resuming of training
* Monitoring and analyzing values during training progress (on the training set as well as on test sets)
* Application of graph transformations, such as dropout

------

Blocks est un cadre qui vous aide à construire des modèles de réseaux neuronaux sur le dessus de Théano. Actuellement, il prend en charge et fournit:

* Construire des opérations paramétrées Theano, appelées "briques"
* Le filtrage pour sélectionner des variables et des briques dans les grands modèles
* Algorithmes pour optimiser votre modèle
* Sauvegarde et reprise de la formation
* Suivi et analyse des valeurs en cours de formation (sur la formation prévue, ainsi que sur les ensembles de test)
* Application de transformations de graphes, tels que le décrochage

## Fuel

### Traductions non validées

Fuel provides your machine learning models with the data they need to learn.

    Interfaces to common datasets such as MNIST, CIFAR-10 (image datasets), Google's One Billion Words (text), and many more
    The ability to iterate over your data in a variety of ways, such as in minibatches with shuffled/sequential examples
    A pipeline of preprocessors that allow you to edit your data on-the-fly, for example by adding noise, extracting n-grams from sentences, extracting patches from images, etc.
    Ensure that the entire pipeline is serializable with pickle; this is a requirement for being able to checkpoint and resume long-running experiments. For this, we rely heavily on the picklable_itertools library.

Fuel is developed primarily for use by Blocks, a Theano toolkit that helps you train neural networks.

------

Fuel fournit vos modèles d'apprentissage de la machine avec les données dont ils ont besoin pour apprendre.

     Interfaces à des ensembles de données communes telles que MNIST, ICRA-10 (ensembles de données d'image), un milliard de mots de Google (texte), et beaucoup d'autres
     La possibilité de parcourir vos données dans une variété de façons, comme en minibatches avec mélangées / exemples séquentiels
     Un pipeline de préprocesseurs qui vous permettent d'éditer vos données à la volée, par exemple en ajoutant du bruit, l'extraction de n-grammes de phrases, extraire les correctifs à partir d'images, etc.
     Assurez-vous que l'ensemble du pipeline est serializable avec cornichon; ceci est une exigence pour être en mesure de point de contrôle et de reprendre des expériences de longue durée. Pour cela, nous comptons beaucoup sur la bibliothèque de picklable_itertools.

Le carburant est développé principalement pour une utilisation par blocs, une boîte à outils Théano qui vous aide à former des réseaux de neurones.


### Motivation

*Fuel was originally factored out of the Blocks framework in the hope of being useful to other frameworks such as Pylearn2 as well. It shares similarities with the skdata package, but with a much heavier focus on data iteration and processing.*

**Carburant a été pris en compte sur le cadre des blocs dans l'espoir d'être utile à d'autres cadres tels que Pylearn2 ainsi. Il partage des similitudes avec le paquet skdata, mais avec un accent beaucoup plus lourd sur l'itération et le traitement des données.**

### IVADO
[ivado][] L'institut de valorisation des données, pole scientifique et économique


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
[mila-udem]: <https://github.com/mila-udem>
[Blocks]: <https://github.com/mila-udem/blocks>
[kastnerkyle]: <https://github.com/kastnerkyle>
[kastnerkyle/Blocks]: <https://github.com/kastnerkyle/blocks>
[Blocks and fuel paper]: <http://arxiv.org/abs/1506.00619>
[mila]: <https://mila.umontreal.ca/>
[mila-en]: <https://mila.umontreal.ca/en/>
[mila-summerschool2016]: <https://github.com/mila-udem/summerschool2016>
[Alex Wiltschko]: <https://github.com/alexbw>
[Frédéric Bastien]: <https://github.com/nouiz>
[Pascal Lamblin]: <https://github.com/lamblin>
[Laboratoire d'Informatique des Systèmes Adaptatifs]: <https://github.com/lisa-lab>
[ivado]: <http://ivado.ca/>