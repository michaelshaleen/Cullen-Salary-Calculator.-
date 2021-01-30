console.log('here');
$(document).ready(collector);
let employeeInfo = {
  employeeFirstName: '',
  lastName: '',
  idNumber: Number(''),
  jobTitle: '',
  annualSalary: Number(''),
};
let inputField = {
  firstName: '',
  lastName: '',
  idNum: '',
  jobTitle: '',
  annualSal: '',
};

function collector() {
  let goal = [
    $('#fname').val() +
      $('#lname').val() +
      $('#jobTitle').val() +
      $('#anSal').val(),
  ];

  let lname = $('#lname').val();
  let fname = $('#fname').val();

  //inputField; // says cannot .push() ugh!!!!
  console.log(goal);
  $('#ul').append(`
  <li>
  first name: ${fname} 
  </li>
  <li>
  Last Name: ${lname}`);
  //$('.form');
} //clean up later
//for (const key in user) {
//console.log(`${key}: ${user[key]}`);
//}
//return true;

//let employeeGroup= {
//employeeFirstName: 'Dan',
//lastName: 'Danson',
//idNumber: 4,
//jobTitle: 'Toilet Guy',
//annualSalary: '40,000',
//};
