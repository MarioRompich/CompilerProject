let area = document.getElementById('datea');
console.log('area')

let content = document.getElementById('content');

area.addEventListener('dragover', e => e.preventDefault());
area.addEventListener('drop', readFile);

function readFile (e) {
  e.preventDefault();
  let file = e.dataTransfer.files[0];
  
  if (file.type === 'text/plain') {
    let reader = new FileReader();
    reader.onloadend = () => printFileContents(reader.result);
    reader.readAsText(file, 'ISO-8859-1');
  } else {
    alert('Por favor puede carga un archivo de texto!');
  }
}

function printFileContents (contents) {
  content.style.lineHeight = '30px';
  content.textContent = '';
  let lines = contents.split(/\n/);
  //var arrayTransitionTh = lines[1];
  let lineCounter = 0;
  crateArrayKey = " "
  let inArrayKey = [];
  let  mainArray= [];
  let subArray = [];
  
  lines.forEach(line => {
    //preparando encabezado de matriz transicion
    if (lineCounter == 0) {
      arrEstados = line
      arrEstados = arrEstados.replace(/[Q{}=\r]/g, '')
      arrEstados = arrEstados.split(/,/);
      console.log("estados",arrEstados)
      
    }

    if (lineCounter == 1) {
      arrayTransitionTh = line
      arrayTransitionTh = arrayTransitionTh.replace(/[{}=,\r]/g, '')
      arrayTransitionTh = arrayTransitionTh.split("")
      arrayTransitionTh = arrayTransitionTh.splice(1);
      thead = ["Estados"]
      
      //console.log(arrayTransitionTh)
      for (let index = 0; index < arrayTransitionTh.length; index++) {
        thead.push(arrayTransitionTh[index])
        
      }
      thead.push("e")
    }
 
    content.textContent += line + '\n'

    if (lineCounter != 4) {
      
      emptyLine = line
      line = line.replace(/[\s+^,{}()]/g, '')
  
      var body = line.split('')
     
      $tableDisplay = document.getElementById("tableDisplay");
      $table = document.createElement("table");
      $thead = document.createElement("thead");
      $tbody = document.createElement("tbody");
      $trh = document.createElement("tr");
      $th = document.createElement("th");
    
      $tableDisplay.appendChild($table)
      $table.appendChild($thead);
    
      $thead.appendChild($trh);
      $trh.appendChild($th)
      
      $table.appendChild($tbody);

      //asignamos valores a los th
      $th.textContent = body[0];
      $trh.appendChild($th)

      console.log(body)
   
      if (body.length > 2) {
        
        for (let index = 2; index < body.length; index++) {[]
          
          $trb = document.createElement("tr");
          $td = document.createElement("td");
        
          $tbody.appendChild($trb)
          $trb.appendChild($td)

          $td.textContent  = body[index];
          //console.log("--//--")
          console.log(body[index])
          $trb.appendChild($td)

        }
      } else { 
        alert ("El vector viene vacio "+ '\n'+ emptyLine +  '\n'+ " Tiene que tener almenos un elemento para recorrerlo y mostralo en pantalla")
      }

      lineCounter ++;
      //console.log(lineCounter)
    } else {
      //MATRIZ DE TRANSICION
      console.log("--------------MATRIZ DE TRANSICION----------------")
      //console.log(line)
      //regex ER limpiando cadenas
      var line = line.replace(/[W={}]/g, '')
      //console.log(line)
      var line = line.split(/\(([^)]+)\)/)
      //console.log(line)

      $arrayTransition = document.getElementById("arrayTransition");
      $table = document.createElement("table");
      $tbody = document.createElement("tbody");
      $thead = document.createElement("thead");
      $trh = document.createElement("tr");
    
    
      $arrayTransition.appendChild($table)
      $table.appendChild($thead);
      $table.appendChild($tbody);

      $thead.appendChild($trh);

      //Encabezadod de matriz transicion
      for (let index = 0; index < thead.length; index++) {
        $th = document.createElement("th");
        $th.textContent  = thead[index];
        $trh.appendChild($th) 
      }
      
      let bandera = false 

      for (let index = 0; index < line.length; index++) {

        let element = line[index];
        //console.log(element)

        let elementsclean = element.toString()
        let elementscleaned = elementsclean.replace(/[,]/g, '')

        let arrElements =  elementscleaned.split("")
        if (elementscleaned.length > 1) { 
            //console.log("arrElements")
            //console.log("arrElements", arrElements)
         
            arrayKey = arrElements[0];
            console.log("arrayKey")
            console.log("bandera", bandera)
            //if (bandera === true) {
             
            //} else{
              //bandera = false
            //}

            console.log("arrElements", arrElements)
            if (!inArrayKey.includes(arrayKey)) {
              inArrayKey.push(arrayKey)           
              crateArrayKey = arrayKey
              
              let key = arrElements[0];
              //console.log(key)
              subArray = [key]
              console.log("subArray", subArray)
            
              
              eThead =  thead[1]//a
              eThead2 =  thead[2]//b
              eThead3 =  thead[3]//e
              //console.log("eThead", eThead)

            //if (eThead == arrElements[1] ) {
              //let p2 = arrElements[2];
              //console.log("p2", p2)
              //subArray.push(p2)
            //}
            ///else{
             // let p2 = " ";
              //console.log("p2", p2)
              //subArray.push(p2)
            //}

            if (eThead3 == arrElements[1] ) {
              //let p4 = arrElements[2];
              //console.log("p2", p4)
              //subArray.push(p4)
            }

            //if (eThead2 == arrElements[1] ) {
              //let p2 = arrElements[2];
              //console.log("p2", p2)
              //subArray.push(p2)
            //}
           
            mainArray.push(subArray)
            
          } else {

            eThead =  thead[1]//a
            eThead2 =  thead[2]//b
            eThead3 =  thead[3]//e
            console.log("eThead", eThead)
            for (let index = 0; index < inArrayKey.length; index++) {
              console.log("inArrayKey[index]",inArrayKey[index])
              if (inArrayKey[index] == subArray[0]) {
                console.log("arrElements[1]", arrElements[1])

                //a
               if (eThead == arrElements[1] ) {
                  let p1 = arrElements[2];
                  console.log("p1", p1)
                  subArray.push(p1)
                  //alert("uno")
                }else{
                  let p1 = " -";
                  console.log("p1", p1)
                  subArray.push(p1)
                  //alert("uno")
                }

                //b
                if (eThead2 == arrElements[1] ) {
                  let p2 = arrElements[2];
                  console.log("p2", p2)
                  subArray.push(p3)
                  //alert("uno")
                }else{
                  let p2 = "- -";
                  console.log("p2", p2)
                  subArray.push(p2)
                  //alert("uno")
                }
                
                //e
                //console.log("arrElements22", arrElements)
                 /*if (eThead3 == arrElements[1] ) {
                  let p4 = arrElements[2];
                  console.log("p2", p4)
                  subArray.push(p4)
                }else{
                  let p4 = " ---";
                  //console.log("p3", p3)
                  subArray.push(p4)
                  //alert("uno")
                }*/
                

                //if (eTheader == arrElements[1] ) {
                  //let p3 = arrElements[2];
                  //console.log("p3", p3)
                  //subArray.push(p3)
                  //alert("uno")
                //}
              
              
              }
            }
          }

          
        }
        eThead3 =  thead[3]//e

          console.log("arrElements23", arrElements)
          for (let index = 0; index < inArrayKey.length; index++) {
            console.log("inArrayKey[index]",inArrayKey[index])
            if (inArrayKey[index] == subArray[0]) {
              if (eThead3 == arrElements[1] ) {
                let p3 = arrElements[2];
                //console.log("p2", p4)
                subArray.push(p3)
              }else{
                let p3 = "----";
                //console.log("p2", p4)
                subArray.push(p3)

              }
            }
          } 
      }
      //console.log("mainArray", mainArray)
      for (let index = 0; index < arrEstados.length; index++) {
        eEstado = arrEstados[index]
        eEstados = eEstado.trim()
        if (!inArrayKey.includes(eEstados)) {
          //console.log("eestdo", arrEstados[index])
            subArray = [arrEstados[index]]
                //let p2 = arrElements[2];
                //subArray.push(p2)

                mainArray.push(subArray)
        }
       
         
       }
    }
      
  });
  console.log("---HEADER---")
  //console.log(thead)
  console.log("---CONTENT---")  

  console.log(mainArray);

  for (let index = 0; index < mainArray.length; index++) {  
    //console.log("mainArray", mainArray);
    $trb = document.createElement("tr");
    $tbody.appendChild($trb)
    let subArr = mainArray[index]

    console.log("lengt", subArr.length)
    
    for (let i = 0; i <subArr.length; i++) {
      
      $td = document.createElement("td");

      $td.textContent = subArr[i];
      $trb.appendChild($td)
      //console.log(mainArray[index])
    } 
  }

}