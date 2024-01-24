function toggle() {
    const btn = document.getElementsByClassName('button')[0].textContent;

    if (btn === "More") {
        document.getElementsByClassName('button')[0].textContent = "Less";

        let div = document.getElementById('extra').style.display = 'block';
    } else if (btn === "Less") {
        document.getElementsByClassName('button')[0].textContent = "More";

        let div = document.getElementById('extra').style.display = 'none';
    }
}