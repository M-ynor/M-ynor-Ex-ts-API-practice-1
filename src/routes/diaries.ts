import express from 'express' // ESmodules
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id))
  if (diary !== null) {
    res.send(diary)
  } else {
    res.sendStatus(404)
  }
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('Post request received')
})

export default router
