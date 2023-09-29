# 2ND LIFE MOBILE SHOP
Catalog for a Smartphones store.

## Configuration
You need to edit the index.js with the sheet you want to get the smartphone data from. Create a folder "phonePics" inside src/assets, which will contain photos of the phones, separated into folders with the respective IMEIs.
It should contain the following items:<br>
tras.jpg  
frenteOff.jpg  
frenteOn.jpg  
lado1.jpg  
lado2.jpg  
baixo.jpg  
cima.jpg  

## How to update
If you are on Windoes you can double click on attSite.bat, the API's index.js will run to fetch information about Smartphones and save it within the front-end folder. It will also check for the existence of photos related to the IMEI, saving the "errors.txt" file with the IMEIs lacking photos, leaving only those without errors on the site.

## Functional example
https://2ndlifemobile.shop



