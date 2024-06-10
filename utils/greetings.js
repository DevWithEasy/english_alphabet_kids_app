function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
    console.log(hour)

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    return greeting;
}

export default getGreeting;