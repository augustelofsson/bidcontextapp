import React,{createContext, useState} from 'react'



const API_URL = 'http://nackowskis.azurewebsites.net/api/';
const GROUP_NUM = 2230;
const url = "http://nackowskis.azurewebsites.net/api/bud/32/1"
const BidContext = createContext();




export const BidProvider = (props) =>  {

    const [bids, setBids] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const GetBids = async (id) => {
        fetch(`${API_URL}bud/${GROUP_NUM}/${id}`)
        .then(res => res.json())
        .then(data => {
            setIsLoading(false);
            setBids(data);
        });
    }

    const AddBid = async (amount) => {
                  
    }



}
