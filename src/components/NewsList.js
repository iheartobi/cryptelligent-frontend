import React from 'react'
import NewsCard from './NewsCard'

const NewsList = (props) => {

    return(
        <div className="news-feed">
        {props.news ? props.news.map(news => <NewsCard key={news.id} news={news}/>) : null}
        </div>

    )
}
export default NewsList

