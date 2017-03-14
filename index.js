const express = require('express')
const app = express()
app.use(express.static('public'))
app.use(express.static('files'))
app.get('/hey', (req, res) => {
  res.send('HEY!')
})
app.listen(3000, () => console.log('Server running on port 3000'))

