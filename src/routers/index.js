import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NoticeIndex from '@/pages/notice/Index'
import NoticeSingle from '@/pages/notice/Single'

import './index.scss'

/**
 * Link 컴퍼넌트 대신 a링크 씀.
 * 어플리케이션이 변경되는 location을 기반으로 새로운 페이지 인스턴스를 생성하거나 history 관리를 담당.
 */
const BasicRouter = ({ dispatch }) => (
    <Router>
        <div className="app">
            <nav className="app-nav">
                <a className="app-nav-item" href="/notice">/notice</a>
                <a className="app-nav-item" href="/notice/3">/notice/3</a>
            </nav>
            <main className="app-body">
                <Route exact path="/notice" component={NoticeIndex}/>
                <Route path="/notice/:id" component={NoticeSingle}/>
            </main>
        </div>
    </Router>
)

export default BasicRouter