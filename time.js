const time = () => {

    const today = new Date();
    const currentDay = today.getDay();
    const currentHour = today.getHours();

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateFormated = today.toLocaleDateString("en-US", options);
    let areWeWorking = false;

    if (currentDay !== 6 && currentDay !== 7 && currentHour < 20 && currentHour > 9) {
        areWeWorking = true;
    }
    return {
        areWeWorking,
        dateFormated
    };


}

module.exports = time;