class Randomic{

    basic(min, max, inclusive=false){

        return Math.floor(Math.random() * (max - min + (inclusive ? 1 : 0)) ) + min;
    }

    choice(collection,t=1,repeat=true){

        if(t < 2){
            return collection[this.basic(0,collection.length)]
        }
        if (t >= 2 && repeat){
            let list = []
            for (let i = 0;i<t;i++){
                list.push(collection[this.basic(0,collection.length)])
            }
            return list
        }
        if (t >= 2 && !(repeat)  && collection.length >= t){
            let list = []
            while(list.length < t){
                let item = collection[this.basic(0,collection.length)]
                list.indexOf(item) == -1 ? list.push(item) : list.length
            }
            return list
        }else{
            return console.log('A tidade de resultados é maior do que o tamanho da sua coleção.','Nessas condições o "repeat == false", gera um loop infinito')
        }
    }

    choices(collection,weight,t=1,repeat=true){

        if(collection.length === weight.length){


            let list = []
                weight.map(function(item,index){
                        for(let i =0; i < item;i++){
                            list.push(collection[index])
                        }
                    })


            if(t < 2){

                return list[this.basic(0,list.length)]
            }
            if(t >= 2 && repeat){


                return this.choice(list,t)

            }if((t >= 2 && !(repeat))  && collection.length >= t){

                return this.choice(list,t,false)
            }else{
                return console.log('A tidade de resultados é maior do que o tamanho da sua coleção.','Nessas condições o "repeat == false", gera um loop infinito')
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
export {Randomic}
