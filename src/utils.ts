import { NewDiaryEntry } from './types'
import { Weather, Visibility } from './enums'

const parseComment = (requestComment: any): string => {
  if (!isString(requestComment)) {
    throw new Error('Incorrect or missing comment ')
  }

  return requestComment
}

const parseDate = (requestDate: any): string => {
  if (!isDate(requestDate) || !isString(requestDate)) {
    throw new Error('Incorrect or missing date ')
  }

  return requestDate
}

const parseWeather = (requestWeather: any): Weather => {
  if (!isString(requestWeather) || !isWeather(requestWeather)) {
    console.log(requestWeather)
    throw new Error('Incorrect or missing weather')
  }

  return requestWeather
}

const parseVisibility = (requestVisibility: any): Visibility => {
  if (!isString(requestVisibility) || !isVisibility(requestVisibility)) {
    throw new Error('Incorrect or missing visibility')
  }
  return requestVisibility
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
