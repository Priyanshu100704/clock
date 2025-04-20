// let time=new Date()
// let year=time.getFullYear()
// let mon=time.getMonth()
// let day=time.getDay()
// let hour=time.getHours()
// let min=time.getMinutes()
// let sec=time.getSeconds()
// console.log(time)
// console.log(mon)
// console.log(day)
// console.log(hour)
// console.log(min)
// console.log(sec)


// let date=new Date()
// let localDate=date.toLocaleDateString()
// let localTime=date.toLocaleTimeString()
// console.log(localDate)
// console.log(localTime)


// let date=new Date()
// let milliSec=date.toLocaleString()
// console.log(milliSec)

// let date=new Date()
// let milliSec=date.getTime()
// console.log(milliSec)

// let date=new Date()
// let time=date.setTime(1745043022930)
// console.log(date)   

// let date=new Date()
// let newDate=date.setTime(1744006494366);
// let finalTime=date+newDate;
// console.log(finalTime)


// let date=new Date()
// console.log(Date.now()) 
// let mill=date.getTime()
// console.log(mill)

// function timeTaken(name) {
//     console.log(`this is my name ${name}`)
// }
// // setTimeout(()=>{
// //     timeTaken("priyanshu")
// // },2000)
// let clearData=setTimeout(timeTaken,2000)
// clearTimeout(clearData)


// function stopFunt() {
//     console.log("This funtion will stop at the very 5th Second...")
// }
// let stopF=setInterval(stopFunt,1000);

// setTimeout(()=>{
//     clearInterval(stopF)
// },5000)

let child=document.querySelector(".child");

const timer=()=>{
    let date=new Date().toLocaleTimeString("en-US",{hour12:true})
     child=document.querySelector(".child").textContent=date
     console.log(date)
}

let interVal= setInterval(timer,1000)
child.addEventListener("",timer)



let stop=document.querySelector(".stop");

const stopIt=()=>{
  
  setTimeout(()=>
  clearInterval(interVal,1000)
)

}

stop.addEventListener("click",stopIt)



let start=document.querySelector(".start");

const startFun=()=>{
    if (interVal){
        interVal=setInterval(timer,1000)
    }
}

start.addEventListener("click",startFun)



let child1=document.querySelector(".child1");

const stopWatch=()=>{
    let stopTime=new Date().toLocaleDateString();
    child1=document.querySelector(".child1").textContent=stopTime;
    console.log(stopWatch)
}

child1.addEventListener("click",stopWatch)