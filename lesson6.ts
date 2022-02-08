// const func = (str: string): number => {
//     return 5
// }
// const func2 = (str: string): number | string => {
//     return (5 | 'dwff')
// }
//
// const func3 = (str: string): void => {
// }
//
// const func4 = (str: string): null => {
//     return null
// }
// const user: {
//     name: string,
//     age: number,
//     status: boolean
// } = {name: 'acsdc', age: 5, status: false}

//
// const user2: {
//     name?: string,
//     age: number,
//     status: boolean
// } = {age: 5, status: false}
// import {IUser} from './interface/user.interface'
//
// const user: IUser = {name: 'acsdc', age: 5, status: false}
//
// const userCounter=(user:IUser):IUser=>{
//     return user
// }
// userCounter({name: 'acsdc', age: 5, status: false})
//
// const usersCounter=(user:Partial<IUser>):Partial<IUser>=>{
//     return user
// }
// usersCounter({name:'dswcf'})


// import {userService} from './service/userService'
//
// userService.getAll().then(value=>value.data).then(users=>{
//     for (let user of users) {
//         console.log(user.name);
//     }
// })