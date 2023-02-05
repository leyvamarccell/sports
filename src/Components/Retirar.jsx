import { Button, Input, Card, Collapse } from '@nextui-org/react'
import ItemDepositar from './ItemDepositar'
import Nav from '../Components/Nav/Nav'
import { useGlobalState } from './GlobalState'
import { db } from './firebase'
import {getDoc,updateDoc, doc} from 'firebase/firestore'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import { userEmail } from './Auth'

export let inputValue
export let inputCoin

export let isVisible = 1

export default function Retirar() {

const coin = useGlobalState(state => state.coin)

if(coin !== '') {
  isVisible =  0
}

const checkCoin = () => {
  if(coin === 'Etecsa') return 'Número de télefono'
  else if(coin === 'CUP') return 'Nro de targeta CUP'
  else if(coin === 'MLC') return 'Nro de targeta MLC'
  else if(coin) return `Wallet de ${coin}`
}

  
const [value, setValue] = useState({})
 
setTimeout(() => {
  getDoc(doc(db, 'users', userEmail))
  .then(res => setValue(res.data()))

}, 4000)
   
  const saldo = value.saldo
  const retirar = value.retirar

  let retirarState = inputValue + ' ' + ' ' + inputCoin + ' ' + coin + '-----------'
  
const runRetirar = () => {
  
  if(inputValue === undefined || inputValue < 10) toast.error('El monto a retirar debe ser mayor a $10')
  else if(inputValue > saldo) toast.error('Saldo insuficiente')
  else if(coin === '') toast.error('Selecciona un método de pago')
  else if(inputCoin === undefined || inputCoin === '') toast.error('Introduce la dirección de retiro')

  else {
    retirarState =  retirarState + retirar
    let newSaldo = saldo - inputValue
    updateDoc(doc(db, 'users', userEmail), {
      saldo: newSaldo,
      retirar: retirarState
    })
    toast.success('Saldo retirado correctamente')
  }
}

  return (
    <>
          <Nav/>
<div className='collapse-container'>
    <Card>
    <div className='input-depositar-container'>
    <input type="text" onChange={(e) => inputValue = e.target.value} className='input-depositar' placeholder='$0.00'/>
    </div>
            <Card.Body>
                <Collapse.Group className='collapse-group'>
                <Collapse  title='Criptomonedas:'>
                    <div className='collapse-content'>
                    <ItemDepositar  coin='BTC' image='https://www.svgrepo.com/show/428654/bitcoin-btc-cryptocurrency-2.svg' text='BTC' price='Bitcoin'/>               
                    <ItemDepositar  coin='ETH'  image='https://www.svgrepo.com/show/428658/ethereum-crypto-cryptocurrency-2.svg' text='ETH' price='Etherem'/>
                    <ItemDepositar  coin='TRX' image='https://www.svgrepo.com/show/428648/tron-crypto-cryptocurrency.svg' text='TRX' price='Tron'/>
                    <ItemDepositar  coin='USDT'  image='https://www.svgrepo.com/show/428653/tether-crypto-cryptocurrency-2.svg' text='USDT' price='TRC-20'/>
                    <ItemDepositar  coin='LTC'  image='https://www.svgrepo.com/show/428651/litecoin-ltc-cryptocurrency.svg' text='LTC' price='Litecoin'/>
                    <ItemDepositar  coin='USDC' image='https://www.svgrepo.com/show/428649/usdc-usd-coin.svg' text='USDC' price='ERC-20'/>
                    <ItemDepositar  coin='XRP' image='https://www.svgrepo.com/show/428647/ripple-xrp-cryptocurrency-3.svg' text='XRP' price='XRP'/>
                    <ItemDepositar  coin='DASH'  image='https://www.svgrepo.com/show/428660/dash-cryptocurrency-coin.svg' text='DASH' price='Dash'/>
                    <ItemDepositar  coin='BNB'  image='https://www.svgrepo.com/show/473558/binance.svg' text='BNB' price='BSC'/>
                    <ItemDepositar  coin='BNB' image='https://www.svgrepo.com/show/331309/binance.svg' text='BNB' price='BNB'/>
                    <ItemDepositar  coin='SHIB' image='https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png' text='SHIB' price='Shiba'/>
                    <ItemDepositar  coin='DOGE' image='https://s2.coinmarketcap.com/static/img/coins/64x64/74.png' text='DOGE' price='Dogecoin'/>                  
                    <ItemDepositar  coin='ADA'  image='https://qvapay.com/img/coins/ada.svg' text='ADA' price='Cardano'/>
                    <ItemDepositar  coin='BUSD'  image='https://qvapay.com/img/coins/busd.svg' text='BUSD' price='BSC'/>
                    <ItemDepositar  coin='SOL'  image='https://qvapay.com/img/coins/sol.svg' text='SOL' price='Solana'/>
                    <ItemDepositar  coin='CRO'  image='https://qvapay.com/img/coins/cro.svg' text='CRO' price='Cronos'/>
                    <ItemDepositar  coin='CAKE' image='https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png' text='CAKE' price='Cake'/>
                 
                    <ItemDepositar coin='XTZ'  image='https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/tezos/info/logo.png' text='XTZ' price='Tezos'/>
                    <ItemDepositar coin='DOT'  image='https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polkadot/info/logo.png' text='DOT' price='Polkadot'/>
                    <ItemDepositar coin='MATIC'  image='https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png' text='MATIC' price='Polygon'/>
                    <ItemDepositar coin='TWT'  image='https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/assets/TWT-8C2/logo.png' text='TWT' price='TWT'/>
                    </div>

                    </Collapse>
                    <Collapse title='Bank:' >
                    <div className='collapse-content'>
                    <ItemDepositar  coin='Zelle' image='https://qvapay.com/img/coins/zelle.svg' text='Zelle' price='Zelle'/>
                    <ItemDepositar  coin='CUP' image='https://www.svgrepo.com/show/399943/bank.svg' text='CUP' price='CUP'/>
                    <ItemDepositar  coin='MLC' image='https://www.svgrepo.com/show/395853/bank.svg' text='MLC' price='USD'/>
                    <ItemDepositar coin='EUR' image='https://qvapay.com/img/coins/bank.svg' text='EUR' price='Euro'/>
                    <ItemDepositar  coin='MasterCard' image='https://www.svgrepo.com/show/355117/mastercard.svg' text='MC' price='Card'/>
                    <ItemDepositar coin='Visa' image='https://www.svgrepo.com/show/362033/visa.svg' text='Visa' price='Card'/>
                    </div>                
                    </Collapse>
 
                    <Collapse title='E-Wallet'>
                    
                    <div className='collapse-content'>
                    <ItemDepositar wallet='' coin='PayPal' image='https://www.svgrepo.com/show/349473/paypal.svg' text='PayPal' price='PayPal'/>
                    <ItemDepositar wallet='' coin='WebMoney' image='https://qvapay.com/img/coins/webmoney.svg' text='WM' price='WebMon'/>
                    <ItemDepositar wallet='' coin='Airtm' image='https://qvapay.com/img/coins/airtm.svg' text='AIRTM' price='Airtm'/>
                    <ItemDepositar wallet='+5356093822' coin='Etecsa' image='https://qvapay.com/img/coins/etecsa.svg' text='Etecsa' price='Etecsa'/>
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

                    <Collapse title='Gift Cards'>
                    
                    <div className='collapse-content'>
                    <ItemDepositar image='https://www.svgrepo.com/show/452223/google-play.svg' text='Google' price='Google'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/475633/apple-color.svg' text='Apple' price='Apple'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/475634/amazon-color.svg' text='Amazon' price='Amazon'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/303196/netflix-2-logo.svg' text='Netflix' price='Netflix'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/475679/skype-color.svg' text='Skype' price='Skype'/>
                    <ItemDepositar image='https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_530%2Cw_875/v1604961065/freefire.jpg' text='Fr Fire' price='FreeFire'/>
                    <ItemDepositar image='https://www.bitrefill.com/content/cn/b_rgb%3A074695%2Cc_pad%2Ch_181%2Cw_300/v1557503536/psn.jpg' text='PlayS' price='PlayStay'/>
                   
                    </div>
                                   
                    </Collapse>
                </Collapse.Group>
                <div className='input-retirar-container' hidden={isVisible}>
                <h4 className='text-retirar-info'>Datos necesarios: </h4>
                <div className='input-retirar-container'>
                <input  type="text" onMouseLeave={e => inputCoin = e.target.value} placeholder={checkCoin()} className='input-retirar' name="" id="" />
                </div>
               
                </div>
            
    <div className='button-depositar'>
    <Button onPress={() => {
      runRetirar()
      
    }} flat auto color="primary" className='button-dep' >
        Recargar mi cuenta con: {coin}
      </Button>
    </div>
                
            </Card.Body>
        </Card>
    </div>
    </>
  )
}
