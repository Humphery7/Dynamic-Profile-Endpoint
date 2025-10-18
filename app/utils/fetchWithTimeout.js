import fetch from "node-fetch";

const fetchWithTimeout = async (url, options={}, timeoutMS=30000)=>{
    const controller = new AbortController();
    const timeout = setTimeout(()=>controller.abort(), timeoutMS);

    try{
        const response = await fetch(url, {...options, signal:controller.signal});

        if (!response.ok){
            throw new Error(`HTTP Error! status: ${response.status}`);
        }

        return await response.json();
    }catch(error){
        if (error.name=="AbortError"){
            throw new Error("Request timed out")
        }
        throw error;
    }finally{
        clearTimeout(timeout);
    }
};

export default fetchWithTimeout;