const intro = document.getElementById("intro");
const hero = document.getElementById("hero");
const openBtn = document.getElementById("openInvite");
const lucasSound = document.getElementById("lucasSound");
const oceanSound = document.getElementById("oceanSound");

if (hero) {
    hero.style.display = "none";
}


if (openBtn) {

  openBtn.addEventListener("click", () => {

    // toca áudio do Lucas
    if (lucasSound) {

      lucasSound.volume = 1;
      lucasSound.play();

    }


    // espera o áudio do Lucas terminar
    if (lucasSound) {

   openBtn.addEventListener("click", async () => {

    intro.style.opacity = "0";

    setTimeout(async () => {

        intro.style.display = "none";
        hero.style.display = "flex";

        if (oceanSound) {
            oceanSound.volume = 0.4;

            try {
                await oceanSound.play();

                soundPlaying = true;
                soundBtn.innerHTML = "🌊 Som do mar ativo";

            } catch (erro) {
                console.log("Não foi possível iniciar o áudio automaticamente.", erro);
            }
        }

    }, 1000);

});

    }

  });

}
// CONTAGEM REGRESSIVA
const targetDate = new Date("2026-07-22T18:30:00").getTime();

function countdown() {

    const now = new Date().getTime();
    let distance = targetDate - now;

    if (distance < 0) {
        distance = 0;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

setInterval(countdown, 1000);
countdown();


// CONFIRMAÇÃO WHATSAPP
// CONFIRMAÇÃO WHATSAPP
const confirmBtn = document.getElementById("confirm");

if (confirmBtn) {
    confirmBtn.addEventListener("click", () => {
        const food = document.getElementById("food").value;
        const fruitInput = document.getElementById("fruit").value; // Pega o que foi digitado

        // Verifica se a pessoa não escolheu nada
        if (!food || food.includes("Escolha")) {
            alert("Escolha o que você vai levar.");
            return;
        }

        // Cria a variável que vai guardar o item final
        let itemLevado = food;

        // Se a opção for "Frutas", ajusta o texto
        if (food === "Frutas") {
            // Se a pessoa esqueceu de digitar a fruta, avisa ela
            if (!fruitInput.trim()) {
                alert("Por favor, informe qual fruta você vai levar.");
                return;
            }
            // Junta a palavra "Frutas" com o que a pessoa digitou
            itemLevado = `Frutas (${fruitInput})`;
        }

        // Monta a mensagem final
        const mensagem = encodeURIComponent(
`Olá! Confirmo minha presença no Luau de 28 anos.

Vou levar: ${itemLevado}

Nos vemos lá!`
        );

        window.open(
            "https://wa.me/5571987081472?text=" + mensagem,
            "_blank"
        );
    });
}
// ==========================
// CONTROLE DO SOM DO MAR
// ==========================

const soundBtn = document.getElementById("soundBtn");


let soundPlaying = false;


if(soundBtn){

    soundBtn.addEventListener("click", ()=>{


        if(soundPlaying){

            oceanSound.pause();

            soundBtn.innerHTML = "🔇 Som desligado";

            soundPlaying = false;


        }else{


            oceanSound.play();

            soundBtn.innerHTML = "🌊 Som do mar ativo";

            soundPlaying = true;


        }


    });

}
// MOSTRAR CAMPO DE FRUTA QUANDO ESCOLHER FRUTAS

const foodSelect = document.getElementById("food");
const fruitInput = document.getElementById("fruit");


if(foodSelect && fruitInput){

    foodSelect.addEventListener("change", () => {

        if(foodSelect.value === "Frutas"){

            fruitInput.style.display = "block";

        } else {

            fruitInput.style.display = "none";
            fruitInput.value = "";

        }

    });

}