$(document).ready(starter);

function starter() {
  $('#submitButton').on('click', collector);
}
function collector() {
  //event.preventDefault();
  let inputTotal = [];
  console.log('in collector');
  let lastName = $('#lname').val();
  let firstName = $('#fname').val();
  let employeeID = $('#idNum').val();
  let jobTitle = $('#jobTitle').val();
  let annualSal = $('#anSal').val();

  const inputField = {
    // creating object for input.val() to be stored in
    firstName: firstName,
    lastName: lastName,
    employeeID: employeeID,
    jobTitle: jobTitle,
    annualSal: Number(annualSal),
  };

  inputTotal.push(inputField); // push the object outline into inputTotal
  //used newCar for reference
  //const newCarObject = {
  //creating format for info to go so it's organized
  //year: yearInput,
  //make: makeInput,
  //model: modelInput,
  //price: priceInput,
  //};
  //garage.push(newCarObject);

  //Obj.arrayOne.push(arraynew
  //let inputTotal = [
  //$('#fname').val() +
  //$('#lname').val() +
  //$('#jobTitle').val() +
  //$('#anSal').val(),
  //];
  //inputField.lastName.push(inputTotal);

  //inputField.firstName.push(fname); no go
  //inputField; // says cannot .push() ugh!!!!
  //if (annualSal !== Number) {
  //alert('Whoops, looking for a number there');
  //} else {
  console.log(inputTotal);
  $('#ul').append(`
  <li>
  first name: ${firstName}
  </li>
  <li>
  Last Name: ${lastName}
  <li>
  Employee ID: ${employeeID}
  </li><li>
  Job Title: ${jobTitle}
  </li><li>
  Annual Salary: ${annualSal}
  </li>
  `);
  //monthlyCost();
  //}
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

function monthlyCost() {
  let totalSalary = [];
  for (i = 0; i < array.length; i++) {
    totalSalary += inputTotal.annualSal;
  }
}
