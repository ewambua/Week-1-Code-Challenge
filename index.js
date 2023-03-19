// Challenge 1: Student Grade Generator (Toy Problem)
let grade = 90

function studentGradeGenerator(grade){
    if (grade >= 80  && grade <= 100) {
        return 'Congrats you got an A'
    } else if(grade >= 60 && grade <= 79){
        return 'Congrats you got a B'
    } else if(grade >= 50 && grade <= 59){
        return 'You Got a C'
    } else if(grade >= 40 && grade <= 49){
        return 'You Got a D'
    } else if(grade < 40){
        return 'E'
    }
}

// Challenge 2: Speed Detector (Toy Problem)
let speed = 80

function speedDetector(speed, points){
    if(speed < 70){
        return 'OK'
    } else if(speed >= 70){
        points = Math.floor(speed - 70) / 5
        
        if(points >= 12){
            return 'License suspended'
        }
    }
  return `Points: ${points}`
}

// Challenge 3: Net Salary Calculator (Toy Problem)

function taxPayeeCalculator(salary){
    if(salary <= 24000){
        return (salary * 0.10)
    } else if(salary >= 24001 && salary <= 32,333){
        return (salary * 0.25)
    } else if(salary > 32,333){
        return (salary * 0.30)
    }
}
let nhifAmmount = 0
function calculatorNHIF(salary){
    if (salary >= 1000 && salary <= 5999) {
        return nhifAmmount += 150
    } else if (salary >= 6000 && salary <= 7999) {
        return nhifAmmount += 300;
    } else if (salary >= 8000 && salary <= 11999) {
        return nhifAmmount += 400;
    } else if (salary >= 12000 && salary <= 14999) {
        return nhifAmmount += 500;
    } else if (salary >= 15000 && salary <= 19999) {
        return nhifAmmount += 600;
    } else if (salary >= 20000 && salary <= 24999) {
        return nhifAmmount += 750;
    } else if (salary >= 25000 && salary <= 29999) {
        return nhifAmmount += 850;
    } else if (salary >= 30000 && salary <= 34999) {
        return nhifAmmount += 900;
    } else if (salary >= 35000 && salary <= 39999) {
        return nhifAmmount += 950;
    } else if (salary >= 40000 && salary <= 44999) {
        return nhifAmmount += 1000;
    } else if (salary >= 45000 && salary <= 49999) {
        return nhifAmmount += 1000;
    } else if (salary >= 50000 && salary <= 59999) {
        return nhifAmmount += 1200;
    } else if (salary >= 60000 && salary <= 69999) {
        return nhifAmmount += 1300;
    } else if (salary >= 70000 && salary <= 79999) {
        return nhifAmmount += 1400;
    } else if (salary >= 80000 && salary <= 89999) {
        return nhifAmmount += 1500;
    } else if (salary >= 90000 && salary <= 99999) {
        return nhifAmmount += 1600;
    } else if (salary >= 100000) {
        return nhifAmmount += 1700;
    }
   return nhifAmmount
}

function calculatorNSSF(salary){
     return (salary * 0.06)
}

function netSalaryCalculator(salary){
    tax =  taxPayeeCalculator(salary);
    
    nhif = calculatorNHIF(salary);
    nssf = calculatorNSSF(salary);
    netSalary = salary - (tax + nhif + nssf)
      
    return netSalary
}  

console.log(netSalaryCalculator(24000))
