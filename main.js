// Others

const date = new Date();
let allInput = document.querySelectorAll("input");
// Day declarations
const dayInput = document.querySelector("#input_day");
const currentDay = date.getDate();
const dayError = document.querySelector("#requiredDayField");
const dayOutPut = document.querySelector("#output_Day");
const dayString = document.querySelector("#dayString");
const dayLabel = document.querySelector("#day_label_color");

// Month declarations
const monthInput = document.querySelector("#input_month");
const currentMonth = date.getMonth() + 1;
const monthError = document.querySelector("#requiredMonthField");
const monthOutput = document.querySelector("#output_Month");
const monthLabel = document.querySelector("#month_label_color");

// Year declarations
const yearInput = document.querySelector(".input_year");
const yearOutput = document.querySelector("#output_year");
const yearLabel = document.querySelector("#year_label_color");
const currentYear = date.getFullYear();
const yearError = document.querySelector("#requiredYearField");
const yearString = document.querySelector("#yearString");


const button = document.getElementById("#btn_submit");
let isValid  ;



// input Day of date function
dayInput.addEventListener("input", (e) => {
    if( (+dayInput.value >  31) || (+dayInput.value <  0) || (dayInput.value != +dayInput.value)){
      dayError.textContent = "Must be valid day";
       dayLabel.style.color = "red"
    dayInput.style.border = "1px solid red"
      isValid = false;
      button.disabled = true; 
      return;
    }else if ( +dayInput.value == " "  ) {
      dayError.textContent = "This field is required";
       dayLabel.style.color = "red"
      dayInput.style.border = "1px solid red"
      isValid = false;
       button.disabled = true; 
      return;
    }else {
      isValid = true;
       dayLabel.style.color = "black"
    dayInput.style.border = "1px solid black"
      dayError.textContent = " ";
      button.disabled = false; 
      return;
  }
})
  


    // Month of date  
    monthInput.addEventListener("input", (e) => {
    if ((+monthInput.value > 12) ||  (+monthInput.value <  0) || (monthInput.value != +monthInput.value )) {
      monthError.textContent = "Must be a valid month";
       monthLabel.style.color = "red"
    monthInput.style.border = "1px solid red"
      isValid = false;
       button.disabled = true; 
      return;
    }else if ( +monthInput.value == " "  ) {
      monthError.textContent = "This field is required";
      monthLabel.style.color = "red"
      monthInput.style.border = "1px solid red"
      isValid = false;
       button.disabled = true; 
        return;
      }else {
      isValid = true;
      monthError.textContent = " ";
        monthLabel.style.color = "black"
    monthInput.style.border = "1px solid black"
       button.disabled = false; 
      return;
      }
    })




    // Year of date function
  
yearInput.addEventListener("input", (e) => {
  const yearLength = [2, 0, 2, 3]
  if (+yearInput.value > currentYear) {
    yearError.textContent = "Must be in the past";
    yearLabel.style.color = "red"
    yearInput.style.border = "1px solid red"
    isValid = false;
    button.disabled = true;
    return;
  } else if ((yearInput.value != +yearInput.value) || (+yearInput.value <  0) ) {
    yearError.textContent = "must be a valid year";
     yearLabel.style.color = "red"
    yearInput.style.border = "1px solid red"
    isValid = false;
    button.disabled = true;
    return;
  }

  else if (+yearInput.value.length == " ") {
    yearError.textContent = "The field is required";
    yearLabel.style.color = "red"
    yearInput.style.border = "1px solid red"
    isValid = false;
    button.disabled = true;
    return;

  }
  
  else {
    yearError.textContent = " ";
    isValid = true;
    yearLabel.style.color = "black"
    yearInput.style.border = "1px solid black"
    button.disabled = false;
    return;
  }
})
 


function age() {
    
  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


  if ((+yearInput.value == "") || (+monthInput.value == "") ||
    (+dayInput.value == "")) {
    button.disabled = true;
  }
  if (((+dayInput.value > 31) || (+dayInput.value < 0) || (dayInput.value != +dayInput.value))
    || ((+monthInput.value > 12) || (+monthInput.value < 0) || (monthInput.value != +monthInput.value))
    || ((+yearInput.value > currentYear) || (+yearInput.value <  0) || (yearInput.value != +yearInput.value))) {
    button.disabled = true;
  }
  if (+dayOutPut.value > 1) {
     dayString.textContent = "goat"
  }

      if ((+yearInput.value % 4 == 0) || (+yearInput.value % 400 == 0)) {
        month.splice(1, 1, 29)
      } if (+dayInput.value > +currentDay) {
        dayOutPut.textContent = month[currentMonth - 1] - +dayInput.value + currentDay;
        monthOutput.textContent = currentMonth - 1;

      } else if (+dayInput.value == +currentDay) {
        dayOutPut.textContent = +"0";
      } else {
        dayOutPut.textContent = currentDay - dayInput.value;
        monthOutput.textContent = currentMonth; 

  } if (+monthInput.value > currentMonth) {
        monthOutput.textContent = currentMonth + (12 - +monthInput.value);
        yearOutput.value = currentYear - (+yearInput.value - 1);
  
      } else {
        monthOutput.textContent = currentMonth - monthInput.value;
      }
      if (+yearInput.value > currentYear) {
        isValid = false;
        button.disabled = true;
      } else if (+yearInput.value == currentYear) {
     yearOutput.textContent = currentYear - yearInput.value 
      }
      else {
        yearOutput.textContent = currentYear - yearInput.value - 1;
      }
  }

