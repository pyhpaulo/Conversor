
  
  function converterF() {
    var fah = parseFloat(document.getElementById("fah").value);
    var fah_for_celsius = ((fah - 32) * 5) / 9;
    document.getElementById("resultadoF").innerHTML =
      "O resultado é " + fah_for_celsius + "°Celsius ";
    console.log(fah_for_celsius);
  }

  function converterC() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var celsius_for_fah = (celsius * 9) / 5 + 32;
    document.getElementById("resultadoC").innerHTML =
      "O Resultado é " + celsius_for_fah + "Fahrenheit";
    console.log(celsius_for_fah);
  }
  
  function converterK() {
    var kelvin = parseFloat(document.getElementById("kel").value);
    var kel_for_celsius = kelvin + 273.15;
    document.getElementById("resultadoK").innerHTML =
      "O resultado é " + kel_for_celsius + "K";
    console.log(kel_for_celsius);
  }
  