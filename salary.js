$(document).ready(starter);

function starter() {
  $('#submitButton').on('click', collector);
}
let inputTotal = [];
let totalCost = [];

function collector() {
  //event.preventDefault();

  let lastName = $('#lname').val();
  let firstName = $('#fname').val();
  let employeeID = $('#idNum').val();
  let jobTitle = $('#jobTitle').val();
  let annualSal = $('#anSal').val();
  const inputField = {
    // creating object for input.val() to be stored in
    firstName: firstName,
    lastName: lastName,
    employeeID: Number(employeeID),
    jobTitle: jobTitle,
    annualSal: Number(annualSal),
  };
  if (
    //if any fields are empty give alert
    !$('#fname').val() ||
    !$('#lname').val() ||
    !$('#idNum').val() ||
    !$('#jobTitle').val() ||
    !$('#anSal').val()
  ) {
    let clearData = [
      //clear inputs
      $('#fname').val(''),
      $('#lname').val(''),
      $('#idNum').val(''),
      $('#jobTitle').val(''),
      $('#anSal').val(''),
    ];
    alert('you forgot something'); //alert if any field isn't filled
  } else {
    // run when if statement not true

    console.log('in collector');

    let clearData = [
      $('#fname').val(''),
      $('#lname').val(''),
      $('#idNum').val(''),
      $('#jobTitle').val(''),
      $('#anSal').val(''),
    ];
    inputTotal.push(inputField); // push the object outline into inputTotal
    console.log(inputTotal);

    $('#table').append(`
  <tr>
   <th> first name: ${firstName}</th>
  <th> Last Name: ${lastName}</th>
  <th> Employee ID: ${employeeID}</th>
  <th> Job Title: ${jobTitle}</th>
  <th> Annual Salary: ${annualSal}</th>
  <th> Monthly Salary: ${totalCost}
  <th> <button id="deleteButt"></button></th>
  </tr>
  `);
    monthly();
    //console.log(inputTotal[i] + inputTotal[i]);
  }
}

//function deleteButt() {
//$(this).on('click');
//}
let cost = [];

function monthly() {
  for (let x of inputTotal) {
    console.log(x.annualSal);
    cost.push(x.annualSal);
    console.log(cost);
  }
  return cost;
}
