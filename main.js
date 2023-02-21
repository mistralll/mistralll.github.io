const img = document.getElementById("img_szppi");
img.animate(
    [
        {transform: 'rotateX(0deg)'},
        {transform: 'rotateX(360deg)'}
    ],
    {
        fill: 'backwards',
        duration: 1000,
        iterations: Infinity,
    },
)