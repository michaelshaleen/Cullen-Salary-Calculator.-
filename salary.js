$(document).ready(starter);

function starter() {
  $('#submitButton').on('click', addEmployee);
}
let inputTotal = [];
let total = 0;
let monthlyBudget = 0; //how much company spends on salaries, line 69
let maximum = 20000; //the prompt gives a max of $20k for monthly costs, will be used on line 75

function addEmployee(fname, lname, ID, Title, Salary) {
  //event.preventDefault();
  let lastName = $('#lname').val();
  let firstName = $('#fname').val();
  let employeeID = $('#idNum').val();
  let jobTitle = $('#jobTitle').val();
  let annualSal = $('#annualSal').val();

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
    !$('#annualSal').val()
  ) {
    let clearData = [
      //clear inputs after all submits
      $('#fname').val(''),
      $('#lname').val(''),
      $('#idNum').val(''),
      $('#jobTitle').val(''),
      $('#annualSal').val(''),
    ];
    alert('you forgot something'); //alert if any field isn't filled
  } else {
    // if all inputs are filled, run this
    console.log('in addEmployee'); //name of function
    let clearData = [
      //empties the inputs
      $('#fname').val(''),
      $('#lname').val(''),
      $('#idNum').val(''),
      $('#jobTitle').val(''),
      $('#annualSal').val(''),
    ];
    $('#here').append(` 
    <table>
     <tr>
      <th>First</th>
      <th>Last</th>
      <th>ID</th>
      <th>Title</th>
      <th>Salary</th>
      </tr>
      <tr>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${employeeID}</td>
      <td>${jobTitle}</td>
      <td>${annualSal}</td>
      </tr>
      </table>
      <button class= "deleteBut">Delete Me</button>
    </tr>
  </table>
    </li>`);
    //values are assigned on lines 13-17

    inputTotal.push(inputField); // push the object outline into inputTotal
    console.log(inputTotal); // check if .push worked
    monthlyCost(); //run mC function
    let backgroundColor = (id = 'backgroundColor'); //assign for color change
  }

  $('#monthly').append(`Monthly Costs: $${monthlyBudget}`); //show on DOM from monthlyCost function
  console.log('Monthly Costs:', monthlyBudget);
  $();

  if (monthlyBudget >= maximum) {
    alert('Total Monthly Costs Exceed $20k');
    $('#monthly').css('background-color', 'red'); // at least this works!
  } // if over max limit turn red.
  // if < 20k do this// show it works
  function monthlyCost() {
    total = 0;
    monthlyBudget = 0;
    for (let i = 0; i < inputTotal.length; i++) {
      total += inputTotal[i].annualSal;
      monthlyBudget = total / 12;
      console.log('monthly budget is : ', monthlyBudget);
    }
  }
  return true; // this function is used to find the total monthly cost by grabbing total
  // annual salaries added and /12 to find the month.
}

//console.log(addEmployee('Bob', 'Anderson', 4, 'Head of Marketing', 50000));
//line 106 causes errors, reads alert.
