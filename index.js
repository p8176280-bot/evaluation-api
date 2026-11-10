const express = require('express');
 const evaluateeRouter = require('./database/evaluatees');

const app = express();
app.use(express.static('public'));
 
// URL ไหนขึ้นต้นด้วย /api/evaluatees ส่งต่อให้ไฟล์ routes/evaluatees.js จัดการ
app.use('/api/evaluatees', evaluateeRouter);

// ฝ่ายบุคลากรกดปุ่ม "ดู" ของครู 1 คน: ขอข้อมูลคนเดียวตาม id
app.get('/api/evaluatees/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = evaluatees.find((p) => p.id === id);
 
  if (!person) {
    return res.status(404).json({
      status: 'error',
      message: 'ไม่พบผู้รับการประเมิน id ' + id,
      data: null
    });
  }
  res.json({
    status: 'success',
    message: 'พบข้อมูล',
    data: person
  });
});

app.listen(3000, () => {
  console.log('เซิร์ฟเวอร์ทำงานที่ http://localhost:3000');
});

