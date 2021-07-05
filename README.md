# RandomicsJS
## Um pequeno módulo javascript para ajudar a fazer operações aleatórias com listas.

##Uso

~~~
No HTML
<script src="https://cdn.jsdelivr.net/gh/RubensRafael/RandomicsJS@master/randomics-prod-v2.min.js"></script>

No seu Javascript
let rand = new Randomic()
~~~

Ao todo são 5 métodos:

## Basic _(min,max,inclusive=false)_

Retorna um número entre min e max.

__min__ (número): número mínimo

__max__ (número): número máximo

__inclusive__ (bool, default=false): define se inclui o número máximo no sorteio, se true, retorna um número entre min e max, incluindo o máximo.

~~~
rand.basic(1,10) // Pode retornar um número inteiro de 1 a 9. Nunca retornará 10.
rand.basic(1,10,true) // Pode retornar um número inteiro de um a dez. Pode retornar 10.
~~~

## Choice _(collection,t=1,repeat=true)_

Retorna um item (ou mais) sorteado de uma coleção. 

__collection__ (list): fonte de dados a ser sorteada.

__t__ (número, default=1): define quantos resultados serão retornados, ou seja, quantos sorteios serão feitos.

__repeat__ (bool,default=true): define se os itens sorteados poderão ser repetidos no resultado, caso t > 1.

~~~
let lista = ['maçã','banana','melancia','batata','tomate']

rand.choice(lista), // Pode retornar : 'batata'
rand.choice(lista,3), // Pode retornar: ['tomate','banana','tomate']
rand.choice(lista,3,false) // Pode retornar: ['tomate','banana','melancia'] Nunca retonará o array acima.
~~~

_Se t > 1, uma lista é retornada, com os múltiplos resultados. Se não, um item da coleção é retornado._

_t não pode ser maior do que collection.length, se repeat = false._

## Choices _(collection,weight,t=1,repeat=true)_

Retorna um item (ou mais) sorteado de uma coleção. Baseado nas probabilidades passadas.

__collection__ (list): fonte de dados a ser sorteada.

__weight__ (list): Uma lista de números, que representa as chances de cada item ser sorteado respectivamente.

__t__ (número, default=1): define quantos resultados serão retornados, ou seja, quantos sorteios serão feitos.

__repeat__ (bool,default=true): define se os itens sorteados poderão ser repetidos no resultado, caso t > 1.

~~~

let lista = ['Carro','Avião','Barco']

rand.choices(lista,[1,2,1])//'Avião tem 2x mais chances de ser escolhido.'
~~~

_Se t > 1, uma lista é retornada, com os múltiplos resultados. Se não, um item da coleção é retornado._
_O t não pode ser maior do que collection.length, se repeat = false._
_Weight deve ter o mesmo tamanho da coleção.

## Probs _(collection)_

Retorna a chance (em um número decimal) de cada elemento de uma coleção ser sorteado. Analisando repetições.

__collection__ (list): Uma lista a ser analisada.

~~~

let lista = ['Carro','Avião','Avião','Barco']

rand.probs(lista)//Retorna uma lista de listas, com o item e sua chance de ser sorteado: [["Avião", 0.5]["Carro", 0.25]["Barco", 0.25]]
~~~


## Shuflle _(collection)_

Embaralha uma lista. Muda a posição dos elementos aleatoriamente.

__collection__ (lista): Lista a ser embaralhada.

~~~
let lista = ['maçã','banana','melancia','batata','tomate','Carro','Avião','Avião','Barco']


rand.shuflle(lista) // Pode retornar ["batata", "Carro", "Avião", "maçã", "banana", "Avião", "melancia", "Barco", "tomate"]
~~~


Fique à vontade em colaborar com sugestões ou correção de erros. ;)













