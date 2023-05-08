export const converter = (inputDate)=>{
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const date = new Date(inputDate)
    const weekdayIndex = date.getDay()
    return weekdays[weekdayIndex]
}