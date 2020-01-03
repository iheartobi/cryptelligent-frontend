import React from 'react'
import CoinCard from './CoinCard'

const CoinList = (props) => {
return (
<div className="coin-feed">
{props.coins.map(coin => <CoinCard handleClick={props.handleClick} key={coin.id} coin={coin} coins={coin}/>)}
</div>
)
}

export default CoinList