/* eslint-env browser */
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const emailSubject = 'Family Wedding in NY'
const emailBody = 'Just FYI, ...'

const emailLeah = 'smilee62991@gmail.com'
const emailTor = 'tor.hagemann@gmail.com'

const mailtoLeah = `mailto:${emailLeah}?cc=${emailTor}&subject=${emailSubject}&body=${emailBody}`
const mailtoTor = `mailto:${emailTor}?cc=${emailLeah}&subject=${emailSubject}&body=${emailBody}`

const weatherLink = 'https://www.google.com/search?q=weather+12009'

const UI = () => (
	<ReactCSSTransitionGroup
		transitionName="example"
		transitionAppear={true}
		transitionAppearTimeout={500}
		transitionEnter={false}
		transitionLeave={false}>
		<div className="flex-centered invitation">
			<img alt="Indian Ladder Farms" src="http://www.indianladderfarms.com/wp-content/uploads/2013/10/farmpump.jpg" />
			<h1>Please Join Us,</h1>
			<p>
				<span>the families of <a href={mailtoTor}>Tor Eivind Hagemann</a></span>
				<span>and <a href={mailtoLeah}>Leah Julianne Simpson,</a> together</span>
				<span>at <a href={weatherLink}>4pm on Sunday, August 20th, 2017</a></span>
			</p>
			<p>
				<span>at <a href="http://www.indianladderfarms.com/">Indian Ladder Farms</a> in Altamont, New York</span>
				<span>to share in the first of many celebrations of their marriage.</span>
			</p>
			<p>
				<span>Intimate ceremony will be held outside, in the shade,</span>
				<span>followed by reception and refreshments, into sunset.</span>
			</p>
		</div>
	</ReactCSSTransitionGroup>
)

export default UI
