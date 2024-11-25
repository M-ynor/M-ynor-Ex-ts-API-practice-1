import { NewDiaryEntry } from './types'

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

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const toNewDIaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
  }

  return newEntry
}

export default toNewDIaryEntry