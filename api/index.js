
require("dotenv").config();
const fs = require("fs");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const arquivo = "1PTM-uMrxbcF_7hGL6TeLpBzkMRcE4aMt0bSCN883GM8";

const getDoc = async () => {
  const doc = new GoogleSpreadsheet(arquivo);

  await doc.useServiceAccountAuth({
    client_email: process.env.EMAIL,
    private_key: process.env.P_KEY.replace(/\\n/g, "\n"),
  });
  await doc.loadInfo();
  return doc;
};

function fileExists(imei) {
  let result = false;
  list = [
    `../2ndLifeShop/src/assets/phonesPics/${imei}/tras.jpg`,
    `../2ndLifeShop/src/assets/phonesPics/${imei}/frenteOn.jpg`,
    `../2ndLifeShop/src/assets/phonesPics/${imei}/frenteOff.jpg`,
    `../2ndLifeShop/src/assets/phonesPics/${imei}/cima.jpg`,
    `../2ndLifeShop/src/assets/phonesPics/${imei}/baixo.jpg`,
    `../2ndLifeShop/src/assets/phonesPics/${imei}/lado1.jpg`,
    `../2ndLifeShop/src/assets/phonesPics/${imei}/lado2.jpg`,
  ];
  list.map((file) => {
    if (fs.existsSync(file)) {
      result = true;
    } else {
      return false;
    }
  });
  return result;
}

function saveData(){
  getDoc().then((doc) => {
    let sheet;
    sheet = doc.sheetsByIndex[0];
    sheet.getRows().then((rows) => {
      let table = [];
      let errors = [];
      rows.map((row) => {
        if (fileExists(row.Imei)) {
        table.push({
          modelo: row.Modelo,
          cor: row.Cor,
          gb: row.GB,
          imei: row.Imei,
          bat: row.Bat,
          valor: row.Valor,
        });
        }
        else{
          errors.push(`O IMEI:${row.Imei} não possui todas as imagens\n`);
        }
      });
      if (errors.length > 0){
        fs.writeFile("../errors.txt", errors.join("\n"), (error) => {
          if (error) {
            console.error(error);
            console.error("Erro ao salvar arquivo de erros");
          }
          console.error("Arquivo de erros salvo com sucesso");
        });
      }
      fs.writeFile("../2ndLifeShop/src/services/phonesList.json", `{"table":${JSON.stringify(table)}}`, (error) => {
        if (error) {
          console.error(error);
          console.error("Erro ao salvar arquivo JSON");
        }
        console.error("Arquivo JSON salvo com sucesso");
      });
    });
  });
};

saveData();
