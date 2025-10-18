import fetchWithTimeout from "../utils/fetchWithTimeout.js";
import dotenv from 'dotenv';

dotenv.config();

const getUsers = async (req,res, next)=>{
    try{
        const catFactJson = await fetchWithTimeout(process.env.CAT_API_URL);

        res.status(200).json({
            "status": "success",
            "user": {
              "email": "humpheryufuoma@gmail.com",
              "name": "Otuoniyo Ufuoma-Oghene Humphery",
              "stack": "Nodejs/Express"
            },
            "timestamp": new Date().toISOString(),
            "fact": catFactJson.fact
          });
    }catch(error){
        next(error);
    }

};

export {getUsers};