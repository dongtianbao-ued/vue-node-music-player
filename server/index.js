const express = require('express')
const app = express()
app.post('/api/getMusicList', (req, res, next) => {
  res.json({
    success: true,
    data: [
      {name: '眉间雪', singer: '晴愔', src: './assets/music/晴愔 - 眉间雪 (纯歌版).mp3'},
      {name: '生命树', singer: '吴雨霏'}
    ]
  })
})
app.listen(3000)
console.log('success listen at port:3000......')
