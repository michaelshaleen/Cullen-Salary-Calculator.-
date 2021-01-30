$(document).ready(starter);

function starter() {
  $('#submitButton').on('click', collector);
}
function collector() {
  //event.preventDefault();
  let inputTotal = [];
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

    console.log(inputTotal);
    let clearData = [
      $('#fname').val(''),
      $('#lname').val(''),
      $('#idNum').val(''),
      $('#jobTitle').val(''),
      $('#anSal').val(''),
    ];

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

    function monthlyCost() {
      let totalSalary = [];
      for (annualSal in inputTotal) {
        totalSalary += inputTotal[annualSal];
      }
      console.log(totalSalary);
    }
  }
}
