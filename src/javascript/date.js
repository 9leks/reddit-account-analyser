import {
  format,
  distanceInWordsToNow,
  differenceInCalendarDays,
  distanceInWords,
} from 'date-fns'

export const signupDate = created_utc => {
  const date = new Date(created_utc * 1000)
  return format(date, 'MMM Do, YYYY')
}

export const timeFromSignup = created_utc => {
  const date = new Date(created_utc * 1000)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  return distanceInWordsToNow(new Date(year, month, day))
}

export const timeToCakeDay = created_utc => {
  const cakeDay = new Date(created_utc * 1000)
  const month = cakeDay.getMonth()
  const day = cakeDay.getDate()
  const currentDate = new Date()
  const currentDay = new Date(0, currentDate.getMonth(), currentDate.getDate())
  const diff = differenceInCalendarDays(new Date(0, month, day), currentDay)

  return diff === 0
    ? 'today! Happy cake day!'
    : differenceInCalendarDays(new Date(0, month, day), currentDay) > 0
      ? `in ${distanceInWords(new Date(0, month, day), currentDay)}.`
      : `in ${distanceInWords(new Date(1, month, day), currentDay)}.`
}
