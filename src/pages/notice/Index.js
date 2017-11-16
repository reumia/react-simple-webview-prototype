import React, { Component } from 'react'
import Page from '@/components/Page'
import Board from '@/components/Board'
import http from '@/utils/axios'

class Index extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: []    // TODO : https://jsonplaceholder.typicode.com/ 더미데이터 적용
        }
    }
    componentDidMount() {
        http
            .get('/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    data: res.data
                })
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