import {generateData, getRandomInt} from "./index";

export interface Supplier{
    name:string,
    phone:string,
    address: string,
    details: string
}

export const supplier:Supplier = {
    name:'Supplier - '+getRandomInt(100)+'-'+getRandomInt(100),
    phone:'07509'+getRandomInt(10)+'1'+getRandomInt(10)+'0'+getRandomInt(10),
    address: 'Address - '+generateData(),
    details: generateData()
}

export const generatesSuppliers = (max:number):[Supplier] => {
    let _suppliers: [Supplier];
    // @ts-ignore
    _suppliers = [];
    for(let i:number =0; i < max; i++){
        let _supplier = supplier
        _suppliers.push(_supplier)
    }
    return _suppliers
}