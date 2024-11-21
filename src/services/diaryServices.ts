import diaryData from './diaries.json'
import { DiaryEntry, NonSensitiveDiaryEntry } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const NonSensitiveInfoDiaryEntry = (): NonSensitiveDiaryEntry[] => diaries

export const addEntry = (): undefined => undefined
