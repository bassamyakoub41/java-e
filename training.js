//  ex1

//  var age=(12);
//  if (age > 18){
//             console.log("you can vote")
//     } if (age == 18){
//         console.log("you are in")     }else{
//        console.log("sorry");
//    }

//  ex2

// let name= prompt("what is your name");
// if (name ==="john"){
//     console.log("Hello John!")
// }else{
//     console.log('You are not John')
// }

//  ex3 functions

// function Sum(a, b){
//     return a + b ;
// }
// console.log(Sum(2,5))

// ex 4

// function str(ss){
//     let spl=ss.split('')
//     let newARR=[]
//     for(i=0;i<ss.length;i++){
//     newARR.unshift(ss[i])
//     }
//     let final= newARR.join('')
//     console.log(final)
// }
// let ss= ('hello')
// str(ss)

// ex 5 Array

//  let frout=["appel","banana","mango", "lemon",'kiwi'];
//  for(i=0; i<frout.length; i++){
// console.log(frout[i])}

// ex 6 array

// function Averege(ave){
// let sum=0;
// let averg=0;
// for(i=0;i< ave.length; i++){
//     sum=sum+ave[i]
// }
//     averg=sum/ave.length
//     return console.log(averg)
// }
// let ave=[2,6,7,4,3,2]
// Averege(ave)

// ex 7

// function max(array){
//     let max=0
//     for(i=0;i<array.length ; i++){
//         if(max<array[i]){
//             max=array[i]
//         }
//     }
//     return max
// }
// let array=[1,20,14,19,29,69,59]
// max(array)
// console.log(max(array))

// ex 8

// let Words=['this ','is ','my ','project ']
// let string=''
// for(i=0;i<Words.length ; i++){
//     string=string+Words[i]
// } return console.log(string)

// ex 9

// function nam(arr,name){
//     let m=''.trim()
//     for(i=0; i<arr.length ; i++){
//         if(name==arr[i]){
//             m=true
//         }else{
//             m=false
//         }
//     }
//     console.log(m)
// }
// let name='bassam'
// let arr=['ayham','kamal','samer','bassam',]
// nam(arr,name)

// ex 10

// let evNum=[]
// for(let i=0 ; i<=20; i++){
//     if(i%2===0){
//         evNum.push(i)
//     }
// }
// console.log(evNum)

// ex 11 Objects
// let book={
//     author: 'bassam',
//     title:'hello world',
//     year: '2001'
// }
// let data=Object.assign(book);
// console.log(data)

//    ex 12

//  let person={
//      name:'bassam',
//     age:25,
//      gender:'male',
//      full:function(){
//         return this.name + '' + this.age + this.gender;
//      },
// };

//  console.log(full())

//   ex 13 window

// function displayAlert(){
//     window.alert('help');
// }
    //    ex 14  
// function user(){
//     let prompet= window.prompt('what is your name?')
//     return window.alert('hello user!')
// }
// user()

// ex15 

// document.querySelector('#btn').addEventListener('click',function s(){
//     document.querySelector('#content').textContent='oh shit here we go again!';
// }
// )

// ex 16

// document.querySelector('#listbtn').addEventListener('click', function() {
//     var li= document.createElement('li'); 
//     li.textContent= 'new item';
//     document.querySelector('#list').appendChild(li);
// });

// // ex 17
// document.querySelector('#imgbtn').addEventListener("click",function(){
//     var img= document.querySelector('#imgs').src = 'paris.jpg';
// })
//  ex 18

// document.getElementById("loginf").addEventListener("submit", function(event){
//     event.preventDefault();
//     var username = document.getElementById("user").value;
//     var password = document.getElementById("pass").value;
//     if(username == "admin" && password == 123456){
//         document.getElementById("message").innerHTML = "Login successful!";
//     } else {
//         document.getElementById("message").innerHTML = "Login failed!";
//     }
//     });


