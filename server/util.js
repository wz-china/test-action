var Excel = require('exceljs');

var workbook = new Excel.stream.xlsx.WorkbookWriter({
  filename: './streamed-workbook.xlsx'
});
var worksheet = workbook.addWorksheet('Sheet');

worksheet.columns = [
  { header: 'id', key: 'id' },
  { header: 'name', key: 'name' },
  { header: 'phone', key: 'phone' }
];

var data = [{
  id: 100,
  name: 'abc',
  phone: '123456789'
}];

for(let i in data) {
  worksheet.addRow(data[i]).commit();
}
console.log('添加数据完毕');
workbook.commit();
console.log("程序执行完毕");
