import { useState, useEffect, createContext } from "react";
import React from "react";
import Web3 from "web3";
import Home from "./component/Home";
import Background from "./component/Background";
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "./utils/load-contract";
import Createreq from "./component/Createreq";
import Pending from "./component/Pending";
import Donate from "./component/Donate";
import Status from "./component/Status";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Completeinfo from "./component/Completeinfo";
import Yourrequest from "./component/Yourrequest";
import Slider from "./component/Slider";
import "./App.css";

export const GlobalInfo = createContext();

function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });
  const [fileUrl, updateFileUrl] = useState(``);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [manager, setmanager] = useState(null);
  const [reload, shouldReload] = useState(false);
  const [reqstid, setreq] = useState([]);
  const [pending, setpending] = useState({});
  const [all, setAll] = useState([]);
  const [allpending, setallpend] = useState([]);
  const [Your, setyour] = useState([]);
  const [nums, sets] = useState(0);
  var arr = [];

  const reloadEffect = () => shouldReload(!reload);

  const setAccountListener = (provider) => {
    provider.on("accountsChanged", (accounts) => setAccount(accounts[0]));
  };

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      const contract = await loadContract("Funder", provider);

      if (provider) {
        setAccountListener(provider);
        provider.request({ method: "eth_requestAccounts" });
        setWeb3Api({
          web3: new Web3(provider),
          provider,
          contract,
        });
      } else {
        console.error("Please install MetaMask!");
      }
    };

    loadProvider();
  }, []);

  useEffect(() => {
    const { contract, web3 } = web3Api;
    const setmanagers = async () => {
      const setting = await contract?.getmanager().then((setting) => {
        setmanager(setting);
      });
    };
    web3Api.contract && setmanagers();
  }, [web3Api.web3]);

  useEffect(() => {
    const { contract, web3 } = web3Api;
    const loadBalance = async () => {
      const balance = await web3.eth.getBalance(contract.address);
      setBalance(web3.utils.fromWei(balance, "ether"));
    };
    web3Api.contract && loadBalance();
    const get = async () => {
      var k = await contract?.getRequestNo().then((k) => {
        console.log("k=" + k);
        sets(k);
      });
    };
    web3Api.contract && get();

    const getArr = async () => {
      var x = await contract?.getBid().then((x) => {
        setAll(x);
      });
    };

    web3Api.contract && getArr();
  }, [web3Api, reload]);

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
    };
    web3Api.web3 && getAccount();
  }, [web3Api.web3]);

  const getyourrequest = async () => {
    const { web3, contract } = web3Api;
    var p = await contract
      ?.seemyrequests({
        from: account,
      })
      .then((p) => {
        setyour(p);
      });
    reloadEffect();
  };

  const getreqid = (reqid) => {
    console.log(reqid);
    setreq(reqid);
    reloadEffect();
  };
  const getpendingid = (pendingid) => {
    setpending(pendingid);
    reloadEffect();
  };
  const getupdate = () => {
    console.log("hello");
    reloadEffect();
  };

  return (
    <>
      <GlobalInfo.Provider
        value={{
          val: web3Api,
          acc: account,
          arr: arr,
          getreqid: getreqid,
          getpendingid: getpendingid,
          getupdate: getupdate,
          getyourrequest: getyourrequest,
          reqstid: reqstid,
          manager: manager,
        }}
      >
        <>
          <Router>
            <Home
              acc={account ? account : "not connected"}
              bal={balance}
              man={manager ? manager : "no Manager"}
            />

            <Routes>
              <Route path="/" element={<Slider />} />
              <Route path="/request" element={<Background query={all} />} />
              <Route path="/create" element={<Createreq />} />
              <Route path="/Pending" element={<Pending arr={all} />} />
              <Route path="/info" element={<Completeinfo arr={reqstid} />} />
              <Route path="/Status" element={<Status arr={pending} />} />
              <Route path="/Donate" element={<Donate />} />
              <Route
                path="/Yourrequest"
                element={<Yourrequest ypend={Your} />}
              />
            </Routes>
          </Router>
        </>
      </GlobalInfo.Provider>
    </>
  );
}

export default App;
