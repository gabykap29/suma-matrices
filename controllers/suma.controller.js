export const sumaMatrices = (req, res) => {
    const { arreglo1, arreglo2 } = req.body;
    let arreglo3 = [];
    if(arreglo1.length !== arreglo2.length){
        return res.status(400).json({message: 'Los arreglos deben ser del mismo tamaño'});
    }
    for(let i= 0; i < arreglo1.length; i++){
        arreglo3.push(arreglo1[i] + arreglo2[i]);
    }
    return res.status(200).json(arreglo3);
};