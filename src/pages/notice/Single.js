import React, { Component } from 'react'
import Page from '@/components/Page'
import Post from '@/components/Post'
import Link from '@/components/Link'
import Call from '@/components/Call'
import http from '@/utils/axios'

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
        const id = parseInt(this.props.match.params.id, 10)

        http
            .get(`/posts/${id}`)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    title: res.data.title,
                    body: res.data.body,
                    createAt: res.data.createAt,
                })
            })
    }
    render () {
        const state = this.state
        const url = this.props.match.url

        return (
            <Page title={ url }>
                <Post
                    id={ state.id }
                    title={ state.title }
                    body={ state.body }
                    createAt={ state.createAt }
                />
                <Link url={ url }>To the List</Link>
                <Call type="HOME">To the Home</Call>
            </Page>
        )
    }
}

export default Single