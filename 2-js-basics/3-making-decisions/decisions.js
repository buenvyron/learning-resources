let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
]
  
let studentsWhoPass = [];
let passCount = 0;

for (let x = 0; allStudents[x] != null; x++) {
  if (allStudents[x] == 'A' || 
      allStudents[x] == 'A-' ||
      allStudents[x] == 'B' ||
      allStudents[x] == 'B-' ||
      allStudents[x] == 'C' || 
      allStudents[x] ==  5 || 
      allStudents[x] ==  4 || 
      allStudents[x] ==  3 ) {
          studentsWhoPass[passCount] = allStudents[x];
          passCount++;
  } else {

  }
  }

console.log(studentsWhoPass);

  

  