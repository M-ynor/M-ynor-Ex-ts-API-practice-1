import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())

const port = 3000

app.get('/ying', (_, res) => {
  res.send('yang')
})

app.use('/api/diaries', diaryRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
