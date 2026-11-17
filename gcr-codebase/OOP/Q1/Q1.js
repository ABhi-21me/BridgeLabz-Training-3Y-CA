class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
  }

  getGrade() {
    let avg = this.calculateAverage();

    if (avg >= 80) return "A";
    if (avg >= 60) return "B";
    if (avg >= 40) return "C";
    return "F";
  }
}

let students = [
  new Student("Aman", [85, 90, 78]),
  new Student("Riya", [65, 70, 60]),
  new Student("Karan", [30, 45, 35])
];

students.forEach(student => {
  console.log(student.name, student.calculateAverage(), student.getGrade());
});
