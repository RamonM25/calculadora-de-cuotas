
function calcularCuotas() {
    let monto = parseFloat(document.getElementById('monto').value);
    let cuotas = parseInt(document.getElementById('cuotas').value);
    let interes = parseFloat(document.getElementById('interes').value);

    if (isNaN(monto) || isNaN(cuotas) || isNaN(interes) || monto <= 0 || cuotas <= 0 || interes <= 0) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    let tasaInteres = interes / 100;
    let cuotaInteres = monto * tasaInteres / cuotas;
    let pagoMensual = (monto / cuotas) + cuotaInteres;
    
    let resultado = `Pago mensual por cuota: $${pagoMensual.toFixed(2)}`;

    document.getElementById('resultado').innerHTML = resultado;
}