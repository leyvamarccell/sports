import { Button, Input, Card, Collapse } from '@nextui-org/react'
import ItemDepositar from './ItemDepositar'
import Nav from '../Components/Nav/Nav'


export default function Retirar() {
  return (
    <>
          <Nav/>
<div className='collapse-container'>
    <Card>
    <div className='input-depositar-container'>
    <input type="text" className='input-depositar' placeholder='$0.00'/>
    </div>
            <Card.Body>
                <Collapse.Group className='collapse-group'>
                <Collapse  title='Criptomonedas:'>
                    <div className='collapse-content'>
                    <ItemDepositar image='https://www.svgrepo.com/show/428654/bitcoin-btc-cryptocurrency-2.svg' text='BTC' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/428658/ethereum-crypto-cryptocurrency-2.svg' text='ETH' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/428648/tron-crypto-cryptocurrency.svg' text='TRX' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/428653/tether-crypto-cryptocurrency-2.svg' text='USDT' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/428651/litecoin-ltc-cryptocurrency.svg' text='LTC' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/428649/usdc-usd-coin.svg' text='USDC' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/428661/monero-crypto-cryptocurrency-coins.svg' text='MON' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/428657/ripple-xrp-cryptocurrency.svg' text='RIP' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/428647/ripple-xrp-cryptocurrency-3.svg' text='XRP' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/428660/dash-cryptocurrency-coin.svg' text='DASH' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/473558/binance.svg' text='BNB' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/331309/binance.svg' text='BNB' price='$20'/>
                    <ItemDepositar image='https://img.icons8.com/external-black-fill-lafs/2x/external-Shiba-Inu-cryptocurrency-black-fill-lafs.png' text='SHIB' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/366968/doge.svg' text='DOGE' price='$20'/>
                    </div>

                    </Collapse>
                    <Collapse title='Bank:'>
                    <div className='collapse-content'>
                    <ItemDepositar image='https://qvapay.com/img/coins/zelle.svg' text='Zelle' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/399943/bank.svg' text='CUP' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/395853/bank.svg' text='USD' price='$20'/>
                    <ItemDepositar image='https://qvapay.com/img/coins/bank.svg' text='EUR' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/355117/mastercard.svg' text='MC' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/362033/visa.svg' text='Visa' price='$20'/>
                    </div>                
                    </Collapse>
 
                    <Collapse title='E-Wallet'>
                    
                    <div className='collapse-content'>
                    <ItemDepositar image='https://www.svgrepo.com/show/349473/paypal.svg' text='PayPal' price='$20'/>
                    <ItemDepositar image='https://qvapay.com/img/coins/webmoney.svg' text='WM' price='$20'/>
                    <ItemDepositar image='https://qvapay.com/img/coins/airtm.svg' text='AIRTM' price='$20'/>
                    <ItemDepositar image='https://qvapay.com/img/coins/etecsa.svg' text='Etecsa' price='$20'/>
                    <ItemDepositar image='https://qvapay.com/img/coins/mybambu.svg' text='MYBAM' price='$20'/>
                    <ItemDepositar image='https://qvapay.com/img/coins/pm.svg' text='PM' price='$20'/>
                    <ItemDepositar image='https://qvapay.com/img/coins/cashapp.svg' text='CA' price='$20'/>
                    <ItemDepositar image='https://qvapay.com/img/coins/tropipay.svg' text='TrPay' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/452222/google-pay.svg' text='GooPay' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/452157/apple-pay.svg' text='AppPay' price='$20'/>
                    <ItemDepositar image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjMFW91295xAPgUsVKU-CxE-0TQEz28F4iOHmlQG1w&s' text='Payeer' price='$20'/>
                    <ItemDepositar image='https://qvapay.com/img/coins/uphold.svg' text='UPH' price='$20'/>
                    </div>
                                   
                    </Collapse>

                    <Collapse title='Gift Cards'>
                    
                    <div className='collapse-content'>
                    <ItemDepositar image='https://www.svgrepo.com/show/452223/google-play.svg' text='Google' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/475633/apple-color.svg' text='Apple' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/475634/amazon-color.svg' text='Amazon' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/303196/netflix-2-logo.svg' text='Netflix' price='$20'/>
                    <ItemDepositar image='https://www.svgrepo.com/show/475679/skype-color.svg' text='Skype' price='$20'/>
                    <ItemDepositar image='https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_530%2Cw_875/v1604961065/freefire.jpg' text='Fr Fire' price='$20'/>
                    <ItemDepositar image='https://www.bitrefill.com/content/cn/b_rgb%3A074695%2Cc_pad%2Ch_181%2Cw_300/v1557503536/psn.jpg' text='PlayS' price='$20'/>
                   
                    </div>
                                   
                    </Collapse>
                </Collapse.Group>
    <div className='button-depositar'>
    <Button flat auto color="primary" className='button-dep' >
        Recargar mi cuenta
      </Button>
    </div>
                
            </Card.Body>
        </Card>
    </div>
    </>
  )
}
