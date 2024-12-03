function PieceOfPie(pies = [], firstPie, secondPie){
    const firstPieIndex = pies.indexOf(firstPie);
    const secondPieIndex = pies.indexOf(secondPie);
    const newArr = pies.slice(firstPieIndex, secondPieIndex + 1);
    return newArr;
}
