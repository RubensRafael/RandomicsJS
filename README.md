# RandomicsJS
## Uma pequena biblioteca javascript para ajudar a fazer operações aleatórias com listas.

basic choice choices shuflle probs
Ao todo são 5 métodos:

## Basic _(min,max,inclusive=false)_

Retorna um número entre min e max.

__min__ (número): número mínimo

__max__ (número): número máximo

__inclusive__ (bool, default=false): define se inclui o número máximo no sorteio, se true, retorna um número entre min e max, incluindo o máximo.



## Choice _(collection,quant=1,repeat=true)_

Retorna um item (ou mais) sorteado de uma coleção. 

__collection__ (list): fonte de dados a ser sorteada.

__quant__ (número, default=1): define quanto resultados serão retornados, ou seja, quantos sorteios serão feitos.

__repeat__ (bool,default=true): define se os itens sorteados poderão ser repetidos no resultado, caso quant > 1.

_Se quant > 1, uma lista é retornada, com os múltiplos resultados. Se não, um item da coleção é retornado._
_quant não pode ser maior do que collection.length, se repeat = false._
