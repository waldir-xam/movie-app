import Config  from "../config"

const searchBytext = async (searchText)=>{
    try{
        const url =
        Config.api.url + "?s=" + searchText +"&apikey" + Config.api.key;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch (error){
        return error;
    }

};

const Services ={
    searchBytext,
}


export default Services;