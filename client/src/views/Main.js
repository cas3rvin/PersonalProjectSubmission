import React, {useState, useEffect} from 'react';
// import CreateStore from '../components/CreateStore'
import DisplayAll from '../components/DisplayAll';

const Main = (props)=>{

    const [storeList, setStoreList] = useState([]);

    return(
        <div>
            {/* <CreateStore storeList={storeList} setStoreList={setStoreList}/> */}
            <DisplayAll storeList={storeList} setStoreList={setStoreList}/>
        </div>
    )



}

export default Main;