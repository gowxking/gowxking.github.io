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
    let x0 = (1+k*(H-h))/(2*h*(k+Math.pow(h+H,2)));
    let ax= (0.5*(d+0.5*l)*Math.pow((k*(k+4*h*H)), 0.5))/(Math.pow((k+Math.pow(h+H,2)),2));
    let bx = (ax*Math.pow((k+Math.pow(h+H,2)) , 1/2))/(d+0.5*l);

    if (isNaN(ax)) {
        alert('Введи данные -_-')
    } 
    else if (isNaN(bx)) {
        alert('Введи данные -_-')
    }
    else if (isNaN(x0)) {
        alert('Введи данные -_-')
    }

    document.querySelector('.h0').setAttribute('value', Math.round(x0*100000)/100000 );
    document.querySelector('.ax').setAttribute('value', Math.round(ax*100000)/100000 );
    document.querySelector('.bx').setAttribute('value', Math.round(bx*100000)/100000 );
}


document.querySelector('.variant1').onclick = function () {
    document.getElementById('angle').setAttribute('value', 2.5);
    document.getElementById('f').setAttribute('value', 329);
    document.getElementById('h').setAttribute('value', 4);
    document.getElementById('d').setAttribute('value', 7000);
}

document.querySelector('.variant2').onclick = function () {
    document.getElementById('angle').setAttribute('value', 2.7);
    document.getElementById('f').setAttribute('value', 330);
    document.getElementById('h').setAttribute('value', 8);
    document.getElementById('d').setAttribute('value', 4000);
}

document.querySelector('.variant3').onclick = function () {
    document.getElementById('angle').setAttribute('value', 3);
    document.getElementById('f').setAttribute('value', 332);
    document.getElementById('h').setAttribute('value', 12);
    document.getElementById('d').setAttribute('value', 2000);
}

document.querySelector('.variant4').onclick = function () {
    document.getElementById('angle').setAttribute('value', 3.2);
    document.getElementById('f').setAttribute('value', 334);
    document.getElementById('h').setAttribute('value', 15);
    document.getElementById('d').setAttribute('value', 1000);
}

document.querySelector('.variant5').onclick = function () {
    document.getElementById('angle').setAttribute('value', 3.5);
    document.getElementById('f').setAttribute('value', 336);
    document.getElementById('h').setAttribute('value', 17);
    document.getElementById('d').setAttribute('value', 500);
}

document.querySelector('.logo').onclick = function() {
    alert("Ага попався")
}
