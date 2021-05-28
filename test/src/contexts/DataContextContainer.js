import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
// import { getKoi } from "service/KOI";
// import { convertArBalance } from "service/utils";
import { useLocalStorage } from "hooks"

const DataContext = React.createContext(null);

export { DataContext };

function DataContextContainer(props){
  const [addressEth, setAddressEth] = useLocalStorage('koi-addressEth', null);
  const [openSeas, setOpenSeas] = useState([]);
  const [addressAr, setAddressAr] = useLocalStorage('koi-addressAr', null);
  const [keyAr, setKeyAr] = useLocalStorage('koi-keyAr', null);
  const [balanceKoi, setBalanceKoi] = useLocalStorage('koi-balanceKoi', null);
  const [balanceAr, setBalanceAr] = useLocalStorage('koi-balanceAr', null);
  const [contents, setContents] = useState([]);
  const [totalViewCt, setTotalViewCt] = useLocalStorage('koi-totalViewCt', 0);
  const [totalKoiCt, setTotalKoiCt] = useLocalStorage('koi-totalKoiCt', 0);

  // const getKoiBalance = async () => {
  //   if(keyAr) {
  //     let balance = await getKoi(keyAr)
  //     setBalanceKoi(Number(balance.koiBalance))
  //     setBalanceAr(convertArBalance(balance.arBalance))
  //   }else{
  //     console.log("test key", keyAr)
  //     console.log('ther is no key file')
  //   }
  // }
  
  // useInterval( () => getKoiBalance(), 120000);

  return (
    <DataContext.Provider
      value={{
        addressEth,
        setAddressEth,
        addressAr,
        setAddressAr,
        openSeas,
        setOpenSeas,
        keyAr,
        setKeyAr,
        balanceKoi,
        setBalanceKoi,
        balanceAr,
        setBalanceAr,
        contents,
        setContents,
        totalViewCt,
        setTotalViewCt,
        totalKoiCt,
        setTotalKoiCt,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // remember the latet callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback]);

  // set up the interval.
  useEffect(() => {
    let id = setInterval( () => {
      savedCallback.current()
    }, [delay])
    return () => clearInterval(id)
  }, [delay]);
}
DataContextContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContextContainer;
