//Для постоянного перетаскивания
// $( function() {
//     $( "#movableElement" ).draggable();
//   } );

const dragElement = document.querySelector('#movableElement');

let offsetX = 0, offsetY = 0;
let isDragging = false;

            dragElement.addEventListener('mousedown', (e) => {
                isDragging = true;
                offsetX = e.clientX - dragElement.getBoundingClientRect().left;
                offsetY = e.clientY - dragElement.getBoundingClientRect().top;
                element.style.zIndex = 1000; 
            });

            //Событие mousemove - перетаскивание
            dragElement.addEventListener('mousemove', (e) => {
                if (isDragging) {
                    // Устанавливаем новые координаты элемента
                    dragElement.style.left = `${e.clientX - offsetX}px`;
                    dragElement.style.top = `${e.clientY - offsetY}px`;
                }
            });

            //Событие mouseup - окончание перетаскивания
            dragElement.addEventListener('mouseup', () => {
                if (isDragging) {
                    isDragging = false;
                    dragElement.style.zIndex = ""; 
                }
            });
