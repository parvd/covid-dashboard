import axios from 'axios';
const url='https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise';
const urlIN='https://covid19.mathdro.id/api/countries/INDIA'
const urldaily='https://api.rootnet.in/covid19-in/stats/history';
const urlState='https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise';
const statedaily='https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history';


export const fetchDataIN = async() =>{
    try{
        const {data} = await axios.get(url);
        //console.log(data.data)
        const pd=data.data
        const modifiedData={
            date:data.lastOriginUpdate,
            confirmed:pd.total['confirmed'],
            deaths:pd.total['deaths'],
            recovered:pd.total['recovered'],
            active:pd.total['active']
        }
        //console.log(modifiedData);
        return modifiedData;    }
    catch(error){
        
    }
}

export const fetchDailydata = async() =>{
    try{
        const { data : {data}} = await axios.get(urldaily);
        const modifiedData = data.map((dataItem)=>({
            date:dataItem.day,
            confirmed:dataItem.summary.total,
            deaths:dataItem.summary.deaths,
            recovered:dataItem.summary.discharged,
            active:dataItem.summary.total-dataItem.summary.discharged-dataItem.summary.deaths
            }));
            
            return modifiedData;
    }
    
    catch(error){   
        console.log(error);
    }
}

export const fetchStateName = async()=>{
    try{
        let data = [ "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"]
        data.sort();
        //console.log(data);
        return data;
    }
    catch(error){
    console.log(error)
    }
}

export const fetchStateData = async()=>{
    try{
        const {data} = await axios.get(urlState);
        const pd=data.data;
        //console.log(pd)
            const modifiedData = pd['statewise'].map((dataItem)=>({
                st:dataItem.state,
                active:dataItem.active,
                deaths:dataItem.deaths,
                recovered:dataItem.recovered,
                confirmed:dataItem.confirmed
                }));
        //console.log(modifiedData);
        return modifiedData;
    }
    catch(error){
    console.log(error)
    }
}

export const testing = async()=>{
    try{
        const {data} = await axios.get(statedaily);
        const pd =data.data
       
        console.log(pd);
        return pd;
    }
    catch(error){
    console.log(error)
    }
}

export const newtesting = async()=>{
    try{
        const {data} = await axios.get(url);
        //console.log(data.lastOriginUpdate)
        const pd=data.data
        const modifiedData={
            date:data.lastOriginUpdate,
            confirmed:pd.summary['total'],
            deaths:pd.summary['deaths'],
            recovered:pd.summary['discharged'],
            active:pd.summary['total']-pd.summary['deaths']-pd.summary['discharged']

        }
        //console.log(modifiedData);
        return modifiedData;
    }
    catch(error){
    console.log(error)
    }
}

