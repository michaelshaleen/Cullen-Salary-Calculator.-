$(document).ready(starter);

function starter() {
  $('#submitButton').on('click', collector);
}
let inputTotal = [];
let total = 0;

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
    monthlyCost();

    $('#table').append(`
  <tr>
   <th> first name: ${firstName}</th>
  <th> Last Name: ${lastName}</th>
  <th> Employee ID: ${employeeID}</th>
  <th> Job Title: ${jobTitle}</th>
  <th> Annual Salary: ${annualSal}</th>
  <th> Total Cost: ${total}</tr>
  `);

    //console.log(inputTotal[i] + inputTotal[i]);
  }
}

//function deleteButt() {
//$(this).on('click');
//}

function monthlyCost() {
  for (var i = 0; i < inputTotal.length; i++) {
    total += inputTotal[i].annualSal;
    console.log(total);
  }
  return total;
}
//so far the best I can get
