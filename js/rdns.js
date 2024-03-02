// var rR = [ "r", "R"];
// var rA = [ "a", "A"];
// var rN = [ "n", "N"];
// var rD = [ "d", "D"];
// var rO = [ "o", "0", "O"];
// var rM = [ "m", "M"];
// var rE = [ "e", "E", "3"];
// var rS = [ "s", "S"];
// var rS = [ "s", "S"];

// setInterval(changeText, 150);

// function changeText() 
// {
//     var rR_id = Math.floor(Math.random() * rR.length);
//     document.getElementById('rR_id').innerHTML = rR[rR_id];

//     var rA_id = Math.floor(Math.random() * rA.length);
//     document.getElementById('rA_id').innerHTML = rA[rA_id];

//     var rN_id = Math.floor(Math.random() * rN.length);
//     document.getElementById('rN_id').innerHTML = rN[rN_id];

//     var rD_id = Math.floor(Math.random() * rD.length);
//     document.getElementById('rD_id').innerHTML = rD[rD_id];

//     var rO_id = Math.floor(Math.random() * rO.length);
//     document.getElementById('rO_id').innerHTML = rO[rO_id];

//     var rM_id = Math.floor(Math.random() * rM.length);
//     document.getElementById('rM_id').innerHTML = rM[rM_id];

//     var rE_id = Math.floor(Math.random() * rE.length);
//     document.getElementById('rE_id').innerHTML = rE[rE_id];

//     var rS_id = Math.floor(Math.random() * rS.length);
//     document.getElementById('rS_id').innerHTML = rS[rS_id];

//     var rS_id2 = Math.floor(Math.random() * rS.length);
//     document.getElementById('rS_id2').innerHTML = rS[rS_id2];

// }

var elem = document.getElementById('rdns');

setInterval(changeText, 150);

function changeText() {
    elem.textContent = elem.textContent.split('').map(
        (v) =>Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()
    ).join('');
}