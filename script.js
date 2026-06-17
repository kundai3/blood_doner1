function animateValue(id, target) {

    let current = 0;
    const increment = target / 100;

    const interval = setInterval(() => {

        current += increment;

        if (current >= target) {
            document.getElementById(id).innerText = target;
            clearInterval(interval);
        } else {
            document.getElementById(id).innerText = Math.floor(current);
        }

    }, 20);
}

animateValue("donorsCount", 500);
animateValue("requestsCount", 120);
animateValue("savedCount", 80);
