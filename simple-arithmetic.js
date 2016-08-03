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
function moreExpr(maxNumber,exprNumber) {
    var bigArr = [];
    bigArr[0]=mathExpr(maxNumber);
    while (bigArr.length < exprNumber) {
        var j=0;
        while ( (j < bigArr.length) && !testUn(mathExpr(maxNumber), bigArr[j]) ){
            j++;
        }
        if(j===bigArr.length){
            bigArr.push(mathExpr(maxNumber));
        }
    }
    return bigArr;
}
//Функция, которая проверяет примеры на уникальность

//как заставить генерировать еще пример,если попался такой же
function testUn(ar1,ar2) {

    if (ar1.length !== ar2.length) {
        return false;
    } else {
        var i = 0;
        while (ar1[i] === ar2[i] && i < ar1.length) {
            i++;
        }
        if(i===ar1.length){
            return true;
        }else{
            return false;
        }

    }
}
//console.log(testUn([2,5,2],[2,2,5]));

$(document).ready(function() {
    multiExprToHtml(moreExpr($(".maxoper").val(),$(".amount").val()));
    $(".generate").click(function(){
        $(".mathexpressions").empty();
        multiExprToHtml(moreExpr($(".maxoper").val(),$(".amount").val()));

    });



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


