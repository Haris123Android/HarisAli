let data = [
    {
        player : "Aksa",
        score : 80
    },
    {
        player: "Tamanna",
        score: 79
    }
]
let logNameBtn = document.getElementById("logName-btn")

logNameBtn.addEventListener("click", () => {
    console.log(data[0].score)
})
