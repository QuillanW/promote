const container = document.getElementById('container')
const controlsBox = document.getElementById('controls')
const eventsBox = document.getElementById('events')
const searchDateInput = document.getElementById('searchDateInput')

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentMonth = 0
let clickedButton

container.onload = updateEvents(), createCalendar()

function createCalendar() {
    var newMonthSelectorBox = document.createElement('div')
    newMonthSelectorBox.classList.add('monthSelectorBox')

    var newMonthSelectorBack = document.createElement('h1')
    newMonthSelectorBack.id = 'monthSelectorBack'
    newMonthSelectorBack.classList.add('monthSelector')
    newMonthSelectorBack.innerHTML = '◄'
    newMonthSelectorBack.addEventListener('click', changeMonth)
    newMonthSelectorBox.appendChild(newMonthSelectorBack)

    var newMonthDisplay = document.createElement('h1')
    newMonthDisplay.innerHTML = 'January'
    newMonthDisplay.id = 'monthDisplay'
    newMonthSelectorBox.appendChild(newMonthDisplay)

    var newMonthSelectorNext = document.createElement('h1')
    newMonthSelectorNext.id = 'monthSelectorNext'
    newMonthSelectorNext.classList.add('monthSelector')
    newMonthSelectorNext.innerHTML = '►'
    newMonthSelectorNext.addEventListener('click', changeMonth)
    newMonthSelectorBox.appendChild(newMonthSelectorNext)

    controlsBox.appendChild(newMonthSelectorBox)
    
    var newCalendarContainer = document.createElement('div')
    newCalendarContainer.id = 'calendarContainer'
    for (let i = 1; i <= 31; i++) {
        var newCalendarDay = document.createElement('div')
        newCalendarDay.id = 'day' + i
        newCalendarDay.classList.add('calendarDay')
        var newCalenderDayText = document.createElement('p')
        newCalenderDayText.innerHTML = i
        newCalenderDayText.id = 'dayText'
        newCalendarDay.appendChild(newCalenderDayText)
        newCalendarDay.addEventListener('click', searchEvents)
        newCalendarContainer.appendChild(newCalendarDay)
    }
    
    controlsBox.appendChild(newCalendarContainer)

    var newClearButton = document.createElement('div')
    newClearButton.id = 'clearButton'
    newClearButton.addEventListener('click', searchEvents)
    newClearButton.innerHTML = 'Clear Selection'

    controlsBox.appendChild(newClearButton)
}

function changeMonth() {
    if (event.target.id.replace('monthSelector', '') == 'Next') {
        currentMonth++
    } else {
        currentMonth--
    }
    if (currentMonth == -1) {
        currentMonth = 11
    } else if (currentMonth == 12) {
        currentMonth = 0
    }
    
    document.getElementById('monthDisplay').innerHTML = month[currentMonth]

    document.getElementById('day29').style.display = ''
    document.getElementById('day30').style.display = ''
    document.getElementById('day31').style.display = ''

    let monthFix = 0

    if (currentMonth > 6) {
        monthFix = 1
    }

    if (currentMonth == 1) {
        document.getElementById('day29').style.display = 'none'
        document.getElementById('day30').style.display = 'none'
        document.getElementById('day31').style.display = 'none'
    } else if ((currentMonth + monthFix) % 2 != 0) {
        document.getElementById('day31').style.display = 'none'
    }
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
    if (clickedButton != undefined) {
        clickedButton.classList.remove('selected')
    }
    if (event.target.id == 'dayText') {
        clickedButton = event.target.parentElement
    } else {
        clickedButton = event.target
    }
    
    clickedButton.classList.add('selected')

    document.getElementById('noneFound').style.display = 'none'
    for (let i = 1; allEvents['event' + i]; i++) {
        if (allEvents['event' + i]['date'] != searched) {
            document.getElementById('eventBox' + i).style.display = ''
            document.getElementById('eventBox' + i).classList.remove('eventClose')
        }
    }
    let amountFound = 0
    let targetDay = 01
    let targetMonth = 01

    if (event.target.id.replace('day', '') < 10) {
        targetDay = '0' + clickedButton.id.replace('day', '')
    } else {
        targetDay = clickedButton.id.replace('day', '')
    }

    if ((currentMonth + 1) < 10) {
        targetMonth = '0' + (currentMonth + 1)
    } else {
        targetMonth = currentMonth + 1
    }

    var searched = ''

    if (clickedButton.id != 'clearButton') {
        searched = `2022-${targetMonth}-${targetDay}`
    }

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