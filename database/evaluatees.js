 // ฝ่ายบุคลากรเปิดหน้าแรก: ขอรายชื่อผู้รับการประเมินทุกคน
app.get('/api/evaluatees', (req, res) => {
  console.log(req.query);
   const { q, department, status } = req.query;
  let result = evaluatees;
   if (q) {
    result = result.filter((p) => p.full_name.includes(q));
  }
   if (department) {
    result = result.filter((p) => p.department === department);
  }
  if (status) {
    result = result.filter((p) => p.status === status);
  }
  res.json({
    status: 'success',
    message: 'พบ ' + result.length + ' คน',
    data: result
  });
});