const container = document.getElementById('container')
const controlsBox = document.getElementById('controls')
const eventsBox = document.getElementById('events')
container.onload = updateEvents()

function updateEvents() {
    console.log('test')
    for (let i = 1; allEvents['event' + i]; i++) {
        var newEvent = document.createElement('div')
        newEvent.id = 'eventBox' + i
        newEvent.classList.add('eventBox')
        var newEventTitle = document.createElement('h1')
        newEventTitle.innerHTML = '► ' + allEvents['event' + i]['title']
        newEvent.appendChild(newEventTitle);
        eventsBox.appendChild(newEvent)
        var newEventLocation = document.createElement('h2')
        newEventLocation.innerHTML = '📌' + allEvents['event' + i]['location']
        newEventLocation.classList.add('eventLocation')
        newEvent.appendChild(newEventLocation)
    }
}