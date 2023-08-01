const carouselSlide = document.querySelector('.carousel-slide'); /*representa el contenedor del carrusel que contiene todas las imágenes.*/
const carouselImages = document.querySelectorAll('.carousel-slide img');/*selecciona todos los elementos `<img>` que están dentro del contenedor del carrusel y los almacena en la variable `carouselImages`*/
const prevBtn = document.querySelector('.prev-btn');/*selecciona el botón con la clase "prev-btn" y lo almacena en la variable `prevBtn`*/
const nextBtn = document.querySelector('.next-btn'); /*selecciona el botón con la clase "next-btn" y lo almacena en la variable `nextBtn`*/

let counter = 1;/*Esta variable se utilizará para realizar un seguimiento de la posición actual del carrusel.*/
const slideWidth = carouselImages[0].clientWidth; /*Se declara y se inicializa una variable `slideWidth` con el valor del ancho de la primera imagen en el carrusel*/

carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`; /*Esta línea establece inicialmente la posición del carrusel aplicando una transformación CSS.*/

/*`translateX`  desplazara horizontalmente el carrusel según el valor de `counter` multiplicado por el ancho de la imagen (`slideWidth`), como `counter` se inicializa en 1, el carrusel se mueve un ancho de imagen hacia la izquierda.
*/

nextBtn.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) return;
  /*Esta línea comprueba si `counter` es igual o mayor que el índice de la última imagen del carrusel (`carouselImages.length - 1`). Si es verdadero, significa que hemos llegado a la última imagen y no necesitamos avanzar más. El `return` detiene la ejecución de la función en ese punto.*/
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  /*Se establece una transición suave para el carrusel cuando se cambia de imagen. La propiedad "transform" se animará durante 0.4 segundos con un efecto de aceleración suave (ease-in-out).*/
  counter++;/*Se incrementa el valor de `counter` en 1 para avanzar a la siguiente imagen.*/
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`; /*Esto desplaza el carrusel hacia la izquierda, mostrando la siguiente imagen.
*/
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  /*comprueba si `counter` es igual o menor que 0. Si es verdadero, significa que estamos en la primera imagen y no necesitamos retroceder más. El `return` detiene la ejecución de la función en ese punto.*/
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  /*Se decrementa el valor de `counter` en 1 para retroceder a la imagen anterior.*/
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  
});/*Esto desplaza el carrusel hacia la derecha, mostrando la imagen anterior.*/

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
});
