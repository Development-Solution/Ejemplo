class Etl{

    constructor(filename){
        this.filename = filename;
    };

    #fileExists(){
        const fs = require('fs')
        const path = `./src/data/${this.filename}.json`;
        if (fs.existsSync(path)) {
            return true;
        } else {
            return false;
        }
    };

    #read(){
        const path = `./data/${this.filename}.json`;
        if(this.#fileExists()){
            const json_object = require(path);
            return json_object;
        } else {
            const json_object = [];
            return json_object;
        }
    };

    #modifyByName(json_object, arr){
        const id = json_object.findIndex(obj => obj.nombre.toLowerCase() === arr.nombre.toLowerCase());
        json_object[id] = arr;
        return json_object;
    };

    #itemExists(json_object, name, column_name){
        const items_already_defined = json_object.some(obj => obj[column_name].toLowerCase() === name.toLowerCase());
        if(items_already_defined){
            throw new Error('Ya se ha agregado este producto! Intente mejor modificarlo');
        };
    };

    #add(json_object, arr){
        json_object.push(arr);
        return json_object;
    };

    #load(json_object){
        
        const jsonFile = JSON.stringify(json_object);
        const path = `./src/data/${this.filename}.json`;
        const fs = require('fs');
        
        fs.writeFile(path, jsonFile, err => {
            if (err) {
                console.log('Error agregando el arreglo al JSON', err);
            } else {
                console.log('Archivo agregado exitosamente');
            };
        });
    };

    #leftJoin(arr1, arr2){
        const arr = arr1.map(obj1 => {
            let filtered_arr = arr2.filter(obj2 => obj1.nombre.toLowerCase() === obj2.nombre.toLowerCase())[0]
            filtered_arr.stock = Math.min(obj1.stock, filtered_arr.stock)

            return filtered_arr;
        });

        return arr;
    };

    add(arr, ind, column_name){
        const json_object = this.#read();
        this.#itemExists(json_object, ind, column_name);
        const new_json_object = this.#add(json_object, arr);
        this.#load(new_json_object);
    };

    modify(arr){
        const json_object = this.#read();
        const new_json_object = this.#modifyByName(json_object, arr);
        this.#load(new_json_object);
    };

    add_units(name, units){
        let json_object = this.#read();
        
        const id = json_object.findIndex(obj => obj.nombre.toLowerCase() === name.toLowerCase());
        json_object[id].stock += units;

        this.#load(json_object);
    };

    select(arr){
        const json_object = this.#read();
        
        let joined_json = this.#leftJoin(arr, json_object)
        joined_json = joined_json.filter(obj => obj.stock > 0);

        return joined_json;
    };

    finish(arr){
        const names = arr.map(obj => obj.nombre);
        const total = arr.reduce((accumulator, obj) => {return accumulator + obj.price*obj.stock;}, 0);
        const id = Math.round(Math.random()*100000000).toString();
        const date = new Date().toISOString().slice(0, 10);
        const result = {'items': names, 'valor':total, 'id':id, 'fecha':date};

        return result;
    };

    pay(arr){
        for(var i=0; i<arr.length; i++){
            this.add_units(arr[i].nombre, -arr[i].stock);
        };
    };

    show(only_available){
        const json_object = this.#read();
        if(only_available){
            const filtered_json_object = json_object.filter(obj => obj.stock > 0);
            return filtered_json_object;
        }else{
            return json_object;
        };
    };
};

module.exports = { Etl }