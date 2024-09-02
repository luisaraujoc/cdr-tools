document.addEventListener("DOMContentLoaded", () => {
  // signature metodo
  const initializeSignatureCanvas = (canvasId, clearButtonId) => {
    const brush = {
      active: false,
      move: false,
      pos: { x: 0, y: 0 },
      posPrev: null,
      color: "black",
    };
    const screen = document.querySelector(canvasId);
    const context = screen.getContext("2d");

    screen.width = 600;
    screen.height = 600;

    const drawLine = (line) => {
      context.beginPath();
      context.moveTo(line.posPrev.x, line.posPrev.y);
      context.lineTo(line.pos.x, line.pos.y);
      context.stroke();
    };

    screen.onmousedown = (event) => {
      brush.active = true;
    };
    screen.onmouseup = (event) => {
      brush.active = false;
    };

    screen.onmousemove = (event) => {
      brush.pos.x = event.clientX;
      brush.pos.y = event.clientY;
      brush.move = true;
    };

    const drawCycle = () => {
      if (brush.active && brush.move && brush.posPrev) {
        drawLine({ pos: brush.pos, posPrev: brush.posPrev });
        brush.move = false;
      }
      brush.posPrev = { x: brush.pos.x, y: brush.pos.y };

      setTimeout(drawCycle, 1);
    };

    drawCycle();

    const cButton = document.querySelector(clearButtonId);
    cButton.onclick = () => {
      context.clearRect(0, 0, screen.width, screen.height);
    };
  };

  // Inicializa os campos de assinatura
  initializeSignatureCanvas("#screen-paciente", "#clear-paciente");
  initializeSignatureCanvas("#screen-atendente", "#clear-atendente");
});

// document.addEventListener('DOMContentLoaded', () => {

//     const brush = {
//         active: false,
//         move: false,
//         pos: {x: 0, y: 0},
//         posPrev: null,
//         color: 'black',
//     };
//     const screen = document.querySelector('#screen-paciente');
//     const context = screen.getContext('2d');

//     screen.width = 600;
//     screen.height = 600;

//     const drawLine = (line) => {
//         context.beginPath();
//         context.moveTo(line.posPrev.x, line.posPrev.y);
//         context.lineTo(line.pos.x, line.pos.y);
//         context.stroke();
//     }

//     const getTouchPos = (touchEvent) => {
//         const rect = screen.getBoundingClientRect();
//         return {
//             x: touchEvent.touches[0].clientX - rect.left,
//             y: touchEvent.touches[0].clientY - rect.top,
//         };
//     }

//     screen.onmousedown = (event) => { brush.active = true };
//     screen.onmouseup = (event) => { brush.active = false };
//     screen.onmousemove = (event) => {
//         brush.pos.x = event.clientX;
//         brush.pos.y = event.clientY;
//         brush.move = true;
//     };

//     screen.ontouchstart = (event) => {
//         brush.active = true;
//         brush.pos = getTouchPos(event);
//         event.preventDefault();
//     };
//     screen.ontouchend = (event) => {
//         brush.active = false;
//         brush.posPrev = null;
//         event.preventDefault();
//     };
//     screen.ontouchmove = (event) => {
//         brush.pos = getTouchPos(event);
//         brush.move = true;
//         event.preventDefault();
//     };

//     const drawCycle = () => {
//         if (brush.active && brush.move && brush.posPrev) {
//             drawLine({ pos: brush.pos, posPrev: brush.posPrev });
//             brush.move = false;
//         }
//         brush.posPrev = { x: brush.pos.x, y: brush.pos.y };
//         setTimeout(drawCycle, 1);
//     };

//     drawCycle();

//     const cButton = document.querySelector('#clear-paciente');
//     cButton.onclick = () => {
//         context.clearRect(0, 0, screen.width, screen.height);
//     };

// });
