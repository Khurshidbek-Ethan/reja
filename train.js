console.log("master")
// A Task

function main(a,b){
    let number =0
    for (let i=0; i<b.length;i++){
        if(b[i]===a){
          number++ ;
        }
    }
    return number
}
let result = main("a","MarhamatTumani")
console.log(result)





//////////////////////////////////////////////////////////////////////////////////////////////////
//
//     22-ASYNchronous-  2 chi qismi ASYNC bn Await ni korish
//
// console.log('Jack Ma maslahatlari');
// const list = [
// "yaxshi talaba boling", // 0 - 20
// "togri boshliq tanlang va koproq hoto qiling", // 20 - 30
// "uzingizni ishlaringizni boshlang", // 30 - 40
// "siz kuchli bolgan narsalarni qiling", // 40 - 50
// "yoshlarga investitsiya qiling", // 50 - 60
// "endi dam oling, foydasi yoq endi",  // 60
// ];

//  async function maslahatBering(a){
// if(typeof a!=="number") throw new Eror("insert a number");
// else if (a<=20) return list[0];
// else if (a>=20 && a<=30) return list[1];
// else if (a>=20 && a<=30) return list[2];
// else if (a>=20 && a<=30) return list[3];
// else if (a>=20 && a<=30) return list[4];

// else {
//     return new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     resolve (list[5]);
// },5000);
//     }); 
// }
// }

// // async/await
// async function run() {
// let javob = await maslahatBering(20);
// console.log(javob);
// javob = await maslahatBering(70)
// console.log(javob);
// javob = await maslahatBering(41)
// console.log(javob);
// }
// run();



////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //  22-ASYNchronous-  2 chi qismi 20dan keyn 30 dan keyin 40 sorash jarayonni 
// // bizga noqulay bolgan xolat qismi

// console.log('Jack Ma maslahatlari');
// const list = [
// "yaxshi talaba boling", // 0 - 20
// "togri boshliq tanlang va koproq hoto qiling", // 20 - 30
// "uzingizni ishlaringizni boshlang", // 30 - 40
// "siz kuchli bolgan narsalarni qiling", // 40 - 50
// "yoshlarga investitsiya qiling", // 50 - 60
// "endi dam oling, foydasi yoq endi",  // 60
// ];

//  async function maslahatBering(a){
// if(typeof a!=="number") throw new Eror("insert a number");
// else if (a<=20) return list[0];
// else if (a>=20 && a<=30) return list[1];
// else if (a>=20 && a<=30) return list[2];
// else if (a>=20 && a<=30) return list[3];
// else if (a>=20 && a<=30) return list[4];

// else {
//     callback(null,list[5]);

//     // setTimeout(function () {
//     //     callback(null,list[5]);
//     // },5000);
   
// }
// }

// console.log('passed here 0');
// maslahatBering(20)
// .then ((data) => {maslahatBering(30)
//     .then ((data) => {maslahatBering(40)
//         .then ((data) => {maslahatBering(50)
//             .then ((data) => {
//             console.log("javob",data);
//             })
//             .catch((err)=>{
//                 console.log("ERROR:",err);
//             });
            
//         console.log("javob",data);
//         })
//         .catch((err)=>{
//             console.log("ERROR:",err);
//         });
        
//     console.log("javob",data);
//     })
//     .catch((err)=>{
//         console.log("ERROR:",err);
//     });
    
// console.log("javob",data);
// })
// .catch((err)=>{
//     console.log("ERROR:",err);
// });

// console.log('passed here 1');




////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  22-ASYNchronous- 1 chi qismi
//
// console.log('Jack Ma maslahatlari');
// const list = [
// "yaxshi talaba boling", // 0 - 20
// "togri boshliq tanlang va koproq hoto qiling", // 20 - 30
// "uzingizni ishlaringizni boshlang", // 30 - 40
// "siz kuchli bolgan narsalarni qiling", // 40 - 50
// "yoshlarga investitsiya qiling", // 50 - 60
// "endi dam oling, foydasi yoq endi",  // 60
// ];

//  async function maslahatBering(a){
// if(typeof a!=="number") throw new Eror("insert a number");
// else if (a<=20) return list[0];
// else if (a>=20 && a<=30) return list[1];
// else if (a>=20 && a<=30) return list[2];
// else if (a>=20 && a<=30) return list[3];
// else if (a>=20 && a<=30) return list[4];

// else {
//     callback(null,list[5]);

//     // setTimeout(function () {
//     //     callback(null,list[5]);
//     // },5000);
   
// }
// }

// console.log('passed here 0');
// maslahatBering(20)
// .then ((data) => {
// console.log("javob",data);
// })
// .catch((err)=>{
//     console.log("ERROR:",err);
// });

// console.log('passed here 1');

///////////////////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////
// 21 - video darslik, Node.Js event Loop va Callback functionlarni organamoz.
// 1- qism
// console.log('Jack Ma maslahatlari');
// const list = [
// "yaxshi talaba boling", // 0 - 20
// "togri boshliq tanlang va koproq hoto qiling", // 20 - 30
// "uzingizni ishlaringizni boshlang", // 30 - 40
// "siz kuchli bolgan narsalarni qiling", // 40 - 50
// "yoshlarga investitsiya qiling", // 50 - 60
// "endi dam oling, foydasi yoq endi",  // 60
// ];

// function maslahatBering(a,callback){
// if(typeof a!=="number") callback("insert a number",null);
// else if (a<=20) callback(null,list[0]);
// else if (a>=20 && a<=30) callback(null,list[1]);
// else if (a>=30 && a<=40) callback(null,list[2]);
// else if (a>=40 && a<=50) callback(null,list[3]);
// else if (a>=50 && a<=60) callback(null,list[4]);
// else {
//     setTimeout(function () {
//         callback(null,list[5]);
//     },5000);
   
// }
// }

// console.log('passed here 0');
// maslahatBering(70,(err,data)=>{
//     if (err)console.log("EROR",err);
//     console.log("javob:",data);
// });
// console.log('passed here 1');

//////////////////////////////////////////////////////////////////////////////////////////
// 
// 21 - video darslik, Node.Js event Loop va Callback functionlarni organamoz.
//2- qism
//setInterval bn korib chiqish 
// console.log('Jack Ma maslahatlari');
// const list = [
// "yaxshi talaba boling", // 0 - 20
// "togri boshliq tanlang va koproq hoto qiling", // 20 - 30
// "uzingizni ishlaringizni boshlang", // 30 - 40
// "siz kuchli bolgan narsalarni qiling", // 40 - 50
// "yoshlarga investitsiya qiling", // 50 - 60
// "endi dam oling, foydasi yoq endi",  // 60
// ];

// function maslahatBering(a,callback){
// if(typeof a!=="number") callback("insert a number",null);
// else if (a<=20) callback(null,list[0]);
// else if (a>=20 && a<=30) callback(null,list[1]);
// else if (a>=30 && a<=40) callback(null,list[2]);
// else if (a>=40 && a<=50) callback(null,list[3]);
// else if (a>=50 && a<=60) callback(null,list[4]);
// else {
//     setInterval(function () {
//         callback(null,list[5]);
//     },1000);
   
// }
// }

// console.log('passed here 0');
// maslahatBering(70,(err,data)=>{
//     if (err)console.log("EROR",err);
//     console.log("javob:",data);
// });
// console.log('passed here 1');



