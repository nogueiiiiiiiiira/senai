function soma() {
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var resSoma = num1 + num2;

    var positivoSom = document.getElementById("SomP");
    var negativoSom = document.getElementById("SomN");
    var d = document.getElementById("resSoma");
    if (resSoma >= 0) {
        d.style.color = "green";
        positivoSom.style.display = "block";
        positivoSom.style.color = "green";
        negativoSom.style.display = "none";
    } else {
        d.style.color = "red";
        negativoSom.style.display = "block";
        negativoSom.style.color = "red";
        positivoSom.style.display = "none";
    }

    document.getElementById("resSoma").textContent = resSoma.toFixed(2);
}

function subtrair() {
    var num3 = document.getElementById("num3").valueAsNumber;
    var num4 = document.getElementById("num4").valueAsNumber;
    var resSub = num3 - num4;

    var positivoS = document.getElementById("SubP");
    var negativoS = document.getElementById("SubN");
    var c = document.getElementById("resSub");
    if (resSub >= 0) {
        c.style.color = "green";
        positivoS.style.display = "block";
        positivoS.style.color = "green";
        negativoS.style.display = "none";
    } else {
        c.style.color = "red";
        negativoS.style.display = "block";
        negativoS.style.color = "red";
        positivoS.style.display = "none";
    }

    document.getElementById("resSub").textContent = resSub.toFixed(2);
}

function divisao() {
    var num5 = document.getElementById("num5").valueAsNumber;
    var num6 = document.getElementById("num6").valueAsNumber;
    var resDiv = num5 / num6;

    var positivoD = document.getElementById("DivP");
    var negativoD = document.getElementById("DivN");

    var b = document.getElementById("resDiv");
    if (resDiv >= 0) {
        b.style.color = "green";
        positivoD.style.display = "block";
        positivoD.style.color = "green";
        negativoD.style.display = "none";
    } else {
        b.style.color = "red";
        negativoD.style.display = "block";
        negativoD.style.color = "red";
        positivoD.style.display = "none";
    }

    document.getElementById("resDiv").textContent = resDiv.toFixed(2);
}

function multiplicar() {
    var num7 = document.getElementById("num7").valueAsNumber;
    var num8 = document.getElementById("num8").valueAsNumber;
    var resMult = num7 * num8;

    var positivoM = document.getElementById("MultP");
    var negativoM = document.getElementById("MultN");

    var a = document.getElementById("resMult");
    if (resMult >= 0) {
        a.style.color = "green";
        positivoM.style.display = "block";
        positivoM.style.color = "green";
        negativoM.style.display = "none";
    } else {
        a.style.color = "red";
        negativoM.style.display = "block";
        negativoM.style.color = "red";
        positivoM.style.display = "none";
    }

    document.getElementById("resMult").textContent = resMult.toFixed(2);
}

function media() {
    var num9 = document.getElementById("num9").valueAsNumber;
    var num10 = document.getElementById("num10").valueAsNumber;
    var num11 = document.getElementById("num11").valueAsNumber;

    var resMed = (num9 + num10 + num11) / 3;

    var aprovado = document.getElementById("condP");
    var reprovado = document.getElementById("condN");

    var x = document.getElementById("resMed");
    if (resMed > 7) {
        x.style.color = "green";
        aprovado.style.display = "block";
        aprovado.style.color = "green";
        reprovado.style.display = "none";
    } else {
        x.style.color = "red";
        reprovado.style.display = "block";
        reprovado.style.color = "red";
        aprovado.style.display = "none";
    }

    document.getElementById("resMed").textContent = resMed.toFixed(2);
}

function limpar() {
    window.location.reload();
}
