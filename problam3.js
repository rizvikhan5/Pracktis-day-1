// 1---3.1
const number = (num1,num2 = 5) => num1 / num2
const divition = number(50)
console.log(divition)

// 2---3.2
const age = (age1, age2) => {
    const number1 = age1 + 2
    const number2 = age2 + 2 
    const total = number1 * number2
    return total
}

const ageTotal = age(15,17)
console.log(ageTotal)

// 3---3.3
const price = (price1,price2,price3) => {
    const total = price1 * price2 * price3
    return total
}

const sumOf = price(5,6,7)
console.log(sumOf)
// 3---3.4

// 5
const number2 = [20,22,25,30,35,40,50,]

const numberOf = number2.map(number2 => number2 * 5  ) 
console.log(numberOf)

// 6
const ages = [15,17,22,25,30,35,40,43,47,50]
const odd = ages.filter(ages => ages % 2 === 1)
console.log(odd)

// 7

const qualification = [
    {id:1,name:'Koli Mulla',age:30,income:30000},
    {id:1,name:'Soli Mulla',age:30,income:40000},
    {id:1,name:'Toli Mulla',age:30,income:50000},
    {id:1,name:'Doli Mulla',age:30,income:60000},
    {id:1,name:'Abu Mulla',age:30,income:70000},
]

const search = qualification.find( qualification => qualification.income === 50000)
console.log(search)
// 8

const bioData = {
    name: 'Rizvi',
    fathersName:'Alam Khan Rony',
    hight:5.5,
   
}
const {fathersName} = bioData;
console.log(fathersName)

// 9

const name2 = {
    first:"Rimi",
    second:'Rizvi',
    third:'Mohuya',
    fourth:'Jihad',
    fifth:'Mim'
}
const {third} = name2
console.log(third)

// 10
const variousTypeOfBradPrice  = (brad1, brad2,brad3 = 7) =>{
    const totalCost = brad1 + brad2 + brad3 ;
    return totalCost
}
const sum = variousTypeOfBradPrice(5,10)
console.log(sum)

// 11
const studentBoi = {
    name:'Salim',
    class:7,
    fathersName: 'Aku Mulla',
    mothersName: 'Komola Banu',
    address:[
       { building:4,
        roda:'A3',
        side:'Center'}
    ]
        
    }
console.log(studentBoi.address[0].side)  
