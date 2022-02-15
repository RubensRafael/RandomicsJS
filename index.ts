


    export const basic =(min : number, max : number, inclusive=false): number =>{
    	//Retorna um número entre min e max. "inclusive" define se o número máximo também poderá ser sorteado
        return Math.floor(Math.random() * (max - min + (inclusive ? 1 : 0)) ) + min;
    }

    export const choice=(collection : any[] ,responses=1,repeat=true): any | any[] | never =>{
    	//Retorna um item (ou mais) sorteado de uma coleção.
    	// "responses" define quantos resultados serão retornados, ou seja, quantos sorteios serão feitos.
    	// "repeat" define se os itens sorteados poderão ser repetidos no resultado, caso de reponses > 1.
        if(responses < 2){
            return collection[basic(0,collection.length)]
        }
        if (responses >= 2 && repeat){
            let list = []
            for (let i = 0;i<responses;i++){
                list.push(collection[basic(0,collection.length)])
            }
            return list
        }
        if (responses >= 2 && !(repeat) && collection.length >= responses){
            let list = []
            while(list.length < responses){
                let item = collection[basic(0,collection.length)]
                list.indexOf(item) == -1 ? list.push(item) : list.length
            }
            return list
        }else{
            throw Error('The amount of results is greater than the size of your collection. Under these conditions the "repeat == false", generates an infinite loop')
        }
    }

    export const choices=(collection: any[],weight: number[] ,responses=1,repeat=true): any | any[] | never =>{

    	//Retorna um item (ou mais) sorteado de uma coleção. Baseado nas probabilidades passadas.
    	//"weight" é Uma lista de números, que representa as chances de cada item ser sorteado respectivamente.
		//"responses" define quantos resultados serão retornados, ou seja, quantos sorteios serão feitos.
		//"repeat" define se os itens sorteados poderão ser repetidos no resultado, caso de t > 1.
		let list : any[] = []
		//O primeiro passo é multiplicar os itens da lista original,
		//conforme os pesos, se um item tem peso 3, ele será multiplcado 3 vezes.
        if(collection.length === weight.length){
                weight.map(function(item,index){
                        for(let i = 0; i < item;i++){
                            list.push(collection[index])
                        }
                    })
		}else{
            throw Error('The size of the collection and the weights are different!')
        }

           if(responses < 2){
               return list[basic(0,list.length)]
           }
           if(responses >= 2 && repeat){
                return choice(list,responses)
           }if((responses >= 2 && !(repeat))  && collection.length >= responses){
               return choice(list,responses,false)
           }else{
               throw Error('The amount of results is greater than the size of your collection. Under these conditions the "repeat == false", generates an infinite loop')
           }

        

    }

    export const shuflle=(collection: any[]): any[] =>{
    	//Embaralha uma lista. Mudando a posição dos elementos aleatoriamente.
        let list: any[] = JSON.parse(JSON.stringify(collection))
        let lenList = list.length
        let finalList: any[] = []
            while(finalList.length < lenList){
                let item = list.splice(basic(0,list.length),1)[0]
                finalList.push(item)
            }
            return finalList
    }

    export const probs=(collection: any[]): any[] =>{
    	//Retorna a chance (em um número decimal) de cada elemento de uma coleção ser sorteado. Analisando repetições.
        let list : any[] = []
        
        collection.map((item) => list.push([item,0]))
        collection.map(function(item){
        	let uniqueIndex = collection.indexOf(item)
            list[uniqueIndex][1] += 1})

        list.map((item,index) =>
            item[1] > 0 ? item[1] = item[1]/collection.length : list.splice(index,1)
        )
        return list


        }
