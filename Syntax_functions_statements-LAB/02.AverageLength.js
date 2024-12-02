function SumLength(text1, text2, text3){
    let sum = 0;
    sum += text1.length + text2.length + text3.length;
    console.log(sum);
    console.log(Math.floor(sum / 3));
}

SumLength('chocolate', 'ice cream', 'cake')
