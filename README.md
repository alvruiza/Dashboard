Proyecto muestra una propuesta de un dashboard para la app de inverisión Fintual. Contiene datos y gráficos de los resultados diarios de sus 4 fondos de inversión, así como datos de índices generales (UF, USD, UTM). Además muestra los resultados dentro del día del fondo Risky Norris. Por último en su página de inicio muestra un resumen de notcias del día.

* El dashboard tiene un modo oscuro y la capacidad de encoger el menú lateral para cuando se consulta en dispositivos móviles. Ambas opciones son almacenadas en el local storage para que el sitio recuerde las preferencias escogidas por el usuario cuando el sitio de vuelve a cargar.

* El dashboard consume muchas API distintas para obtener los datos de los distintos tableros, a las cuales se le hacen más de una solicitud en simultáneo. Debido a que trabaja con APIs públicas existe un límite de consultas diarias. Por este motivo, una vez agotadas las consultas diarias los gráficos no tienen de dónde obtener los datos, pese a que están bien programados. Esto es particularmente notorio con los gráficos de Fintual en la sección "Fondos" cuyo límite de consulta es muy bajo.

* En la sección "Fondos" se realiza un gráfico de series de tiempo para el comportamiento histórico del valor cuota de los fondos. Por ello, se trata de un gráfico que procesa más de mil datos. De acuerdo a lo que leí, chart.js tiene problemas con la carga en gráficos de muchos datos. En este caso al cargar el contenido de la página aparece el grafico con las etiquetas pero sin los datos. Para que aparezcan se debe apretar inspeccionar y acomodar el tamaño de la vista.

* Los datos de UF, USD y UTM son tomados también de una API pública que suele tener dificultades para devolver datos durante las mañanas y es muy común que al hacer fetch devuelva algún error 504. Pese a ello, los tableros que muestran estos datos suelen ser los que mejor funcionan de manera consistente.

* La sección de noticias también es dinámica y toma los datos desde una API con límite de consulta. Es común que alguno de los 3 artículos que muestra no logre cargar la foto de la noticia. Esto suele pasar porque la API devuelve noticias que no tienen link para fotos.

