// // вказуємо що ретьорнить функція
// const x = (str: string): number | string => {
//     return
// }
// //якщо функція нічого не повертає пишемо void
// const y = (str: string): void => {
//
// }
//
// type User = { name: string, age: number, status: boolean }
//
// // інтерфейсу заведено давати назву з великої літери І при створенні інтерфейсу
// interface IUser {
//     name: string,
//     age: number,
//     status: boolean
// }
//
// const user1: IUser = {name: 'ihor', age: 71, status: false}
// const user0: User = {name: 'Vasil', age: 45, status: true}
//
// // Partial<_>дозволяє писати не всі елементи
// const user2: Partial<User> = {name: 'Oleg'}
// const user3: Partial<IUser> = {age: 55, status: false}
//
// //Дженерики
// // Дозволяють вказати змінну тип якої завчасно не відомий, а вже при створенні вказати тип даних
// // можна створювати безліч дженериків
// //в дженерики можна вставляти інтерфейси
// // any - заміна будь-якого типу, означає що можна писати будь-що
//
// type User1<F> = { name: string, age: number, status: boolean, data: F }
//
// interface IUser1<Y> {
//     name: string,
//     age: number,
//     status: boolean,
//     data: Y
// }
//
// interface IDog {
//     name: string,
//     age: number
// }
//
// const user4: User1<number[]> = {name: 'Vasil', age: 45, status: true, data: [12, 2, 33]}
// const user5: IUser1<string> = {name: 'd', age: 12, status: true, data: 'evdf'}
// const user6: IUser1<IDog> = {name: 'vasia', age: 41, status: false, data: {name: 'rex', age: 5}}
//
//
// //      Класи
// // модифікатори доступу
// // private - змінна доступна тільки в середині класу
// // protected - змінну можемо бачити в середині класу та в класі нащадку
// // public - дозволяє використовувати змінну зовні класу, в нащадку та в середині
//
// class Users {
//     constructor(public name: string, protected age: number, private status: boolean) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//     }
// }
//
// //  Імплементація інтерфейсів
//
// interface IShapeActions {
//     area: () => number
//     perimeter: () => number
// }
//
// interface IGreeting {
//     hello: () => void
// }
//
// class Rectangle implements IShapeActions, IGreeting {
//     constructor(private a: number, private b: number) {
//     }
//
//     area(): number {
//         return this.a * this.b
//     }
//
//     hello(): void {
//         console.log('Hello');
//     }
//
//     perimeter(): number {
//         return this.a * 2 + this.b * 2
//     }
// }
//
// let rectangle = new Rectangle(3, 9);
//
// console.log(rectangle.area());
// console.log(rectangle.perimeter());
// console.log(rectangle.hello);
//
//
// class Triangle implements IShapeActions {
//     constructor(private a: number, private b: number, private c: number) {
//     }
//
//     area(): number {
//         return this.a * this.b * this.c
//     }
//
//     perimeter(): number {
//         return this.a * 2 / this.b
//     }
// }
//
// const shapes:IShapeActions[] = [new Rectangle(5,10), new Triangle(3,6,9)]
//
// for (const shape of shapes) {
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }
//
// // дізнатися тип який повертає функція
//
// const add = ():number => {
//     return 44
// }
//
// type MyFuncType = ReturnType<typeof add>
//
// const a:MyFuncType = 'qwe'  //свариться якщо вводити дані іншого типу ніж number
//
// ///////////////////////////////////////////////////////////////////////////////////////////

import {userService} from "./services";

// userService.getAll().then(value => console.log(value.data[3].address.city))

// userService.getById(2).then(value => console.log(value.data.name))

userService.getById(1).then(({data})=> console.log(data.address.city))