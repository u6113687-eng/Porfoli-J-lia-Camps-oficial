console.log("script carregat");

/*REPRODUCCIÓ VIDEOS GALERIA DE PROJECTES*/

const items = document.querySelectorAll(".project-galeria");
console.log("targetes trobades:", items.length); // ha de dir 4

items.forEach(function (item) {
  const video = item.querySelector("video");
  if (!video) return;

  video.addEventListener("error", function () {
    console.log("ERROR de vídeo:", video.src, video.error);
  });

  item.addEventListener("mouseenter", function () {
    console.log("hover a", video.src, "readyState:", video.readyState);
    video.currentTime = 0;
    const promesa = video.play();
    if (promesa !== undefined) {
      promesa.catch(function (e) {
        console.log("play() ha fallat:", e);
      });
    }
  });

  item.addEventListener("mouseleave", function () {
    video.pause();
  });
});

/*INTERACCIÓ AMB JAVA SCRIPT, MOUSE*/
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.querySelectorAll("a").forEach((enllac) => {
  enllac.addEventListener("mouseenter", () => cursor.classList.add("gran"));
  enllac.addEventListener("mouseleave", () => cursor.classList.remove("gran"));
});
