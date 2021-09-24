var pdf = require("pdf-creator-node");
var fs = require("fs");

var html = fs.readFileSync("template.html", "utf8");

const bitmap = fs.readFileSync (__dirname + "/logo_crecemos.jpg");
const logo = bitmap.toString ('base64');

var options = {
  format: "A4",
  //orientation: "landscape",
  border: "10mm",
};

var document = {
  html: html,
  width: "8in",
  height: "10.5in",
  data: {
    logo,
    orderNumber: '1-2',
    user: {
      name: 'ANGEL CELIS BOTTO',
      document: '1.018.438.006-1',
      phone: '3203331224',
      city: 'Bogota',
      address: 'Cll 17 223',
    },
    items: [
      { index: 1, description: 'Coca cola 1L', quantity: 2,  code: 'D522432', valueUnit: 30000, total: 60000 },
      { index: 2, description: 'SixPack 9ML', quantity: 2, code: 'D12345', valueUnit: 15000, total: 20000 },
      { index: 3, description: 'Aguardiente Misk 9ML', code: 'BW13344',  quantity: 2, valueUnit: 10000, total: 20000 },
      { index: 4, description: 'Chocoramo 9ML', quantity: 2, code: 'DW2345', valueUnit: 30000, total: 20000 },
      { index: 5, description: 'SixPack 9ML', quantity: 2, code: 'D33445', valueUnit: 20000, total: 20000 },

    ],
    date: {
      day: '02',
      month: '03',
      year: '2021',
    },
    totalBruto: '80.000',
    retention: '10.3460',
    iva: '17.456',
    total: '80.000',
    observation: 'Los paquetes van con todos sus registros, por favor mirar a detalle cada documento.',
  },
  path: "./output.pdf",
};

pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });