let activityOfDay = [
    {
        "day": "monday",
        "exercise": "swimming"
    },
    {
        "day": "tuesday",
        "exercise": "running"
    },
    {
        "day": "wednesday",
        "exercise": "weight-training"
    },
    {
        "day": "thursday",
        "exercise": "hiking"
    },
    {
        "day": "friday",
        "exercise": "stretching"
    }
]

// console.log(activityOfDay[0].day)


function exercise(day) {
    // loop through the activities

    // select the day from the object

    for (let i = 0; i < activityOfDay.length; i++) {
        if (activityOfDay[i].day === day.toLowerCase()) {
            return activityOfDay[i].exercise
        }
    }

}

console.log('Todays activity is: ' + exercise("tuesday"))




// another way to do it 


function excercise(x) {
    function day() {
        return "Today's excercise is"
    }
    return (day()) + x

}

console.log(excercise('swimming'))