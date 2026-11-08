const fs = require('node:fs')
const path = require('node:path')
const pc = require('picocolors')

// Si no pasamos argumento, usamos la carpeta actual
const carpeta = process.argv[2] || '.'

// Si la ruta no existe, mostramos error y salimos
if (!fs.existsSync(carpeta)) {
  console.error(pc.bgRed('Error: la ruta ' + carpeta + ' no existe'))
  process.exit(1)
}

// Si la ruta es un archivo y no una carpeta, tambien es un error
if (!fs.statSync(carpeta).isDirectory()) {
  console.error(pc.bgRed('Error: ' + carpeta + ' no es una carpeta'))
  process.exit(1)
}

const elementos = fs.readdirSync(carpeta, { withFileTypes: true })

let numCarpetas = 0
let numArchivos = 0
let tamanoTotal = 0

elementos.forEach(elemento => {
  if (elemento.isDirectory()) {
    console.log(pc.blue(elemento.name + '/'))
    numCarpetas++
  } else {
    const rutaCompleta = path.join(carpeta, elemento.name)
    const tamano = fs.statSync(rutaCompleta).size
    const tamanoTexto = (tamano / 1024).toFixed(1) + ' KB'

    if (elemento.name.startsWith('.')) {
      // Archivo oculto: todo en gris
      console.log(pc.gray(elemento.name + '  ' + tamanoTexto))
    } else {
      console.log(pc.green(elemento.name) + '  ' + pc.gray(tamanoTexto))
    }

    numArchivos++
    tamanoTotal = tamanoTotal + tamano
  }
})

console.log()
console.log(
  numCarpetas + ' carpetas, ' +
  numArchivos + ' archivos, ' +
  (tamanoTotal / 1024).toFixed(1) + ' KB en total'
)