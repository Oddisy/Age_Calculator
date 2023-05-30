function age() {
  let d1 = document.getElementById("d1").value,
    m1 = document.getElementById("m1").value,
    y1 = document.getElementById("y1").value,

    // input_label = document.getElementById("label"),
    // input = document.querySelectorAll("input"),
    
    root = document.getElementById("root"),
    date = new Date(),
    d2 = date.getDate(),
    m2 = 1 + date.getMonth(),
    y2 = date.getFullYear(),
  dayString = document.getElementById("dayString"),
    monthString = document.getElementById("monthString"),
    yearString = document.getElementById("yearString"),
    dayVar = document.getElementById("dayVar"),
    monthVar = document.getElementById("monthVar"),
    yearVar = document.getElementById("yearVar")
   
    ;
  
  const month = [31, 28, 31, 31, 31, 31, 30, 31, 31, 31, 30, 31]
    
  if ((d1 != " ") && (m1 != " ") && (y1 != "")) {
    if (d1 > d2) {
      d = d2 + month[m2 - 1] - d1;
      m = m2 - 1;
    }
    else if ((d1 == d2) && (m1 = m2)) {
      root.innerHTML = "Happy Birth Day"
    }
    else {
      d = d2 - d1
    }
    if ((m1 > m2) && (!(d1 > d2))) {
      m = m2 + 12 - m1;
      y2 = y2 - 1
    }

    else if (m1 < m2) {
      m = m2 - m1
    }

    if ((y1 > y2) || ((m1 > 12) || (m1 < 1)) || ((d1 > 31)) ||(d1 < 1)) {
      root.innerHTML = "invalid age"
          root.style.color = "red";
      root.style.fontWeight = "600";
    }
    else if (y1 < y2) {
       y = y2 - y1
      if (y > 1) {
        yearVar.innerHTML = ` ${y} `;
        monthVar.innerHTML = ` ${m} `;
        dayVar.innerHTML = ` ${d} `;
      }
      else if (d > 1) {
        dayVar.innerHTML = ` ${d} `;
         yearVar.innerHTML = ` ${y} `;
        monthVar.innerHTML = ` ${m} `;
      }

       else if (m > 1) {
        dayVar.innerHTML = ` ${d} `;
         yearVar.innerHTML = ` ${y} `;
        monthVar.innerHTML = ` ${m} `;
      }
        
          if ((y === 1) &&(m == 1)&&(d == 1)) {
              yearString.innerHTML = "year";
              monthString.innerHTML = "month";
              dayString.innerHTML = "day";
              yearVar.innerHTML = ` ${y} `;
              monthVar.innerHTML = ` ${m} `;
            dayVar.innerHTML = ` ${d} `;
 
       }
       else if ((m == 1) && (d == 1)) {
              monthString.innerHTML = "month";
              dayString.innerHTML = "day";
              monthVar.innerHTML = ` ${m} `;
            dayVar.innerHTML = ` ${d} `;
             yearVar.innerHTML = ` ${y} `;
          }
             else if ((y == 1) && (d == 1)) {
              yearString.innerHTML = "year";
              dayString.innerHTML = "day";
              monthVar.innerHTML = ` ${m} `;
            dayVar.innerHTML = ` ${d} `;
             yearVar.innerHTML = ` ${y} `;
          }
             else if ((y == 1) && (m == 1)) {
              monthString.innerHTML = "month";
              yearString.innerHTML = "year";
              monthVar.innerHTML = ` ${m} `;
            dayVar.innerHTML = ` ${d} `;
            yearVar.innerHTML = ` ${y} `;
               if ((y > 1) && (m > 1)) {
              monthVar.innerHTML = ` ${m} `;
            dayVar.innerHTML = ` ${d} `;
             yearVar.innerHTML = ` ${y} `;
            }
            
          }
            
       else if ((y === 1) &&(m != 1) && (d != 1)) {
        yearString.innerHTML = "year"
            yearVar.innerHTML = ` ${y} `;
             dayVar.innerHTML = ` ${d} `;
            yearVar.innerHTML = ` ${y} `;
       }
          else if (d == 1) {
         dayVar.innerHTML = ` ${d} `;
            dayString.innerHTML = "day";
      }
  
      else if (m == 1) {
         monthVar.innerHTML = ` ${m} `;
            monthString.innerHTML = "month";
      }
  
  

    }

  }
  else {
    // let requiredField = document.getElementById("RequiredField");
      root.style.innerHTML = "NO NO";
      // input_label.style.color = "red";
      // requiredField.style.fontWeight = "600";
     

    }
}
  
