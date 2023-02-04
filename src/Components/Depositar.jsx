import { Card, Collapse, Text } from '@nextui-org/react'
import ItemDepositar from './ItemDepositar'
import Nav from "./Nav/Nav"
import ModalDepositar from './ModalDepositar'
import { useEffect, useState } from "react";

export let inputValue 

export default function Depositar({image, text, price}) {

  const [btcPrice, setBtcPrice] = useState('')
  const [ethPrice, setEthPrice] = useState('')
  const [usdtPrice, setUsdtPrice] = useState('')
  const [bnbPrice, setBnbPrice] = useState('')
  const [usdcPrice, setUsdcPrice] = useState('')
  const [xrpPrice, setXrpPrice] = useState('')
  const [busdPrice, setBusdPrice] = useState('')
  const [adaPrice, setAdaPrice] = useState('')
  const [dogePrice, setDogePrice] = useState('')
  const [maticPrice, setMaticPrice] = useState('')
  const [solPrice, setSolPrice] = useState('')
  const [dotPrice, setDotPrice] = useState('')
  const [ltcPrice, setLtcPrice] = useState('')
  const [shibPrice, setShibPrice] = useState('')
  const [trxPrice, setTrxPrice] = useState('')
  const [croPrice, setCroPrice] = useState('')
  const [xtzPrice, setXtzPrice] = useState('')
  const [twtPrice, setTwtPrice] = useState('')
  const [dashPrice, setDashPrice] = useState('')
  const [cakePrice, setCakePrice] = useState('')
  let mlc = 1
  let cup = 0.00625
  const getCoins = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20tron%2C%20solana%2C%20litecoin%2C%20cardano%2C%20tezos%2C%20pancakeswap-token%2C%20binance-usd%2C%20tether%2C%20binancecoin%2C%20usd-coin%2C%20ripple%2C%20dogecoin%2C%20matic-network%2C%20polkadot%2C%20shiba-inu%2C%20crypto-com-chain%2C%20dash%2C%20trust-wallet-token%2C%20binance-usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const data = await res.json()
     let btc = await data[0].current_price
     let eth = await data[1].current_price
     let usdt = await data[2].current_price
     let bnb = await data[3].current_price
     let usdc = await data[4].current_price
     let xrp = await data[5].current_price
     let busd = await data[6].current_price
     let ada = await data[7].current_price
     let doge = await data[8].current_price
     let matic = await data[9].current_price
     let sol = await data[10].current_price
     let dot = await data[11].current_price
     let ltc = await data[12].current_price
     let shib = await data[13].current_price
     let trx = await data[14].current_price
     let cro = await data[15].current_price
     let xtz = await data[16].current_price
     let twt = await data[17].current_price
     let dash = await data[18].current_price
    let cake = await data[19].current_price

    setBtcPrice(btc)
    setEthPrice(eth)
    setUsdtPrice(usdt)
    setBnbPrice(bnb)
    setUsdcPrice(usdc)
    setXrpPrice(xrp)
    setBusdPrice(busd)
    setAdaPrice(ada)
    setDogePrice(doge)
    setMaticPrice(matic)
    setSolPrice(sol)
    setDotPrice(dot)
    setLtcPrice(ltc)
    setShibPrice(shib)
    setTrxPrice(trx)
    setCroPrice(cro)
    setXtzPrice(xtz)
    setTwtPrice(twt)
    setDashPrice(dash)
    setCakePrice(cake)
    
  
}

useEffect(() => {
  getCoins()
}, [])


  return (
    <>
    <Nav/>
<div className='collapse-container'>
    <Card>
    <div className='input-depositar-container'>
    <input onChange={(e) => inputValue = e.target.value} type="text" className='input-depositar' placeholder='$0.00'/>
    </div>
            <Card.Body>
                <Collapse.Group className='collapse-group'>
                <Collapse  title='Criptomonedas:'>
                    <div className='collapse-content'>
                    <ItemDepositar coins={btcPrice} coin='BTC' wallet='bc1qtfgly3f5mwt3qx23zekln2eln4g980sh8da5sv' image='https://www.svgrepo.com/show/428654/bitcoin-btc-cryptocurrency-2.svg' text='BTC' price='Bitcoin'/>               
                    <ItemDepositar coins={ethPrice} coin='ETH' wallet='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://www.svgrepo.com/show/428658/ethereum-crypto-cryptocurrency-2.svg' text='ETH' price='Etherem'/>
                    <ItemDepositar coins={trxPrice} coin='TRX' wallet='TWHy5vrgY4WDP5sdAE1kH7UfYygrhpFkKd' image='https://www.svgrepo.com/show/428648/tron-crypto-cryptocurrency.svg' text='TRX' price='Tron'/>
                    <ItemDepositar coins={usdtPrice} coin='USDT' wallet='TWHy5vrgY4WDP5sdAE1kH7UfYygrhpFkKd' image='https://www.svgrepo.com/show/428653/tether-crypto-cryptocurrency-2.svg' text='USDT' price='TRC-20'/>
                    <ItemDepositar coins={ltcPrice} coin='LTC' wallet='ltc1qhkthlnurv6ce8n4uq7qk0pcjyah6f0uerg8acv' image='https://www.svgrepo.com/show/428651/litecoin-ltc-cryptocurrency.svg' text='LTC' price='Litecoin'/>
                    <ItemDepositar coins={usdtPrice} coin='USDC' wallet='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://www.svgrepo.com/show/428649/usdc-usd-coin.svg' text='USDC' price='ERC-20'/>
                    <ItemDepositar coins={xrpPrice} coin='XRP' wallet='rLshcZJQ6ogQJBNcnEUvsNTyDaLoA4Zq4p' image='https://www.svgrepo.com/show/428647/ripple-xrp-cryptocurrency-3.svg' text='XRP' price='XRP'/>
                    <ItemDepositar coins={dashPrice} coin='DASH' wallet='XasxQKSbSZBfDAXRrRYZLrzXfp9MrtwGNn' image='https://www.svgrepo.com/show/428660/dash-cryptocurrency-coin.svg' text='DASH' price='Dash'/>
                    <ItemDepositar coins={bnbPrice} coin='BNB' wallet='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://www.svgrepo.com/show/473558/binance.svg' text='BNB' price='BSC'/>
                    <ItemDepositar coins={bnbPrice} coin='BNB' wallet='bnb13jt8k5mldyt7qdr25hfc3mz8588nayt47aqyam' image='https://www.svgrepo.com/show/331309/binance.svg' text='BNB' price='BNB'/>
                    <ItemDepositar coins={shibPrice} coin='SHIB' wallet='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://img.icons8.com/external-black-fill-lafs/2x/external-Shiba-Inu-cryptocurrency-black-fill-lafs.png' text='SHIB' price='Shiba'/>
                    <ItemDepositar coins={dogePrice} coin='DOGE' wallet='D771Z5Q4CSPxhJD2VWX9Vqj5EyPmktLKV9' image='https://www.svgrepo.com/show/366968/doge.svg' text='DOGE' price='Dogecoin'/>                  
                    <ItemDepositar coins={adaPrice} coin='ADA' wallet='addr1q9kqkz9lm8fd53z4sgtrxjkuj4050gg4078y36hgep4n8r6dugfe0f6hh54ep864z0y023el8mxc5875v2re9jtaaukq37s2la' image='https://qvapay.com/img/coins/ada.svg' text='ADA' price='Cardano'/>
                    <ItemDepositar coins={busdPrice} coin='BUSD' wallet='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://qvapay.com/img/coins/busd.svg' text='BUSD' price='BSC'/>
                    <ItemDepositar coins={solPrice} coin='SOL' wallet='EWBm3f1RWTrN68kogjuVcTHJcbWedjUHKq2NDgjZD1Qs' image='https://qvapay.com/img/coins/sol.svg' text='SOL' price='Solana'/>
                    <ItemDepositar coins={croPrice} coin='CRO' wallet='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://qvapay.com/img/coins/cro.svg' text='CRO' price='Cronos'/>
                    <ItemDepositar coins={cakePrice} coin='CAKE' wallet='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png' text='CAKE' price='Cake'/>
                 
                    <ItemDepositar coins={xtzPrice} coin='XTZ' wallet='tz1RZ4Sx7EHbGtk6pP1eA3iftQXUyjEVTCro' image='https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/tezos/info/logo.png' text='XTZ' price='Tezos'/>
                    <ItemDepositar coins={dotPrice} coin='DOT' wallet='14f9mv6uzeXjfsgwWp5jQ6ESQsLonpPTNkgbd4sFeja6Cjgi' image='https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polkadot/info/logo.png' text='DOT' price='Polkadot'/>
                    <ItemDepositar coins={maticPrice} coin='MATIC' wallet='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png' text='MATIC' price='Polygon'/>
                    <ItemDepositar coins={twtPrice} coin='TWT' wallet='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/assets/TWT-8C2/logo.png' text='TWT' price='TWT'/>

                    </div>

                    </Collapse>
                    <Collapse title='Bank:'>
                    <div className='collapse-content'>
                    <ItemDepositar wallet='' coin='Zelle' image='https://qvapay.com/img/coins/zelle.svg' text='Zelle' price='Zelle'/>
                    <ItemDepositar coins={cup} wallet='9205 1299 7508 7231' coin='CUP' image='https://www.svgrepo.com/show/399943/bank.svg' text='CUP' price='CUP'/>
                    <ItemDepositar coins={mlc} wallet='9225 1299 7129 7756' coin='MLC' image='https://www.svgrepo.com/show/395853/bank.svg' text='MLC' price='USD'/>
                    <ItemDepositar wallet='' coin='EUR' image='https://qvapay.com/img/coins/bank.svg' text='EUR' price='Euro'/>
                    <ItemDepositar wallet='' coin='MasterCard' image='https://www.svgrepo.com/show/355117/mastercard.svg' text='MC' price='Card'/>
                    <ItemDepositar wallet='' coin='Visa' image='https://www.svgrepo.com/show/362033/visa.svg' text='Visa' price='Card'/>
                    </div>                
                    </Collapse>
 
                    <Collapse title='E-Wallet'>
                    
                    <div className='collapse-content'>
                    <ItemDepositar wallet='' coin='PayPal' image='https://www.svgrepo.com/show/349473/paypal.svg' text='PayPal' price='PayPal'/>
                    <ItemDepositar wallet='' coin='WebMoney' image='https://qvapay.com/img/coins/webmoney.svg' text='WM' price='WebMon'/>
                    <ItemDepositar wallet='' coin='Airtm' image='https://qvapay.com/img/coins/airtm.svg' text='AIRTM' price='Airtm'/>
                    <ItemDepositar coins={cup} wallet='+5356093822' coin='Etecsa' image='https://qvapay.com/img/coins/etecsa.svg' text='Etecsa' price='Etecsa'/>
                    <ItemDepositar wallet='' coin='MyBambu' image='https://qvapay.com/img/coins/mybambu.svg' text='MYBAM' price='MyBamb'/>
                    <ItemDepositar wallet='' coin='Perfect Money' image='https://qvapay.com/img/coins/pm.svg' text='PM' price='PerfectM'/>
                    <ItemDepositar wallet='' coin='CashApp' image='https://qvapay.com/img/coins/cashapp.svg' text='CA' price='CashApp'/>
                    <ItemDepositar wallet='' coin='TropiPay' image='https://qvapay.com/img/coins/tropipay.svg' text='TrPay' price='TropiPay'/>
                    <ItemDepositar wallet='' coin='Payeer' image='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAAB4CAMAAAA678W5AAAAZlBMVEX4+PgDqfT////++/j///gAofRPuPXJ4/cApPQAp/Si1PkApfO64PvF5vv//fjn9f4xrPVqvvf2/P/u9Pik1vbQ6fdwwPVBsfaw2/mXz/Zau/XB4vuJzPbu9/5jv/U9tPXb7Ph3xveBok3oAAADQklEQVR4nO2cbbNrMBCAkZM0EapVxDv9/3/yctFzOkdob82VxD7fZGqmz+yKxSaWBQAAAAAAAAAAAAAA8B9A6Pz1HmeE9v7Tb9H93ZsflXVOXievy8i/WdqYIivOGowp5cx+HcYpxbjJYksLz684sek7fk+u1E7ir70VVkFW+c+Kk2ipejhRQOhHjj2UBEpropvgH0vaNhc3hTVR0HyWrRNMqBzNeotI9vB6bxUp5/Tza3KCpue9deZB1VaR7OGVmjmLsk0tMzUtb2SbqWeAkdveQnMgf8tQdsH0VQwmyrabe3qomimbbxzLfG+hWTZ17NlbaI4b3lgSKzj9oFZu+XvuZWz94RMrWOWhWGrJiFcUhf+gKDzPLXO+MlvhWEHLk9SSus4MVXzHi/HEJwMsOwKyNC2bYumE5ULWGmPpOKV8zjLI0rlLk1ZXyzAYqH5em8I0y+IyIspvUVd2aWpr+bhzUB49NGUpq79lV4x7jytTEkwTLG07HEdlRZMRlnwaDSSnmWGZTJaSl7hGWLImGEar6/z8o63l07Box7uoaZZPqdm0ZsbSe8rYfKwMKskbTiMs+f1R45ls6Y+jraT4McGS1lPtkxpWFfyw5OJRr8s+PGhrSTnr4ZyTdpIMZOfpannKrwNJ6jyQPkbraumEI9+Ozkl2lr6Wv5HdRoyyrBbeVRpjufhC1hDLMOXGv3WO3ZU2L10tWzcacMuaiMVAamzp4b47tG8qfaUjUVvLt77Jg+VegOURLRm7XGZaDcyyZFc3TaO72Zb0npLuGdqN1ntENLYUPmVCMOrKP8/qb0k9QUu3dCmVd84YYOlj6tYixthbkdTdMotawrBvsmWU4+hyKfhF/nv9LW07psLmDU1X1ytoZsmToPpL3yfMSHEVgkTlah2kpOXCnMmbvIcMByTLXDdZL/aU7DZc6By12cB4wLsK74WKVsXO0WN0AR+ko/sY3fnbr7TY22iOY6yaOcYKqIOsZrPCTWMZ7q0j4RCrTLucfaFuew2eKJqvVr/6W/7N9S3UXv19iJX8fTTzDXZlyFWOZM8hdtiwjrFbinWQnW+sYRej0z/sYnTSaBejAfN3pAIAAAAAAAAAAAAAQFv+AJ/pSl0ETb/hAAAAAElFTkSuQmCC' text='Payeer' price='Payeer'/>
                    <ItemDepositar wallet='' coin='Uphold' image='https://qvapay.com/img/coins/uphold.svg' text='UPH' price='Uphold'/>
                    <ItemDepositar wallet='' coin='Google Pay' image='https://www.svgrepo.com/show/452222/google-pay.svg' text='GooPay' price='Google'/>
                    <ItemDepositar wallet='' coin='Apple Pay' image='https://www.svgrepo.com/show/452157/apple-pay.svg' text='AppPay' price='Apple'/>
                    </div>
                                   
                    </Collapse>
                </Collapse.Group>
               
    <div className='button-depositar'>
  
    <ModalDepositar/>
    </div>
                
            </Card.Body>
        </Card>
    </div>
    </>
  )
}
