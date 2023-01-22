// import logo from './logo.svg';
// import './App.css';
import './newapp.css';
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Axios from "axios";

function App() {
  const arr = ["AAPL", "AMZN", "TSLA", "NVDA", "GOOGL", "F"];
  var obj = {
    0: "card1",
    1: "card2",
    2: "card3",
    3: "card4",
    4: "card5",
    5: "card6",
  }

  const [price, setPrice] = useState("");
  const [dayhigh, dayhighPrice] = useState("");
  const [daylow, daylowPrice] = useState("");
  const [name, stockname] = useState("");
  const [fiftyday,fiftyDayAverage]=useState("");
  const [recommendation,recommendationKey]=useState("");
  const encodedParams = new URLSearchParams();

  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  

  

  var temp = "";
  var imgsrc="";
  const reply = (e) => {
    temp = e.currentTarget.id;

    const innerlogoimg = document.getElementById("innerlogoimg");
    const graph = document.getElementById("graph")
    const card1= document.getElementById("card1");
    const card2= document.getElementById("card2");
    const card3= document.getElementById("card3");
    const card4= document.getElementById("card4");
    const card5= document.getElementById("card5");
    const card6= document.getElementById("card6");

   
    if(temp=="card1"){
      var image=Array.from(card1.children)[0];
      graph.src="https://www.tradingview.com/x/Q58Eybhy/";
    }
    else if(temp=="card2"){
      var image=Array.from(card2.children)[0];
      graph.src="https://www.tradingview.com/x/P2GrcAAQ/";
      // var graphimg=Array.from(card2.children)[0];
    }
    else if(temp=="card3"){
      var image=Array.from(card3.children)[0];
      graph.src="https://www.tradingview.com/x/4I3I7PRQ/";
      // var graphimg=Array.from(card3.children)[0];
    }
    else if(temp=="card4"){
      var image=Array.from(card4.children)[0];
      graph.src="https://www.tradingview.com/x/p6H2AqRf/";
      // var graphimg=Array.from(card4.children)[0];
    }
    else if(temp=="card5"){
      var image=Array.from(card5.children)[0];
      graph.src="https://www.tradingview.com/x/H3wjXZCO/";
    }
    else if(temp=="card6"){
      var image=Array.from(card6.children)[0];
      graph.src="https://www.tradingview.com/x/A7ZQgG1e/";
    }
    const source= image.src;
    console.log(source);
    innerlogoimg.src=source;
  
    // temp="card1"
    


    console.log(temp)
    console.log(imgsrc)
    getData();
  }

  const getData = () => {
    encodedParams.append("symbol", arr[getKeyByValue(obj, temp)]);
    const options = {
      method: 'POST',
      url: 'https://yfinance-stock-market-data.p.rapidapi.com/stock-info',
      // headers: {
      //   'content-type': 'application/x-www-form-urlencoded',
      //   'X-RapidAPI-Key': '5e1c006ed9msh14b035e756855ccp1246f7jsne55d63814853',
      //   'X-RapidAPI-Host': 'yfinance-stock-market-data.p.rapidapi.com'
      // },
      // headers: {
      //   'content-type': 'application/x-www-form-urlencoded',
      //   'X-RapidAPI-Key': '94f514c800msh437bb6188c07c3ep18e19djsna9d489601379',
      //   'X-RapidAPI-Host': 'yfinance-stock-market-data.p.rapidapi.com'
      // },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '4ed5fc7305msh0620df2bd66814bp14f2bejsn39f5025b75aa',
        'X-RapidAPI-Host': 'yfinance-stock-market-data.p.rapidapi.com'
      },
      data: encodedParams
    };


    Axios.request(options).then(function (response) {
      const { data } = response?.data;
      console.log(data);
      setPrice(data?.currentPrice);
    }).catch(function (error) {
      console.error(error);
    });

    Axios.request(options).then(function (response) {
      const { data } = response?.data;
      console.log(data);
      dayhighPrice(data?.dayHigh);
    }).catch(function (error) {
      console.error(error);
    });

    Axios.request(options).then(function (response) {
      const { data } = response?.data;
      console.log(data);
      daylowPrice(data?.dayLow);
    }).catch(function (error) {
      console.error(error);
    });

    Axios.request(options).then(function (response) {
      const { data } = response?.data;
      stockname(data?.longName);
    }).catch(function (error) {
      console.error(error);
    });

    Axios.request(options).then(function (response) {
      const { data } = response?.data;
      fiftyDayAverage(data?.fiftyDayAverage);
    }).catch(function (error) {
      console.error(error);
    });

    Axios.request(options).then(function (response) {
      const { data } = response?.data;
      recommendationKey(data?.recommendationKey);
    }).catch(function (error) {
      console.error(error);
    });

    console.log("yahooo")
  }

  return (
    <div>
      <div className="App">
        <div className="outermost-container">
          <nav className='useless'>
          </nav>
          {/* <nav className="navbar">
            <div className="logo"><img className="logoimage" src="./logo.png" alt="Image found" /></div>
            <div className="nav-options flexclassName">
              <div className="account">Account</div>
              <div className="side-menu">Menu</div>
            </div>
          </nav> */}
          <div className="corosuel-outer-container">
            <div className="corosuel-inner-container">
              <nav className="navbar">
              <div className="innerlogo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwN-z8YF71CesQEJoSPPSwz_ZDHIbQ3xVeAojQfOL2JhJOM4c5Tlq412DC6fn3fCqfl1U&usqp=CAU" alt="" id="innerlogoimg"></img>
              </div>
              <div className="stockinfo"><h1>{name}</h1></div>
              </nav>
              <div className="price">
                <h2>Current Price: ${price}</h2>
              </div>
              <div className="dayhigh">
                <h2>Day high: ${dayhigh}</h2>
              </div>
              <div className="daylow">
                <h2>Day Low: ${daylow}</h2>
              </div>
              
              <div className="fiftyday">
                <h2>Fifty Day Average: ${fiftyday}</h2>
              </div>

              <div className="recommendation">
                <h2>Recommendation: {recommendation}</h2>
              </div>

              <div className="graph">
                <img src="https://images.moneycontrol.com/static-mcnews/2022/12/stocks_sensex_nifty_stockmarket3-1-770x433.jpg" id="graph"></img>
              </div>
              <div className="footer">
                  --Select the stock using cards below--
              </div>
            </div>
            {/* <button id="card1" onClick={reply}>Chutiya</button> */}
            <div className="card-container">
              <div className="card" id="card1" onClick={reply}><img className="card-image" src="https://cdn.wallpapersafari.com/63/27/eryh24.jpg" alt="" /></div>
              <div className="card" id="card2" onClick={reply}><img className="card-image" src="https://images.hdqwalls.com/wallpapers/amazon-4k-logo-qhd.jpg" alt="" /></div>
              <div className="card" id="card3" onClick={reply}><img className="card-image" src="https://wallpaperaccess.com/full/344404.jpg" alt="" /></div>
              <div className="card" id="card4" onClick={reply}><img className="card-image" src="https://www.wallpaperflare.com/static/890/917/264/nvidia-logo-wallpaper.jpg" alt="" /></div>
              <div className="card" id="card5" onClick={reply}><img className="card-image" src="https://cdn.dribbble.com/users/2037940/screenshots/6228108/google-logo.png" alt="" /></div>
              <div className="card" id="card6" onClick={reply}><img className="card-image" src="https://www.car-brand-names.com/wp-content/uploads/2015/07/Ford-symbol-3.jpg" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
