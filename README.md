Prueba técnica Desarrolladores
Queremos saber cómo resolverías tú uno de los problemas con los que nos hemos encontrado
en el pasado en Foodology. Tienes máximo 3 horas para desarrollar una solución y enviárnosla
de nuevo por correo. Si se te acaba el tiempo envíanos tu avance. Siéntete libre de usar
cualquier lenguaje, framework o librerías que creas convenientes. Puedes entregar en un
repositorio de github, un codepen, heroku, o como mejor te parezca.

En Foodology operamos múltiples marcas de restaurantes desde una misma cocina oculta.
Queremos poder monitorear constantemente el estado y posición de nuestros restaurantes
dentro de nuestras plataformas aliadas.

En este caso debes implementar un programa que calcule y verifique si uno (cualquiera) de
nuestros restaurantes está visible en rappi en 4 puntos a 5km a la redonda de nuestra cocina de
Cali y nos diga la posición promedio en la que está apareciendo en el listado. El API público de
rappi no tiene métodos que den esa información, por lo que debes obtenerla de otra manera:
interceptando la página de rappi.
Nuestra cocina está en\

{
"lat": 3.4242814233739614,
"lon": -76.54170365914733
} T


en en cuenta:
● Dependiendo la hora del día que hagas la prueba algunos de nuestros restaurantes
pueden no estar disponibles (algunos abren a las 6am, otros al medio día, y cierran entre
10pm y 12am).
● La mejor solución es la más sencilla, sé consciente del límite de tiempo. Un scrapper
puede no ser la mejor idea.
● Si tu solución no está en node, por favor envíanos instrucciones para ejecutarla.