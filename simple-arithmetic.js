/**
 * Created by maryna-yelakova on 23.04.16.
 */
//Функция, которая генерирует случайные числа в заданном диапазоне
function randomNumber(rangeBeggin,rangeEnd){
    return Math.floor(Math.random()*(rangeEnd-rangeBeggin + 1)+rangeBeggin);
}

//Функция, котрая возвращает 1 пример в виде массива
function mathExpr(maxNumber){
    var slog1
        , slog2
        , sign;
        slog1 = randomNumber(1, maxNumber);
        slog2 = randomNumber(1, maxNumber);
        sign = randomNumber(-2, 10);
        if (sign > 0 && slog1 + slog2 <= maxNumber) {
            return [slog1,1,slog2];
            //  console.log(slog1 + " + " + slog2);
        } else {

                if (slog1 > slog2) {
                    return [slog1,-1,slog2];
              //      console.log(slog1 + " - " + slog2);
                } else {
                   return [slog2,-1,slog1];
                  //  console.log(slog2 + " - " + slog1);
                }
            }
    }
//console.log(mathExpr(20));

//Функция, которая генрирует 10 примеров в виде двумерного массива
function moreExpr(maxNumber,exprNumber){
    var bigArr = [];
    var expr;
    for (var i=0;i<exprNumber;i++) {
        expr = mathExpr(maxNumber);
        bigArr[i] = expr;
    }
    return bigArr;
}

$(document).ready(function() {
    mathExprToHtml(mathExpr(30));
    multiExprToHtml(moreExpr(20,10));
});
function mathExprToHtml(mathExpr) {
    var mathSign;
    if (mathExpr[1] === 1) {
        mathSign = " + ";
    } else {
        mathSign = " - ";
    }
    $(".mathexpressions").append("<p>"+ mathExpr[0] + mathSign + mathExpr[2] +  " = <input type='text' name='mathExprResult'> </p>");
}
function multiExprToHtml (exprArray) {
    for (var j = 0; j < exprArray.length; j++) {
        mathExprToHtml(exprArray[j]);
    }
}

/*var multiExpr = [];
function testUnic(maxNumber){

for(var i=1;i<=10;i++){
    if (moreExpr(maxNumber) !== multiExpr[i]) {
        moreExpr(maxNumber) = multiExpr[i];
}
    return multiExpr;
}

}
console.log(testUnic(20))*/
