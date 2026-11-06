const os = require('os');
const pc = require('picocolors');

// Convierte bytes a GB con 2 decimales
function formatearBytes(bytes) {
  return (bytes / 1024 ** 3).toFixed(2) + ' GB';
}

// Convierte segundos a formato "Xh Ym"
function formatearUptime(segundos) {
  const h = Math.floor(segundos / 3600);
  const m = Math.floor((segundos % 3600) / 60);
  return `${h}h ${m}m`;
}

// Devuelve el porcentaje con color según su valor
function colorearPorcentaje(p) {
  const texto = p.toFixed(1) + ' %';
  if (p < 60) return pc.green(texto);
  if (p <= 85) return pc.yellow(texto);
  return pc.red(texto);
}

// Datos de memoria (en bytes)
const total = os.totalmem();
const libre = os.freemem();
const porcentaje = ((total - libre) / total) * 100;

// Lista de CPUs (una por núcleo)
const cpus = os.cpus();

// Informe: título en negrita y cian, etiquetas en gris (dim), valores en blanco/verde
console.log(pc.bold(pc.underline(pc.magenta('=== INFORME DEL SISTEMA ==='))));
console.log(pc.bgBlackBright('Equipo:       ') + pc.white(os.hostname()));
console.log(pc.bgBlackBright('Sistema:      ') + pc.white(`${os.type()} ${os.release()} (${os.arch()})`));
console.log(pc.bgBlackBright('Usuario:      ') + pc.green(os.userInfo().username));
console.log(pc.bgBlackBright('Procesador:   ') + pc.white(`${cpus[0].model} (${cpus.length} CPUs)`));
console.log(pc.bgBlackBright('Mem. total:   ') + pc.white(formatearBytes(total)));
console.log(pc.bgBlackBright('Mem. libre:   ') + pc.white(formatearBytes(libre)));
console.log(pc.bgBlackBright('Mem. usada:   ') + colorearPorcentaje(porcentaje));
console.log(pc.bgBlackBright('Tiempo activo:') + ' ' + pc.green(formatearUptime(os.uptime())));
