console.log('here');
$(document).ready(collector);
let employeeInfo = {
  employeeFirstName: '',
  lastName: '',
  idNumber: Number(''),
  jobTitle: '',
  annualSalary: Number(''),
};

function collector() {
  let inputField = [
    $('#fname').val() +
      $('#lname').val() +
      $('#idNum').val() +
      $('#jobTitle').val() +
      $('#anSal').val(),
  ];
  $('#ul').append(`
  <li>
  info
  </li> 
  console.log('yo');
  //$('.form');
}
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
