const os = require('node:os')
const fs = require('node:fs')
const pc = require('picocolors')

function formatearBytes(bytes) {
  return (bytes / 1024 / 1024 / 1024).toFixed(2) + ' GB'
}

function formatearUptime(segundos) {
  const horas = Math.floor(segundos / 3600)
  const minutos = Math.floor((segundos % 3600) / 60)
  return horas + 'h ' + minutos + 'm'
}

function colorearPorcentaje(porcentaje) {
  const texto = porcentaje.toFixed(1) + '%'
  if (porcentaje < 60) {
    return pc.green(texto)
  } else if (porcentaje <= 85) {
    return pc.yellow(texto)
  } else {
    return pc.red(texto)
  }
}

const total = os.totalmem()
const libre = os.freemem()
const porcentajeUsado = ((total - libre) / total) * 100

// 1. Texto PLANO (sin colores) para guardar en el archivo
const textoPlano =
  'Informe del sistema\n' +
  '-------------------\n' +
  'Equipo: ' + os.hostname() + '\n' +
  'Sistema: ' + os.type() + ' ' + os.release() + ' ' + os.arch() + '\n' +
  'Usuario: ' + os.userInfo().username + '\n' +
  'Procesador: ' + os.cpus()[0].model + ' (' + os.cpus().length + ' CPUs)\n' +
  'Memoria total: ' + formatearBytes(total) + '\n' +
  'Memoria libre: ' + formatearBytes(libre) + '\n' +
  'Memoria usada: ' + porcentajeUsado.toFixed(1) + '%\n' +
  'Tiempo activo: ' + formatearUptime(os.uptime()) + '\n'

// 2. Mostramos por consola con colores
console.log(pc.bold(pc.cyan('Informe del sistema')))
console.log('-------------------')
console.log(pc.dim('Equipo: ') + pc.white(os.hostname()))
console.log(pc.dim('Sistema: ') + pc.white(os.type() + ' ' + os.release() + ' ' + os.arch()))
console.log(pc.dim('Usuario: ') + pc.white(os.userInfo().username))
console.log(pc.dim('Procesador: ') + pc.white(os.cpus()[0].model + ' (' + os.cpus().length + ' CPUs)'))
console.log(pc.dim('Memoria total: ') + pc.white(formatearBytes(total)))
console.log(pc.dim('Memoria libre: ') + pc.white(formatearBytes(libre)))
console.log(pc.dim('Memoria usada: ') + colorearPorcentaje(porcentajeUsado))
console.log(pc.dim('Tiempo activo: ') + pc.green(formatearUptime(os.uptime())))

// 3. informe.txt se sobrescribe en cada ejecucion
fs.writeFileSync('./informe.txt', textoPlano)

// 4. historial.log: se anade una linea por ejecucion
// El formato 'sv-SE' da la fecha como 2026-11-01 10:32:15
const fecha = new Date().toLocaleString('sv-SE')
const linea = fecha + ' | RAM usada: ' + porcentajeUsado.toFixed(0) + '%\n'
fs.appendFileSync('./historial.log', linea)

console.log()
console.log(pc.green('Informe guardado en informe.txt'))