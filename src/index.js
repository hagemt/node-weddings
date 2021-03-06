// @flow
/* eslint-env browser */

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import 'normalize.css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import UI from './UI.js'

if (typeof window === 'object') {
	const root = window.document.getElementById('root')
	ReactDOM.render(<UI />, root) // replaces root element
}
