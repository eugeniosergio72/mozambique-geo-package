const express = require("express")
const path = require("path")

const common_user = express.Router(); 

const coordinatesCountry = require(path.resolve(__dirname, "../../coordinates/coordinatesCountry.json"))
const coordinatesProvince = require(path.resolve(__dirname, "../../coordinates/coordinatesProvince.json"))
const coordinatesDistrict = require(path.resolve(__dirname, "../../coordinates/coordinatesDistrict.json"))
const coordinatesAdministractivePost = require(path.resolve(__dirname, "../../coordinates/coordinatesAdministractivePost.json"))


common_user.get("/getAllCountryDetail",  async (req, res) => {
    try {
        return res.status(200).json(coordinatesCountry)
    }catch(error){
        return res.status(500).json({message: "There was a problem with the API, error trying to get all Countries!"})
    }
})

common_user.get("/getCountryCapitalNameOnly/:country",  async (req, res) => {
    try {
        coordinatesCountry.forEach(country => {
            if(country.name.toLowerCase() === req.params.country.toLowerCase())
                return res.status(200).json({country: country.name, capital: country.capital})
        })
        
        return res.status(200).json({message: "Please verify the country name parameter!"})
    }catch(error){
        return res.status(500).json({message: "There was a problem with the API, error trying to get all Capital Caountry Name!"})
    }
})

common_user.get("/getAllCountryContinentNameOnly",  async (req, res) => {
    try {
        const countryContinentNameOnly = []
        for(country of coordinatesCountry){
            if(!countryContinentNameOnly.includes(country.continent))
                countryContinentNameOnly.push( country.continent)
        }
        const struredContinent = []
        countryContinentNameOnly.forEach(continent => {
            struredContinent.push({continent: continent})
        })
        return res.status(200).json(struredContinent)
    }catch(error){
        return res.status(500).json({message: "There was a problem with the API, error trying to get all Countries continent names!"})
    }
})

common_user.get("/getAllCountryNameOnly",  async (req, res) => {
    try {
        const countryContinentNameOnly = []
        for(country of coordinatesCountry){
            if(!countryContinentNameOnly.includes(country.name))
                countryContinentNameOnly.push(country.name)
        }
        const struredCountry = []
        countryContinentNameOnly.forEach(country => {
            struredCountry.push({name: country})
        })
        return res.status(200).json(struredCountry)
    }catch(error){
        return res.status(500).json({message: "There was a problem with the API, error trying to get Countries names!"})
    }
})

common_user.get("/getAllCountryNameOnlyByContinent/:continent",  async (req, res) => {
    try {
        const countryContinentNameOnly = []
        for(country of coordinatesCountry){
            if(!countryContinentNameOnly.includes(country.name) && country.continent.toLowerCase() === req.params.continent.toLowerCase())
                countryContinentNameOnly.push(country.name)
        }
        const struredCountry = []
        countryContinentNameOnly.forEach(country => {
            struredCountry.push({name: country})
        })
        return res.status(200).json(struredCountry)
    }catch(error){
        return res.status(500).json({message: "There was a problem with the API, error trying to get Countries names!"})
    }
})

common_user.get("/getAllProvinceDetail", async(req, res) => {
    try {
        return  res.status(200).json(coordinatesProvince)
    } catch (error) {
        return res.status(500).json({message: "There was a problem with the API, error trying getting all Provinces!"})
    }
})

common_user.get("/getAllProvinceNameOnly", async(req, res) => {
    try {
        const provinceNameOnly = []
        for(province of coordinatesProvince){
            if(!provinceNameOnly.includes(province.name))
                provinceNameOnly.push(province.name)
        }
        const struredProvince = []
        provinceNameOnly.forEach(province => {
            struredProvince.push({name: province})
        })
        return  res.status(200).json(struredProvince)
    } catch (error) {
        return res.status(500).json({message: "There was a problem with the API, error trying getting all Provinces names!"})
    }
})

common_user.get("/getAllProvinceRegionNameOnly", async(req, res) => {
    try {
        const provinceRegionNameOnly = []
        for(province of coordinatesProvince){
            if(!provinceRegionNameOnly.includes(province.region))
                provinceRegionNameOnly.push(province.region)
        }
        const struredRegion = []
        provinceRegionNameOnly.forEach(region => {
            struredRegion.push({region: region})
        })
        return  res.status(200).json(struredRegion)
    } catch (error) {
        return res.status(500).json({message: "There was a problem with the API, error trying getting all Provinces region!"})
    }
})

common_user.get("/getAllProvinceNameOnlyByRegion/:region",  async (req, res) => {
    try {
        const provinceByRegionName = []
        for(province of coordinatesProvince){
            if(!provinceByRegionName.includes(province.name) && province.region.toLowerCase() === req.params.region.toLowerCase())
                provinceByRegionName.push(province.name)
        }
        const struredRegion = []
        provinceByRegionName.forEach(region => {
            struredRegion.push({region: region})
        })
        return  res.status(200).json(struredRegion)
    }catch(error){
        return res.status(500).json({message: "There was a problem with the API, error trying to get Province names by region!"})
    }
})

common_user.get("/getLocationByProvinceNameOnly/:province",  async (req, res) => {
    try {
        coordinatesProvince.forEach(country => {
            if(country.name.toLowerCase() === req.params.province.toLowerCase()){
                return res.status(200).json({location: country.location})//res.status(200).json(country.name)
            }
        })
        return res.status(200).json({message: "Please verify the province name parameter!"})
    }catch(error){
        return res.status(500).json({message: "There was a problem with the API, error trying to get Location by province  name!"})
    }
})

common_user.get("/getAllDistrictNameOnlyByProvince/:province", async (req, res) => {
    try {
        const districtByProvinceName = []
        for(const [province, district] of Object.entries(coordinatesDistrict)){
            if(province.toLowerCase() === req.params.province.toLowerCase()){
                district.map(distr => {
                    districtByProvinceName.push({name: distr.name})
                })
            }
        }
        return  res.status(200).json(districtByProvinceName)
    }catch(error){
        return res.status(500).json({message: "There was a problem with the API, error trying to get all districts by province  name!"})
    }
})

common_user.get("/getAllAdministractiveNameOnlyByDistrict/:district", async (req, res) => {
    try {
        const administractiveByDistrictName = []
        for(const [province, district] of Object.entries(coordinatesAdministractivePost)){
            for(const [distr, list] of Object.entries(district))
                if(distr.toLowerCase() === req.params.district.toLowerCase()){
                    list.map(distr => {
                        administractiveByDistrictName.push({name: distr.name})
                    })
                }
        }
        return  res.status(200).json(administractiveByDistrictName)
    }catch(error){
        return res.status(500).json({message: "There was a problem with the API, error trying to get all administractive posts by district  name!"})
    }
})




module.exports = common_user;