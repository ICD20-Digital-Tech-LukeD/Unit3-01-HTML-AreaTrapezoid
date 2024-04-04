
function areaOfTrapazoid() {
  let sideA = document.getElementById("side-a").value
  let sideB = document.getElementById("side-b").value
  let sideH = document.getElementById("side-h").value
  let area = (parseFloat(sideA) + parseFloat(sideB)) * parseFloat(sideH) / 2;
  document.getElementById("result").innerHTML = 'The area is ' + area.toFixed(2) + ' cm²';
    }
