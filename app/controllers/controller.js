import fetchWithTimeout from "../utils/fetchWithTimeout.js";

const getUsers = async (req,res, next)=>{
    try{
        const catFactJson = await fetchWithTimeout('https://catfact.ninja/fact');

        res.status(200).json({
            "status": "success",
            "user": {
              "email": "humpheryufuoma@gmail.com",
              "name": "Otuoniyo Ufuoma-Oghene Humphery",
              "stack": "Backend-0"
            },
            "timestamp": new Date().toISOString(),
            "fact": catFactJson.fact
          });
    }catch(error){
        next(error);
    }

};

export {getUsers};