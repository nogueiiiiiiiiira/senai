function soma(){
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var resSoma = num1 + num2;
    document.getElementById("resSoma").textContent = resSoma.toFixed(2);
}

function subtrair(){
    var num3 = document.getElementById("num3").valueAsNumber;
    var num4 = document.getElementById("num4").valueAsNumber;
    var resSub = num3 - num4;
    document.getElementById("resSub").textContent = resSub.toFixed(2);
}

function divisao(){
    var num5 = document.getElementById("num5").valueAsNumber;
    var num6 = document.getElementById("num6").valueAsNumber;
    var resDiv = num5 / num6;
    document.getElementById("resDiv").textContent = resDiv.toFixed(2);
}

function multiplicar(){
    var num7 = document.getElementById("num7").valueAsNumber;
    var num8 = document.getElementById("num8").valueAsNumber;
    var resMult = num7 * num8;
    document.getElementById("resMult").textContent = resMult.toFixed(2);
}

function media(){
    var num9 = document.getElementById("num9").valueAsNumber;
    var num10 = document.getElementById("num10").valueAsNumber;
    var num11 = document.getElementById("num11").valueAsNumber;
    var resMed = (num9 + num10 + num11) / 3;
    document.getElementById("resMed").textContent = resMed.toFixed(2);
}