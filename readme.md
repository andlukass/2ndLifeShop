# 2ND LIFE MOBILE
Catálogo para loja de SmartPhones.

## Configuração
Deve ser associado à uma conta do Firebase e fornecer os dados da sheet de onde o index.js irá retirar os dados dos SmartPhones, deverá ser criada uma pasta  "phonePics" dentro de src/assets onde irá conter fotos dos mesmos, separados por pastas com os devidos IMEIs.
Deverá conter os seguintes itens:
tras.jpg
frenteOff.jpg
frenteOn.jpg
lado1.jpg
lado2.jpg
baixo.jpg
cima.jpg

## Como atualizar
Ao clicar em attSite.bat irá rodar o index.js da API para buscar as informações dos SmartPhones e salvar dentro da pasta do front-end, além de verificar a existencia das fotos referentes ao IMEI, salvando o arquivo "errors.txt" com quais IMEIs faltam fotos, deixando no site somente os sem erros.

## Mudar Smartphones disponíveis e preços
A API busca em uma Google Sheet e lâ linha por linha as caracteristicas(preço, % da bateria, modelo, etc). Basta alterar as informações da sheet e rodar o bat para atualizar o site (é preciso conter todas as fotos do Smartphone para que ele aparece no site).

## Exemplo funcional
https://2ndlifemobile.shop



