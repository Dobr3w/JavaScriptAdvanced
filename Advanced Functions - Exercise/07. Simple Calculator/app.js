function calculator() {
    let num1, num2, resultElement;

    return {
        init: function(selector1, selector2, resultSelector) {
            num1 = document.querySelector(selector1);
            num2 = document.querySelector(selector2);
            resultElement = document.querySelector(resultSelector);
        },
        add: function() {
            resultElement.value = Number(num1.value) + Number(num2.value);
        },
        subtract: function() {
            resultElement.value = Number(num1.value) - Number(num2.value);
        }
    };
}