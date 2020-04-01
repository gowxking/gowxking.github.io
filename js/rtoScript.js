calculate.onclick = function Calc() {
    let angleGrad = +document.getElementById('angle').value;
    let f = +document.getElementById('f').value;
    let h = +document.getElementById('h').value;
    let d = +document.getElementById('d').value;

    let angleRad = angleGrad*Math.PI/180;

    let l = 299792458/(f*1000000);
    let k = l*(d+0.25*l);


    let r1 = h/Math.sin(angleRad);
    let r2 = d-r1;
    let H = +Math.sin(angleRad)*r2;

    let square = k + Math.pow(h+H, 2);

    let ax= (0.5*(d+0.5*l)*Math.pow((k*(k+4*h*H)), 0.5))/square;
    let bx = (ax*Math.pow(square , 1/2))/(d+0.5*l);
    let x0 = ( 0.66*ax + (k*(H-h))/(2*h*square) )/0.34;


    console.log("l=" + l);
    console.log("k=" + k);
    console.log("angleRad=" + angleRad);
    console.log("r1=" + r1);
    console.log("r2=" + r2);
    console.log("H=" + H);
    console.log("x0=" + x0);
    console.log("ax=" + ax);
    console.log("bx=" + bx);

    console.log("sin=" + Math.sin(angleRad));
    console.log("square=" + square);

    if (isNaN(ax)) {
        alert('Введи данные -_-')
    } 
    else if (isNaN(bx)) {
        alert('Введи данные -_-')
    }
    else if (isNaN(x0)) {
        alert('Введи данные -_-')
    }

    document.querySelector('.h0').setAttribute('value', Math.round(x0*1000)/1000 );
    document.querySelector('.ax').setAttribute('value', Math.round(ax*1000)/1000 );
    document.querySelector('.bx').setAttribute('value', Math.round(bx*1000)/1000 );
}


document.querySelector('.variant1').onclick = function () {
    document.getElementById('angle').value = 2.5;
    document.getElementById('f').value = 329;
    document.getElementById('h').value = 4;
    document.getElementById('d').value = 7000;
}

document.querySelector('.variant2').onclick = function () {
    document.getElementById('angle').value = 2.7;
    document.getElementById('f').value = 330;
    document.getElementById('h').value = 8;
    document.getElementById('d').value = 4000;
}

document.querySelector('.variant3').onclick = function () {
    document.getElementById('angle').value = 3;
    document.getElementById('f').value = 332;
    document.getElementById('h').value = 12;
    document.getElementById('d').value = 2000;
}

document.querySelector('.variant4').onclick = function () {
    document.getElementById('angle').value = 3.2;
    document.getElementById('f').value = 334;
    document.getElementById('h').value = 15;
    document.getElementById('d').value = 1000;
}

document.querySelector('.variant5').onclick = function () {
    document.getElementById('angle').value = 3.5;
    document.getElementById('f').value = 336;
    document.getElementById('h').value = 17;
    document.getElementById('d').value = 500;
}

document.querySelector('.logo').onclick = function() {
    alert("ГУГА закрыт на карантин");
}

