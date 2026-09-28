const students = [
    { name: "Alice", age: 20, grade: "6", workexperience: 2 },
    { name: "Bob", age: 22, grade: "5", workexperience: 1 },
    { name: "Charlie", age: 19, grade: "4", workexperience: 0 },
    { name: "David", age: 21, grade: "5", workexperience: 3 },
    { name: "Eve", age: 23, grade: "6", workexperience: 4 },
    { name: "Frank", age: 20, grade: "3", workexperience: 1 },
    { name: "Grace", age: 22, grade: "2", workexperience: 2 },
    { name: "Hannah", age: 39, grade: "1", workexperience: 5 },
    { name: "Ian", age: 21, grade: "4", workexperience: 1 },
    { name: "Jack", age: 23, grade: "5", workexperience: 3 },
    { name: "Kathy", age: 20, grade: "6", workexperience: 4 },
    { name: "Liam", age: 22, grade: "3", workexperience: 2 },
    { name: "Mia", age: 19, grade: "2", workexperience: 1 },
    { name: "Noah", age: 21, grade: "1", workexperience: 0 },
    { name: "Olivia", age: 23, grade: "4", workexperience: 3 },
    { name: "Paul", age: 40, grade: "5", workexperience: 10 },
    { name: "Quinn", age: 22, grade: "6", workexperience: 0 },
    { name: "Ryan", age: 19, grade: "3", workexperience: 0 },
    { name: "Sophia", age: 21, grade: "2", workexperience: 0 },
    { name: "Tyler", age: 23, grade: "1", workexperience: 0 }
];

const grades = [
    { letter: "A", score: 6 },
    { letter: "B", score: 5 },
    { letter: "C", score: 4 },
    { letter: "D", score: 3 },
    { letter: "E", score: 2 },
    { letter: "F", score: 1}
]

//ANTALL STUDENTER
document.getElementById("studentCount").innerHTML = students.length


//GJENNOMSNITTSKARAKTER
const total = 6 + 5 + 4 + 5 + 6 + 3 + 2 + 1 + 4 + 5 + 6 + 3 + 2 + 1 + 4 + 5 + 6 + 3 + 2 + 1 
const gradeAverageNumber = total / students.length
const averageRounded = Math.round(gradeAverageNumber)

//ønsker å finne indexen til objektet som inneholder verdien som tilsvarer averageRounded, finner ikke ut av dette :( Så skr
document.getElementById("averageGrade").innerHTML = grades[3].letter

console.log("Number of Students:", students.length)
console.log("Average grade after Rounding:", averageRounded)


//ANTALL PER KARAKTER
const countA = students.filter(
    (g) => g.grade === "6"
)
document.getElementById("gradeA").innerHTML = countA.length

const countB = students.filter(
    (g) => g.grade === "5"
)
document.getElementById("gradeB").innerHTML = countB.length

const countC = students.filter(
    (g) => g.grade === "4"
)
document.getElementById("gradeC").innerHTML = countC.length

const countD = students.filter(
    (g) => g.grade === "3"
)
document.getElementById("gradeD").innerHTML = countD.length

const countE = students.filter(
    (g) => g.grade === "2"
)
document.getElementById("gradeE").innerHTML = countE.length

const countF = students.filter(
    (g) => g.grade === "1"
)
document.getElementById("gradeF").innerHTML = countF.length


//GJENNOMSNITTSALDER
let sum = 0
for(var i = 0; i < students.length; i++) {
    sum += students[i].age
}
let averageAge = sum / students.length
document.getElementById("averageAge").innerHTML = averageAge

//STUDENTER FRA VGS
const vgs = students.filter(hs => hs.age === 19)
document.getElementById("highSchool").innerHTML = vgs.length

//YRKESERFARING
const work = students.filter(w => w.workexperience >= 1)
document.getElementById("workExperience").innerHTML = work.length