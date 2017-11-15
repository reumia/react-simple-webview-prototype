import React, { Component } from 'react'
import Page from '../../components/Page'
import Board from '../../components/Board'

class Index extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.setState({
            data: [
                { id: 1, title: '제목제목', body: '본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문', createAt: new Date() },
                { id: 2, title: '제목제목', body: '본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문', createAt: new Date() }
            ]
        })
    }
    render () {
        return (
            <Page title={this.props.match.url}>
                <Board data={this.state.data} url={this.props.match.url}/>
            </Page>
        )
    }
}

export default Index