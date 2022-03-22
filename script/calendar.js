const container = document.getElementById('container')
const controlsBox = document.getElementById('controls')
const eventsBox = document.getElementById('events')
const searchDateInput = document.getElementById('searchDateInput')

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

searchDateInput.addEventListener('change', searchEvents)

container.onload = updateEvents()

function createCalendar() {

}

function updateEvents() {
    for (let i = 1; allEvents['event' + i]; i++) {
        //box
        var newEvent = document.createElement('div')
        newEvent.id = 'eventBox' + i
        newEvent.classList.add('eventBox')
        eventsBox.appendChild(newEvent)
        //title
        var newEventTitle = document.createElement('h1')
        newEventTitle.classList.add('eventTitle')
        newEventTitle.innerHTML = '► ' + allEvents['event' + i]['title']
        newEvent.appendChild(newEventTitle);
        //location
        var newEventLocation = document.createElement('h2')
        var mapPinIcon = document.createElement('img')
        mapPinIcon.src = '../media/mapPin.png'
        mapPinIcon.classList.add('mapPinIcon')
        newEvent.appendChild(mapPinIcon)
        newEventLocation.innerHTML = allEvents['event' + i]['location']
        newEventLocation.classList.add('eventLocation')
        newEvent.appendChild(newEventLocation)
        //info
        var newEventInfo = document.createElement('h2')
        newEventInfo.classList.add('eventInfo')
        newEventInfo.innerHTML = allEvents['event' + i]['info']
        newEvent.appendChild(newEventInfo)
        //time
        var newEventTime = document.createElement('h1')
        newEventTime.classList.add('eventTime')
        newEventTime.innerHTML = allEvents['event' + i]['time']
        newEvent.appendChild(newEventTime)
        //date
        var newEventDate = new Date(allEvents['event' + i]['date'])
        //day
        var newEventDay = document.createElement('h2')
        newEventDay.classList.add('eventDay')
        newEventDay.innerHTML = weekdays[newEventDate.getDay()]
        newEvent.appendChild(newEventDay)
        //month
        var newEventMonth = document.createElement('h2')
        newEventMonth.classList.add('eventMonth')
        newEventMonth.innerHTML = month[newEventDate.getMonth()] + " " + newEventDate.getDate()
        newEvent.appendChild(newEventMonth)
    }
}

function searchEvents() {
    document.getElementById('noneFound').style.display = 'none'
    for (let i = 1; allEvents['event' + i]; i++) {
        if (allEvents['event' + i]['date'] != searched) {
            document.getElementById('eventBox' + i).style.display = ''
            document.getElementById('eventBox' + i).classList.remove('eventClose')
        }
    }
    let amountFound = 0
    var searched = searchDateInput.value
    if (searched != '') {
        for (let i = 1; allEvents['event' + i]; i++) {
            if (allEvents['event' + i]['date'] != searched) {
                document.getElementById('eventBox' + i).style.display = 'none'
            } else {
                amountFound++
            }
            
            var today = new Date(searched)
            var yesterday = new Date(searched)
            var tomorrow = new Date(searched)
            yesterday.setDate(yesterday.getDate() - 1)
            tomorrow.setDate(tomorrow.getDate() + 1)
            if (((new Date(allEvents['event' + i]['date'])).getTime() == yesterday.getTime() || (new Date(allEvents['event' + i]['date'])).getTime() == tomorrow.getTime()) && (new Date(allEvents['event' + i]['date'])).getTime() != today.getTime()) {
                document.getElementById('eventBox' + i).classList.add('eventClose')
                document.getElementById('eventBox' + i).style.display = ''
                amountFound++
            }
        }
        if (amountFound == 0) {
            document.getElementById('noneFound').style.display = 'block'
        }
    }
}