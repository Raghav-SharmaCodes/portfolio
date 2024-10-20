const name = "RAGHAV SHARMA";
const description = `Hello. I'm a student studying Computer Science at SRMIST. I have a passion for building simple technological solutions to everyday problems.`;

document.addEventListener('DOMContentLoaded', function () {
    typeWriter(name, 'name', 100);
    typeWriter(description, 'description', 9);
});

function typeWriter(text, id, duration) {
    let i = 0;
    const interval = setInterval(() => {
        document.getElementById(id).innerHTML += text[i];
        i++;
        if (i === text.length) {
            document.getElementById(`${id}-typewriter`).innerHTML = "";
            clearInterval(interval);
        }
    }, duration);
}