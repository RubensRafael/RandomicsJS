# RandomicsJS
## Uma pequena biblioteca javascript para ajudar a fazer operações aleatórias com listas.


Ao todo são 5 métodos:

## Basic _(min,max,inclusive=false)_

Retorna um número entre min e max.

__min__ (número): número mínimo

__max__ (número): número máximo

__inclusive__ (bool, default=false): define se inclui o número máximo no sorteio, se true, retorna um número entre min e max, incluindo o máximo.



## Choice _(collection,t=1,repeat=true)_

Retorna um item (ou mais) sorteado de uma coleção. 

__collection__ (list): fonte de dados a ser sorteada.

__t__ (número, default=1): define quantos resultados serão retornados, ou seja, quantos sorteios serão feitos.

__repeat__ (bool,default=true): define se os itens sorteados poderão ser repetidos no resultado, caso t > 1.

_Se t > 1, uma lista é retornada, com os múltiplos resultados. Se não, um item da coleção é retornado._

_t não pode ser maior do que collection.length, se repeat = false._

## Choices _(collection,weight,t=1,repeat=true)_

Retorna um item (ou mais) sorteado de uma coleção. Baseado nas probabilidades passadas.

__collection__ (list): fonte de dados a ser sorteada.

__weight__ (list): Uma lista de números, que representa as chances de cada item ser sorteado respectivamente.

__t__ (número, default=1): define quantos resultados serão retornados, ou seja, quantos sorteios serão feitos.

__repeat__ (bool,default=true): define se os itens sorteados poderão ser repetidos no resultado, caso t > 1.

_Se t > 1, uma lista é retornada, com os múltiplos resultados. Se não, um item da coleção é retornado._
_O t não pode ser maior do que collection.length, se repeat = false._
_Weight deve ter o mesmo tamanho da coleção.

## Probs _(collection)_

Retorna a chance (em um número decimal) de cada elemento de uma coleção ser sorteado.

__collection__ (list): Uma lista a ser analisada.


## Shuflle _(collection)_

Embaralha uma lista. Muda a posição dos elementos aleatoriamente.

__collection__ (lista): Lista a ser embaralhada.
















