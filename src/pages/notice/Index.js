import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showThrobber, hideThrobber } from '@/stores/actions'
import Page from '@/components/Page'
import Board from '@/components/Board'
import http from '@/utils/axios'

class Index extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        http
            .get('/posts')
            .then(res => {
                this.setState({
                    data: res.data
                })
                this.props.hideThrobber()
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

let mapDispatchToProps = (dispatch) => {
    return {
        showThrobber: () => dispatch(showThrobber()),
        hideThrobber: () => dispatch(hideThrobber())
    }
}

export default connect(undefined, mapDispatchToProps)(Index)