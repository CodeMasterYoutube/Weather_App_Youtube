import axios from 'axios'
//  http://api.weatherapi.com/v1/forecast.json
const weather_api = process.env.WEATHER_API
// console.log("API:",weather_api)
export default async(req,res)=>{
    try {
        const city = req.query.city
        console.log("city:",city)
        const weather = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${weather_api}&q=${city}&days=11`)
        const data = weather.data
        return res.status(200).json({message:"sent successfully",mainData:data})
    } catch(error){
        console.log(error)
        return res.status(500).json({message:"Internal server error"})
        
    }
}

