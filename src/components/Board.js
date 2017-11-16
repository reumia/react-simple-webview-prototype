import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import '@/components/Board.scss'

const BoardItem = ({ url, id, title, body, createAt }) => (
    <a href={ `${url}/${id}` } className="board-item">
        <header className="board-item-header">
            <div className="board-item-title">{ title }</div>
            <div className="board-item-date">{ moment(createAt).format('LL') }</div>
        </header>
        <article className="board-item-body" dangerouslySetInnerHTML={{ __html: body }}/>
    </a>
)

const Board = ({ data, url }) => {
    const boardItems = data.map((item, key) => (
        <BoardItem
            key={ key }
            url={ url }
            id={ item.id }
            title={ item.title }
            body={ item.body }
            createAt={ item.createAt || new Date() }
        />
    ))

    return (
        <div className="board">
            { boardItems }
        </div>
    )
}

export default Board

Board.propTypes = {
    data: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired
}

BoardItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createAt: PropTypes.instanceOf(Date).isRequired
}