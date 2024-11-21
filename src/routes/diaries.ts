import express from 'express' // ESmodules

const router = express.Router()

router.get('/', (_, res) => {
  res.send('diaries')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('Post request received')
})

export default router
