const formMatriz = document.getElementById('formMatriz');
const inputRow = document.getElementById('inputRow');
const inputColumn = document.getElementById('inputColum');
const firstMatriz = document.getElementById('firstMatriz');
const secondMatriz = document.getElementById('secondMatriz');
const btnSumar = document.getElementById('btnSumar');
const resultado = document.getElementById('resultado');
formMatriz.addEventListener('submit',(e)=>{
    e.preventDefault();

    const row = parseInt(inputRow.value);
    const column = parseInt(inputColumn.value);
    let sum = row * column;
    console.log(sum);
    if(row <= 0 || column <= 0){
        alert('¡Ingrese columnas y filas válidas!');
        return;
    };
    
    firstMatriz.innerHTML = "";
    secondMatriz.innerHTML = "";
    
    for (let i = 0; i < row; i++) {
        let newRow = document.createElement('div');
        newRow.className = 'row';
        newRow.classList.add('d-flex');
        newRow.classList.add('justify-content-center');
        newRow.classList.add('mb-2');
        for (let j = 0; j < column; j++) {
            let input = document.createElement('input');
            input.type = 'number';
            input.className = 'inputMatriz1';
            input.classList.add('form-control');
            input.required = true;
            newRow.appendChild(input);
        }
        firstMatriz.appendChild(newRow);
    }
    for (let i = 0; i < row; i++) {
        let newRow = document.createElement('div');
        newRow.className = 'row';
        newRow.classList.add('d-flex');
        newRow.classList.add('justify-content-center');
        newRow.classList.add('mb-2');
        for (let j = 0; j < column; j++) {
            let input = document.createElement('input');
            input.type = 'number';
            input.className = 'inputMatriz2';
            input.classList.add('form-control');
            input.required = true;
            newRow.appendChild(input);
        }
        secondMatriz.appendChild(newRow);
    }
});


btnSumar.addEventListener('click',async(e)=>{
    e.preventDefault();
    const inputMatriz1 = document.querySelectorAll('.inputMatriz1');
    const inputMatriz2 = document.querySelectorAll('.inputMatriz2');

    let matriz1 = [];
    let matriz2 = [];

    inputMatriz1.forEach((input)=>{
        matriz1.push(parseInt(input.value));
    });
    inputMatriz2.forEach((input)=>{
        matriz2.push(parseInt(input.value));
    });

    const res = await fetch('/suma',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({arreglo1: matriz1, arreglo2: matriz2})
    });
    const data = await res.json();
    console.log(data);
    const row = parseInt(inputRow.value);
    const column = parseInt(inputColumn.value);
    resultado.innerHTML = "";
    for (let i = 0; i < row; i++) {
        let newRow = document.createElement('div');
        newRow.className = 'row';
        newRow.classList.add('d-flex');
        newRow.classList.add('justify-content-center');
        newRow.classList.add('mb-2');
        for (let j = 0; j < column; j++) {
            let input = document.createElement('input');
            input.type = 'number';
            input.className = 'inputResultado';
            input.classList.add('form-control');
            input.required = true;
            newRow.appendChild(input);
        }


        resultado.appendChild(newRow);
    }

    const inputResultado=document.querySelectorAll('.inputResultado');
    inputResultado.forEach(((input,index)=>{
       input.value = data[index];
    }));
    });

