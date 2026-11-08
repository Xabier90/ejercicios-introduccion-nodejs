# ejercicios-introduccion-nodejs
Ejercicios de node.js practicar

Integrantes: Aroa Hernandez, Marta Rivas y Xabier Iglesias


Instalación:
cd ejercicio1-informe-sistema
npm init -y
npm install picocolors
node sistema.js


Ejercicio 1: Informe del sistema

Carpeta: ejercicio1-informe-sistema

Programa que muestra por consola un informe del sistema con el nombre del equipo, el sistema operativo, el usuario, el procesador, la memoria y el tiempo activo. Usa el modulo `os` y la libreria `picocolors`. El porcentaje de memoria usada cambia de color segun su valor: verde si es menor del 60%, amarillo entre 60% y 85% y rojo si es mayor del 85%.

para ejecutarlo:

cd ejercicio1-informe-sistema
node sistema.js

<img width="1152" height="232" alt="image" src="https://github.com/user-attachments/assets/5e4d1370-2f6f-4eb1-9669-5a4b6b4deab9" /><br>


Ejercicio 2: Explorador de carpetas

Carpeta: `ejercicio2-explorador-carpetas`

Programa que recibe una ruta como argumento y muestra su contenido. Las carpetas salen en azul con una barra al final, los archivos en verde con su tamano en gris y los archivos ocultos en gris. Al final muestra un resumen con el numero de carpetas, archivos y tamano total. Si la ruta no existe muestra un error con fondo rojo y termina el programa. Usa los modulos `fs` y `path` y la libreria `picocolors`.

Para ejecutarlo:

cd ejercicio2-explorador-carpetas
node listar.js ./mi-carpeta
node listar.js

Si no se pasa ruta, usa la carpeta actual.

<img width="1185" height="176" alt="image" src="https://github.com/user-attachments/assets/815c65f1-34bf-42e5-a29a-c96461d2963c" /><br>

Ejercicio 3: Informe a archivo con historial

Carpeta: ejercicio3-informe-archivo

Amplia el ejercicio 1. Ademas de mostrar el informe por pantalla, lo guarda en `informe.txt`, que se sobrescribe en cada ejecucion, y anade una linea al archivo `historial.log` con la fecha y el porcentaje de RAM usada. El texto que se guarda en el archivo no lleva colores, los colores solo se aplican en la consola. Usa los modulos `os` y `fs` y la libreria `picocolors`.

Para ejecutarlo:

cd ejercicio3-informe-archivo
node informe.js

<img width="1148" height="302" alt="image" src="https://github.com/user-attachments/assets/1b20da78-b963-4fa2-8658-b3d892dbff5f" />
<br>
<img width="1037" height="692" alt="image" src="https://github.com/user-attachments/assets/837830cc-9b34-47c8-9312-c8a655ce1982" /><br>
<img width="1431" height="700" alt="image" src="https://github.com/user-attachments/assets/e6427530-8498-42ac-836c-49f6e36b2a42" />


