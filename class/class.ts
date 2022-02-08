// class User {
//     name: string;
//     age: number;
//     status: boolean;
//
//     constructor(name: string, age: number, status: boolean) {
//         this.name = name;
//         this.status = status;
//         this.age = age;
//     }
// }
// const user = new User('Kokod', 33, true)

//Private
// class User {
//     private name: string;
//     private age: number;
//     private status: boolean;
//
//     constructor(name: string, age: number, status: boolean) {
//         this.name = name;
//         this.status = status;
//         this.age = age;
//     }
//     getName():string{
//         return this.name
//     }
// }
// const user = new User('Kokod', 33, true)
// console.log(user.getName())

//Protect
// class User {
//     constructor(private name: string, private age: number, private status: boolean) {
//     }
//    protected getName():string{
//         return this.name
//     }
// }
// const user = new User('Kokod', 33, true)

// class UserChild extends User{
//
//     constructor(name: string, age: number, status: boolean){
//         super(name,age,status);
//     }
//     getParentName():string{
//         return this.name
//     }
//     protected getName():string{
//         return super.getName();
//     }
// }
// const userChild = new UserChild('Kokod', 33, true)
// userChild.getParentName()

//
// class User {
//     constructor(private name: string, private age: number, private status: boolean) {
//     }
//
// }
// const userObj:User = {name:'freda',age:15,status:true}

import {IShepesActionInterface} from "../interface/shepesAction.interface";

class Rectangle implements IShepesActionInterface{
    constructor(private a:number,private b:number) {
    }

    area(): number {
        return this.a*this.b;
    }

    perimeter(): number {
        return this.a+this.b;
    }
}
class Triangle implements IShepesActionInterface{
    area(): number {
        return this.a*this.b*this.c;
    }

    perimeter(): number {
        return this.a+this.b+this.c;;
    }
    constructor(private a:number,private b:number,private c:number) {
    }
}
const shapes:IShepesActionInterface[]=[new Rectangle(1,2),new Triangle(1,2,3)]
for (let shape of shapes) {
    console.log(shape.constructor['name'],"Area",shape.area());
    console.log(shape.constructor['name'],"Area",shape.perimeter());
}