let arrayImagenes=new Array();
arrayImagenes.push(6,1,2,3,5,4);

function algoritmoAscendenteBurbuja(){
    alert("Soy la función burbuja ascendente");
    for(let i=0;i<arrayImagenes.length;i=i+1){
		for(let j=0;j<arrayImagenes.length;j=j+1){
			if(arrayImagenes[i]<arrayImagenes[j]){
				let aux=arrayImagenes[i];
				arrayImagenes[i]=arrayImagenes[j];
				arrayImagenes[j]=aux;
			}
		}
	}


}
function algoritmoDescendenteBurbuja(){
    alert("Soy la función burbuja descendente");
    for(let i=0;i<arrayImagenes.length;i=i+1){
		for(let j=0;j<arrayImagenes.length;j=j+1){
			if(arrayImagenes[i]>arrayImagenes[j]){
				let aux=arrayImagenes[i];
				arrayImagenes[i]=arrayImagenes[j];
				arrayImagenes[j]=aux;
			}
		}
	}
    

}

function algoritmoAscendenteSeleccion(){
    alert("Soy la función seleccion ascendente");
    for(let i=0;i<=arrayImagenes.length-2;i++){
		let indexMax=i;
		for(let j=i+1;j<=n-1;j++){
			if(arrayImagenes[j]<arrayImagenes[indexMax]){
				indexMax=j;
			}
		}
		let aux=arrayImagenes[i];
		arrayImagenes[i]=arrayImagenes[indexMax];
		arrayImagenes[indexMax]=aux;
	}

}
function algoritmoDescendenteSeleccion(){
    alert("Soy la función seleccion descendente");
    for(let i=0;i<=arrayImagenes.length-2;i++){
		let indexMax=i;
		for(let j=i+1;j<=n-1;j++){
			if(arrayImagenes[j]>arrayImagenes[indexMax]){
				indexMax=j;
			}
		}
		let aux=arrayImagenes[i];
		arrayImagenes[i]=arrayImagenes[indexMax];
		arrayImagenes[indexMax]=aux;
	}

}

function algoritmoAscendenteInsercion(){
    alert("Soy la función insercion ascendente")
    for( let i=0;i<arrayImagenes.length;i++) {
        let index = arrayImagenes[i];
        j = i-1;
        while (j >= 0 && arrayImagenes[j] > index) {
          arrayImagenes[j + 1] = arrayImagenes[j];
          j--;
        }
        arrayImagenes[j+1] = index;
      }


}
function algoritmoDescendenteInsercion(){
    alert("Soy la función insercion descendente")
    for( let i=0;i<arrayImagenes.length;i++) {
        let index = arrayImagenes[i];
        j = i-1;
        while (j >= 0 && arrayImagenes[j] < index) {
          arrayImagenes[j + 1] = arrayImagenes[j];
          j--;
        }
        arrayImagenes[j+1] = index;
      }


}

function aleatorio(direccion,arrayPositions){
    const arraySrc=[];
    const arrayInput=[];
    const arrayMuestra=[];

    arrayPositions.array.forEach((element) => {
        arrayInput.push(`<input type="checkbox" name="imageSelect[]" value="${element}" id="${element}">`)
        arraySrc.push(`<img class="responsive-img circle" src="${direccion}/${element}.png" alt="">`);
    });

}

function showSelected(){
    let seleccion=document.getElementById("algoritmoSeleccionado").value
    /* Validar la seleccion del checkbox */
    if((seleccion==="1") && (document.getElementById("algOrd1").checked)){
        algoritmoDescendenteBurbuja();
    }else if((seleccion==="1") && (document.getElementById("algOrd2").checked)){
        algoritmoAscendenteBurbuja();
    }else if((seleccion==="2") && (document.getElementById("algOrd1").checked)){
        algoritmoDescendenteInsercion();
    }else if((seleccion==="2") && (document.getElementById("algOrd2").checked)){
        algoritmoAscendenteInsercion();
    }else if((seleccion==="3") && (document.getElementById("algOrd1").checked)){
        algoritmoDescendenteSeleccion();
    }else if((seleccion==="3") && (document.getElementById("algOrd2").checked)){
        algoritmoAscendenteSeleccion();
    }

}

function añadirElementoFinalArray(){
    let arrayFrameworks= new Array();
    arrayFrameworks.push("laravel","Angular","Simphony");
    console.log(arrayFrameworks);

}
console.log(añadirElementoFinalArray());

function añadirElementoInicioArray(){
    let arrayFrameworks= new Array();
    arrayFrameworks.push("laravel","Angular","Simphony");
    arrayFrameworks.unshift("Go","React");
    console.log(arrayFrameworks);
}
console.log(añadirElementoInicioArray());

function eliminarElementoFinalArray(){
    let arrayFrameworks= new Array();
    arrayFrameworks.push("laravel","Angular","Simphony","React","GO","TS");
    arrayFrameworks.pop();
    console.log(arrayFrameworks);
}
console.log(eliminarElementoFinalArray());

function eliminarElementoInicialArray(){
    let arrayFrameworks= new Array();
    arrayFrameworks.push("laravel","Angular","Simphony","React","GO","TS");
    arrayFrameworks.shift();
    console.log(arrayFrameworks);
}
console.log(eliminarElementoInicialArray());