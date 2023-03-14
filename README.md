# EJERCICIO - PÁGINA DE NOTICIAS

Objetivo: Creación de una aplicación de noticias utilizando React Router y que, además, tenga los datos mockeados, es decir, no haremos llamadas a servicios externos, sino que los mockearemos.

## FECHA FINAL: VIERNES 17 DE MARZO.

El objetivo será subir el contenido a Github y que nos devuelva páginas para estas 3 categorías: deportes, tecnología y economía (\*LOS TOPICS PUEDEN SER OTROS, SE PONEN ESOS 3 A MODO DE EJEMPLO). 

Los archivos mockeados tendrán que tener una estructura similar a la siguiente:
PASO 1) CREAR LOS MOCKS

```
"articles": [
{
"title": "título_noticia",
"author": "Víctor Trevijano",
"published_date": "2023-03-03 09:01:52",
"published_date_precision": "full",
"link": "enlace_noticia",
"clean_url": "periódico.es",
"summary": "cuerpo de noticia",
"topic": "sport",
"country": "ES",
"language": "es",
"is_opinion": false,
"twitter_account": null,
"\_score": null,
"\_id": "1"
},

```
Podéis hacer los mocks con un .json o a través de un archivo js. Este es solo de ejemplo, podéis quitar o añadir propiedades a vuestro antojo
😚

## EJERCICIO - PÁGINA DE NOTICIAS 1

PASO 2)
Crear un componente principal "App" que actúe como contenedor de la aplicación y utilice React Router para gestionar la navegación entre diferentes páginas.

Deberá tener las siguientes rutas y componentes asociados:
1. La raíz (/) pintará el componente Home en el que podrás meter el contenido que desees y acuérdate de hacer un nav que contenga los links a las diferentes secciones
2. /noticias pintará el componente NoticiasHome que tendrá un selector de categorías 
3. Añade una página 404 para todas las demás urls
4. El resto de páginas y rutas podéis intuirlas con la imagen que os hemos adjuntado un poco más arriba.

PASO 3 Crea el componente NoticiasHome, este mostrará botones para navegar a cada una de las categorias de noticias:

```
/noticias/sports
/noticias/tech
/noticias/economy
```

Como puedes imaginar, tendrás que enrutar cada una de estas páginas también para que se visualice el contenido correctamente.

PASO 4)
Crea el componente Noticias. Este será el encargado de traer los datos del mock y renderizar un listado de noticias de diferentes topics (deporte, tecnología y economía).
EJERCICIO - PÁGINA DE NOTICIAS 2

## EXTRAS:

Se considerarán como extras las siguientes implementaciones:

1. Se valorará una buena arquitectura basada en componentes, organización de carpetas, etc.
En lugar de usar mocks, se recomienda usar una página como mockAPI que nos permite hacer nuestra propia api de forma sencilla, os dejamos el enlace para que le echéis un ojo, este apartado extra es altamente recomendado. https://mockapi.io/
2. Utilizar una librería de componentes como material ui, chakra ui o algún framework de CSS como tailwind o algunas librerías como emotion.js o styled components. La maquetación no tiene que ser perfecta, pero empezar a usar estos elementos nos ayudará mucho en un futuro.
3. Implementar un footer en el que usaremos un texto cualquiera junto a nuestro nombre “artístico” y los iconos que más os gusten sacados de la librería React Icons (previamente tendréis que echarle un ojo a cómo se usa la librería)
4. Implementar una página de contacto cuya ruta sea /contact. En ella podréis meter el contenido que queráis.
5. En la ruta /noticias (con el componente Noticias correspondiente), se valorará que la inserción de noticias sea de forma aleatoria. Es decir, implementar un factor random a la hora de mostrar las noticias.
6. Implementar un input de tipo texto en el componente Noticias en el que podremos filtar las noticias en base a su propiedad title.
7. Implementar Eslint y prettier.
8. Rutas protegidas

