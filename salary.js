$(document).ready(starter);

function starter() {
  $('#submitButton').on('click', collector);
}
let inputTotal = [];
let total = 0;
let end = 0;
let maximum = 20000;
let luca = $('#monthly');

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
    !$('#fname').val() || //if this is empty OR
    !$('#lname').val() ||
    !$('#idNum').val() ||
    !$('#jobTitle').val() ||
    !$('#anSal').val()
  ) {
    let clearData = [
      //clear inputs after all submits
      $('#fname').val(''),
      $('#lname').val(''),
      $('#idNum').val(''),
      $('#jobTitle').val(''),
      $('#anSal').val(''),
      $('#monthly').val(''),
    ];
    alert('you forgot something'); //alert if any field isn't filled
  } else {
    // run when if statement not true, so all are filled run this

    console.log('in collector'); //name of function

    let clearData = [
      //empties the inputs
      $('#fname').val(''),
      $('#lname').val(''),
      $('#idNum').val(''),
      $('#jobTitle').val(''),
      $('#anSal').val(''),
    ];

    $('#monthly').empty();

    inputTotal.push(inputField); // push the object outline into inputTotal
    console.log(inputTotal); // check if .push worked
    monthlyCost(); //run mC function
    let backgroundColor = (id = 'backgroundColor'); //assign for color change
    if ((end > 20, 000)) {
      // if total monthly cost is greater than 20k
      end = backgroundColor; //becomes redbackground
      $('#table').append(`
  <tr>
   <th> first name: ${firstName}</th>
  <th> Last Name: ${lastName}</th>
  <th> Employee ID: ${employeeID}</th>
  <th> Job Title: ${jobTitle}</th>
  <th> Annual Salary: ${annualSal}</th>
  <th> Total Salary: ${total}</th>
  <th id = "backgroundColor"> Monthly Costs: ${end}</th>
  `); // add table showing red background, not working
      //assign end to something that has a red background color
    } else {
      if (end >= maximum) {
        $('#monthly').css('background-color', 'red');
      } // if over max limit turn red.
      // if < 20k do this
      $('#table').append(`
  <tr>
   <th> first name: ${firstName}</th>
  <th> Last Name: ${lastName}</th>
  <th> Employee ID: ${employeeID}</th>
  <th> Job Title: ${jobTitle}</th>
  <th> Annual Salary: ${annualSal}</th>
  <th> Total Salary: ${total}</th>
  `);
    }
  }

  $('#monthly').append(`Monthly Costs: ${end}`);
  console.log('Monthly Costs:', end);
}
function monthlyCost() {
  total = 0;
  end = 0;
  for (let i = 0; i < inputTotal.length; i++) {
    total += inputTotal[i].annualSal;
    end = total / 12;

    console.log('total salary is: ', total);
  }
}

//grab total and append to DOM
