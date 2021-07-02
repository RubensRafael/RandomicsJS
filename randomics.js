class Random{
    
    basic(min, max, inclusive=false){
    
        return Math.floor(Math.random() * (max - min + (inclusive ? 1 : 0)) ) + min;
    }

    choice(collection,quant=0,repeat=true){
        
        if(quant < 2){
            return collection[this.basic(0,collection.length)]
        }
        if (quant >= 2 && repeat){
            let list = []
            for (let i = 0;i<quant;i++){
                list.push(collection[this.basic(0,collection.length)])
            }
            return list
        }
        if (quant >= 2 && !(repeat)  && collection.length >= quant){
            let list = []
            while(list.length < quant){
                let item = collection[this.basic(0,collection.length)]
                list.indexOf(item) == -1 ? list.push(item) : list.length
            }
            return list
        }else{
            return console.log('A quantidade de resultados é maior do que o tamanho da sua coleção.','Nessas condições o "repeat == false", gera um loop infinito')
        }
    }

    choices(collection,weight,quant=0,repeat=true){

        if(collection.length === weight.length){


            let list = []
                weight.map(function(item,index){
                        for(let i =0; i < item;i++){
                            list.push(collection[index])
                        }
                    })


            if(quant < 2){

                return list[this.basic(0,list.length)]
            }
            if(quant >= 2 && repeat){
                

                return this.choice(list,quant)

            }if((quant >= 2 && !(repeat))  && collection.length >= quant){

                return this.choice(list,quant,false)
            }else{
                return console.log('A quantidade de resultados é maior do que o tamanho da sua coleção.','Nessas condições o "repeat == false", gera um loop infinito')
            }
                
        }else{
            return console.log('tamanho da coleção e dos pesos é diferente!')
        }
        
    }

    shuflle(collection){
        let list = collection
        let lenList = list.length
        let finalList = []
            while(finalList.length < lenList){
                
                let item = list.splice(this.basic(0,list.length),1)[0]
                finalList.push(item)
            }
            return finalList
    }

    probs(collection){
        let list = []
        let uniqueIndex
        collection.map((item) => list.push([item,0]))
        collection.map(function(item){
            uniqueIndex = collection.indexOf(item)
            list[uniqueIndex][1] += 1})

        list.map((item,index) => 
            item[1] > 0 ? item[1] = item[1]/collection.length : list.splice(index,1)
        )
        return list


        }
}


