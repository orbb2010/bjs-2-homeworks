function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let Student1 = new Student('Pavel', 'male', 31);
let Student2 = new Student('Petr', 'male', 34);
let Student3 = new Student('Olga', 'female', 30);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}


Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {
    this.marks.push(...marks);
  }
}


Student.prototype.getAverage = function () {
  if (!this.hasOwnProperty('marks') || (this.marks.length <= 0)) {
    return 0;
  }
    let sum = this.marks.reduce(((currentSum, currentNumber) => (currentSum + currentNumber)), 0);
    return sum / this.marks.length; 
}


Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}
