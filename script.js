let data = document.getElementById('data');

$box1 = document.getElementById("box1");
$box2 = document.getElementById("box2");

$table1 = document.createElement("table");
$table2 = document.createElement("table");
//$thead = document.createElement("thead");
//$th = document.createElement("th");
$tbody1 = document.createElement("tbody");
$tbody2 = document.createElement("tbody");
//$trh = document.createElement("tr");


$box1.appendChild($table1)
$box2.appendChild($table2)
//$table.appendChild($thead);
//$thead.appendChild($trh);
//$trh.appendChild($th)
$table1.appendChild($tbody1);
$table2.appendChild($tbody2);

let arrayVariables = [];
let arrayTerminales = [];

document.addEventListener("keydown", function(event) {
  //console.log(event.key)
  if (event.key === "F5") {
      event.preventDefault(); // Opcional: evita la recarga predeterminada
      //console.log(data.value)
      getVariablesTerminales(data)
  }
});

function getVariablesTerminales(data){
 

  getLines = data.value
  getLines = getLines.split(/\n/)

  getLines.forEach(line => {
    line = line.split(/:/);
    
    variable = line[0]
    if (!arrayVariables.includes(variable)) {
      arrayVariables.push(variable)
      printVariables(arrayVariables)
    } 
    
    terminal = line[1] 
    if (!arrayTerminales.includes(terminal)) {
      arrayTerminales.push(terminal)        
      printTerminales(arrayTerminales)
    }
    
  
  }) 

  
  
}

function printVariables(arrayVariables){

  for (let index = 0; index < arrayVariables.length; index++) {
          
    $tr = document.createElement("tr");
    $td = document.createElement("td");    

    $td.textContent  = arrayVariables[index];
  }

  $tbody1.appendChild($tr)
  $tr.appendChild($td)
 
  //arrayVariables = [];
  console.log(arrayVariables);
  //console.log(arrayTerminales);  
}

function printTerminales(arrayTerminales){

  for (let index = 0; index < arrayTerminales.length; index++) {
          
    $tr = document.createElement("tr");
    $td = document.createElement("td");    

    $td.textContent  = arrayTerminales[index];
  }

  $tbody2.appendChild($tr)
  $tr.appendChild($td)
 
  //console.log(arrayVariables);
  //console.log(arrayTerminales);  
}

