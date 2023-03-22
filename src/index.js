// Challenge 1: Student Grade Generator (Toy Problem)



function studentGradeGenerator(){

    const score = document.getElementById('grade').value
    const grade = score
    if (grade >= 80  && grade <= 100) {
        alert('Congrats you got an A')
    } else if(grade >= 60 && grade <= 79){
        alert('Congrats you got a B')
    } else if(grade >= 50 && grade <= 59){
        alert('You Got a C')
    } else if(grade >= 40 && grade <= 49){
        alert('You Got a D')
    } else if(grade < 40){
        alert('You  Got an E')
    }
}

// Challenge 2: Speed Detector (Toy Problem)


function speedDetector(points){
    const carSpeed = document.getElementById('speed').value
    const speed = carSpeed
    if(speed < 70){
        alert('OK')
    } else if(speed >= 70){
        points = Math.floor(speed - 70) / 5
        alert(`Demerit Points: ${points}`)
        if(points >= 12){
            alert('License suspended')
        }
    }

}

// Challenge 3:  (Toy Problem)

function taxPayeeCalculator(salary){
    if(salary <= 24000){
        return (salary / 10)
    } else if(salary >= 24001 && salary <= 32,333){
        return (salary / 25)
    } else if(salary > 32,333){
        return (salary / 30)
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
     return (salary / 6)
}

function netSalaryCalculator(){
    const grossSalary = document.getElementById('salary').value
    const salary = grossSalary
    tax =  taxPayeeCalculator(salary);

    nhif = calculatorNHIF(salary);
    nssf = calculatorNSSF(salary);
    netSalary = salary - Math.floor(tax + nhif + nssf)
    netAmmount = netSalary.toLocaleString("en-US")
    alert (`Your net Salary is: ${netAmmount}`)
}


