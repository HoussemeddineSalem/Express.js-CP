const time = () => {

    const today = new Date();
    const currentDay = today.getDay();
    const currentHour = today.getHours();

    return {

        currentDay,
        currentHour
    }
}

module.exports = time;