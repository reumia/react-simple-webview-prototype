import React, { Component } from 'react'
import Page from '../../components/Page'
import Post from '../../components/Post'

class Single extends Component {
    constructor (props) {
        super(props)
        this.state = {
            id: null,
            title: null,
            body: null,
            createAt: null,
        }
    }
    componentDidMount () {
        this.setState({
            id: parseInt(this.props.match.params.id, 10),
            title: '제목제목제목',
            body: '본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문',
            createAt: new Date(),
        })
    }
    render () {
        const state = this.state

        return (
            <Page title={this.props.match.url}>
                <Post
                    id={ state.id }
                    title={ state.title }
                    body={ state.body }
                    createAt={ state.createAt }
                />
            </Page>
        )
    }
}

export default Single