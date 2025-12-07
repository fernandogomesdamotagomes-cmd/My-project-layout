//  const overlay = document.getElementById("overlay");
//       const overlayImg = document.getElementById("overlayImg");
//       const images = document.querySelectorAll(".banner .slider .item img");

//       function showOverlay(src) {
//         overlayImg.src = src;
//         overlay.style.display = "flex";
//         overlay.setAttribute("aria-hidden", "false");
//         document.body.style.overflow = "hidden";
//       }

//       function hideOverlay() {
//         overlay.style.display = "none";
//         overlay.setAttribute("aria-hidden", "true");
//         overlayImg.removeAttribute("src");
//         document.body.style.overflow = "";
//       }

//       images.forEach((img) => {
//         img.addEventListener("mousedown", (e) => {
//           e.preventDefault();
//           showOverlay(img.src);
//         });
//         img.addEventListener(
//           "touchstart",
//           (e) => {
//             e.preventDefault();
//             showOverlay(img.src);
//           },
//           { passive: false }
//         );
//       });

//       document.addEventListener("mouseup", hideOverlay);
//       document.addEventListener("touchend", hideOverlay);
//       document.addEventListener("touchcancel", hideOverlay);

//       // Também permite fechar clicando no fundo
//       overlay.addEventListener("click", hideOverlay);