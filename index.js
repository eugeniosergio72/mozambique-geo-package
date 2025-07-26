const path = require("path")

// Carrega os arquivos  usando caminhos absolutos corretamente
const coordinatesCountry = require(path.join(__dirname, "coordinates", "coordinatesCountry.json"));
const coordinatesProvince = require(path.join(__dirname, "coordinates", "coordinatesProvince.json"));
const coordinatesDistrict = require(path.join(__dirname, "coordinates", "coordinatesDistrict.json"));
const coordinatesAdministractivePost = require(path.join(__dirname, "coordinates", "coordinatesAdministractivePost.json"));

function getAllCountryDetail (){
    try {
        if(!coordinatesCountry)
            return "There was a problem trying to get all Countries!"

        return coordinatesCountry
    }catch(error){
        return "There was a problem with the API, error trying to get all Countries!"
    }
}

function getCountryCapitalNameOnly(countryName){
    try {
        var captr = "";
        const capt = coordinatesCountry.filter(country => {
            if((country.name.toLowerCase() === countryName.toLowerCase()) || country.name.toLowerCase().includes(countryName.toLowerCase())){
                captr = country.capital
                return country.capital
            }
        })
        if(!coordinatesCountry || captr === "")
            return "There was a problem trying to get all Countries!"

        return {capital: captr}
    }catch(error){
        return "There was a problem with the API, error trying to get all Capital Caountry Name!"
    }
}

function getAllCountryContinentNameOnly (){
    try {
        if(!coordinatesCountry)
            return "There was a problem trying to get all Countries continent name!"

        const countryContinentNameOnly = []
        for(country of coordinatesCountry){
            if(!countryContinentNameOnly.includes(country.continent))
                countryContinentNameOnly.push( country.continent)
        }
        const struredContinent = []
        countryContinentNameOnly.forEach(continent => {
            struredContinent.push({continent: continent})
        })

        if(!struredContinent || struredContinent.length === 0)
            return "Not continent defined!"

        return struredContinent
    }catch(error){
        return "There was a problem with the API, error trying to get all Countries continent names!"
    }
}

function getAllCountryNameOnly (){
    try {
        if(!coordinatesCountry)
            return "There was a problem trying to get all Countries name!"

        const countryContinentNameOnly = []
        for(country of coordinatesCountry){
            if(!countryContinentNameOnly.includes(country.name))
                countryContinentNameOnly.push(country.name)
        }
        const struredCountry = []
        countryContinentNameOnly.forEach(country => {
            struredCountry.push({name: country})
        })
        if(!struredCountry || struredCountry.length === 0)
            return "Not country defined!"

        return struredCountry
    }catch(error){
        return "There was a problem with the API, error trying to get Countries names!"
    }
}

function getAllCountryNameOnlyByContinent (continent){
    try {
        if(!coordinatesCountry)
            return "There was a problem trying to get all Countries name by continent!"

        const countryContinentNameOnly = []
        for(country of coordinatesCountry){
            if(!countryContinentNameOnly.includes(country.name) && ((country.continent.toLowerCase() === continent.toLowerCase()) || country.continent.toLowerCase().includes(continent.toLowerCase())))
                countryContinentNameOnly.push(country.name)
        }
        const struredCountry = []
        countryContinentNameOnly.forEach(country => {
            struredCountry.push({name: country})
        })
        if(!struredCountry || struredCountry.length === 0)
            return "Not found country with that continent!"

        return struredCountry
    }catch(error){
        return "There was a problem with the API, error trying to get Countries names!"
    }
}

function getAllProvinceDetail () {
    try {
        if(!coordinatesProvince)
            return "There was a problem trying to get all Province datail!"

        return coordinatesProvince
    } catch (error) {
        return "There was a problem with the API, error trying getting all Provinces!"
    }
}

function getAllProvinceNameOnly () {
    try {
        if(!coordinatesProvince)
            return "There was a problem trying to get all Province name only!"

        const provinceNameOnly = []
        for(province of coordinatesProvince){
            if(!provinceNameOnly.includes(province.name))
                provinceNameOnly.push(province.name)
        }
        const struredProvince = []
        provinceNameOnly.forEach(province => {
            struredProvince.push({name: province})
        })
        if(!struredProvince || struredProvince.length === 0)
            return "Not province defined!"

        return struredProvince
    } catch (error) {
        return "There was a problem with the API, error trying getting all Provinces names!"
    }
}

function getAllProvinceRegionNameOnly () {
    try {
        if(!coordinatesProvince)
            return "There was a problem trying to get all Province region!"

        const provinceRegionNameOnly = []
        for(province of coordinatesProvince){
            if(!provinceRegionNameOnly.includes(province.region))
                provinceRegionNameOnly.push(province.region)
        }
        const struredRegion = []
        provinceRegionNameOnly.forEach(region => {
            struredRegion.push({region: region})
        })
        if(!struredRegion || struredRegion.length === 0)
            return "Not found provincr region!"

        return struredRegion
    } catch (error) {
        return "There was a problem with the API, error trying getting all Provinces region!"
    }
}

function getAllProvinceNameOnlyByRegion (region){
    try {
        if(!coordinatesProvince)
            return "There was a problem trying to get all Province name by region!"

        const provinceByRegionName = []
        for(province of coordinatesProvince){
            if(!provinceByRegionName.includes(province.name) && ((province.region.toLowerCase() === region.toLowerCase()) || province.region.toLowerCase().includes(region.toLowerCase())))
                provinceByRegionName.push(province.name)
        }
        const struredRegion = []
        provinceByRegionName.forEach(region => {
            struredRegion.push({region: region})
        })
        if(!struredRegion || struredRegion.length === 0)
            return "Not found province name only by region!"

        return struredRegion
    }catch(error){
        return "There was a problem with the API, error trying to get Province names by region!"
    }
}

function getLocationByProvinceNameOnly (provinceNam){
    try {
        if(!coordinatesProvince)
            return "There was a problem trying to get all Location Province Name!"

        var locPro = "";
        const locationProvince = coordinatesProvince.filter(country => {
            if((country.name.toLowerCase() === provinceNam.toLowerCase()) || country.name.toLowerCase().includes(provinceNam.toLowerCase())){
                locPro = country.location
                return {location: country.location} 
            }
        })
        if(locPro === "")
            return "Not found location province defined!"

        return {location: locPro} //"Please verify the province name parameter!, ";
    }catch(error){
        return "There was a problem with the API, error trying to get Location by province  name!"
    }
}

function getAllDistrictNameOnlyByProvince (provin){
    try {
        if(!coordinatesDistrict)
            return "There was a problem trying to get all District!"

        const districtByProvinceName = []
        for(const [province, district] of Object.entries(coordinatesDistrict)){
            if((province.toLowerCase() === province.toLowerCase()) || province.toLowerCase().includes(provin.toLowerCase())){
                district.map(distr => {
                    districtByProvinceName.push({name: distr.name})
                })
            }
        }
        if(!districtByProvinceName || districtByProvinceName.length === 0)
            return "Not found district name by the province name!"

        return districtByProvinceName
    }catch(error){
        return "There was a problem with the API, error trying to get all districts by province  name!"
    }
}

function getAllAdministractiveNameOnlyByDistrict (distri){
    try {
        if(!coordinatesAdministractivePost)
            return "There was a problem trying to get all Administractive post!"

        const administractiveByDistrictName = []
        for(const [province, district] of Object.entries(coordinatesAdministractivePost)){
            for(const [distr, list] of Object.entries(district))
                if((distr.toLowerCase() === distri.toLowerCase()) || distr.toLowerCase().includes(distri.toLowerCase())){
                    list.map(distr => {
                        administractiveByDistrictName.push({name: distr.name})
                    })
                }
        }
        if(!administractiveByDistrictName || administractiveByDistrictName.length === 0)
            return "Not administractive post found by district!"

        return  administractiveByDistrictName
    }catch(error){
        return "There was a problem with the API, error trying to get all administractive posts by district  name!" + error
    }
}

module.exports = {
    getAllCountryDetail,
    getAllCountryContinentNameOnly,
    getAllCountryNameOnly,
    getAllCountryNameOnlyByContinent,
    getAllProvinceDetail,
    getAllProvinceNameOnly,
    getAllProvinceRegionNameOnly,
    getAllProvinceNameOnlyByRegion,
    getAllDistrictNameOnlyByProvince,
    getAllAdministractiveNameOnlyByDistrict,
    getLocationByProvinceNameOnly,
    getCountryCapitalNameOnly,
};