document.getElementById('drawButton').addEventListener('click', drawLottoNumbers);

function drawLottoNumbers() {
    const resultDiv = document.getElementById('result');
    const balls = resultDiv.getElementsByClassName('ball');
    const numbers = [];

    while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    numbers.sort((a, b) => a - b);

    for (let i = 0; i < balls.length; i++) {
        balls[i].textContent = numbers[i];
    }
}
