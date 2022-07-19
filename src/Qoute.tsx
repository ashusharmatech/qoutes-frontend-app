import { Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Qoute = () => {

    const url = "https://qoutes.cyclic.app/random";

    const [isLoading, setLoading] = useState(true);
    const [qoute, setQoute] = useState();
    

    const getQoute = () => {
        setLoading(true);
        axios.get(url).then((res) => {
            setQoute(res.data.data[0])
            setLoading(false);
        });
    }

    useEffect(() => {
      getQoute();
    }, [ ])
    
	return <div>{qoute && 
    <>
    <div>

    <Text color="teal.500">{qoute['quote']}</Text>
    <Text color="pink.500">{qoute['author']}</Text>
    </div>
    </>
    
    }
    
    </div>;
};

export default Qoute;
