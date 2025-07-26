# Pacote NPM de Mapeamento Territorial de Moçambique

Pacote NPM que fornece dados geográficos e administrativos de Moçambique em formato JSON.

#### 📋 Como fazer o uso das funções Disponíveis

# importar todas as funcoes em atribuir em uma variavel

const etomas = require("@etomas/mozambique-geo-package")

## 🌍 Dados Globais
- `etomas.getAllCountryDetail()` - Todos os países com detalhes

- `etomas.getCountryCapitalNameOnly("country-name")` - Capital de um país

- `etomas.getAllCountryContinentNameOnly()` - Lista de continentes

- `etomas.getAllCountryNameOnly()` - Nomes de todos os países

- `etomas.getAllCountryNameOnlyByContinent("continent-name")` - Países por continente

## 🇲🇿 Dados de Moçambique
- `etomas.getAllProvinceDetail()` - Todas as províncias

- `etomas.getAllProvinceNameOnly()` - Nomes das províncias

- `etomas.getAllProvinceRegionNameOnly()` - Regiões (Norte, Centro, Sul)

- `etomas.getAllProvinceNameOnlyByRegion("region-name")` - Províncias por região

- `etomas.getLocationByProvinceNameOnly("province-name")` - Localização de uma província

- `etomas.getAllDistrictNameOnlyByProvince("province-name")` - Distritos por província

- `etomas.getAllAdministractiveNameOnlyByDistrict("district-name")` - Postos administrativos


## Exemplo concreto de uso em funcao funcao js:

- app.get("/testarPacote", (req, res) => {
-     try{
-         const etomas = require("@etomas/mozambique-geo-package")
-         return res.status(200).json(etomas.getCountryCapitalNameOnly("Mozambique"));
-     }catch(erro){
-         return res.status(500).json(erro)    }
- })
