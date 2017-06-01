/* eslint-env browser */
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const emailSubject = 'Family Wedding in NY'
const emailBody = 'Just FYI, ...'

const emailLeah = 'smilee62991@gmail.com'
const emailTor = 'tor.hagemann@gmail.com'

const mailtoLeah = `mailto:${emailLeah}&cc=${emailTor}&subject=${emailSubject}&body=${emailBody}`
const mailtoTor = `mailto:${emailTor}&cc=${emailLeah}&subject=${emailSubject}&body=${emailBody}`

const weatherLink = 'https://www.google.com/search?q=weather+12009'

const UI = () => (
	<ReactCSSTransitionGroup
		transitionName="example"
		transitionAppear={true}
		transitionAppearTimeout={500}
		transitionEnter={false}
		transitionLeave={false}>
		<div className="invitation" key="invitation">
			<img alt="Indian Ladder Farms" src="http://www.indianladderfarms.com/wp-content/uploads/2013/10/farmpump.jpg" />
			<p>
				<span>Please join <a href={mailtoTor}>Tor Eivind Hagemann</a></span>
				<br />
				<span>together with <a href={mailtoLeah}>Leah Julianne Simpson</a></span>
				<br />
				<span>in the afternoon (4pm) on <a href={weatherLink}>Sunday, August 20th, 2017</a></span>
				<br />
				<span>at <a href="http://www.indianladderfarms.com/">Indian Ladder Farms</a> (ceremony outside)</span>
				<br />
				<span>to share in the first celebration of their marriage.</span>
			</p>
		</div>
	</ReactCSSTransitionGroup>
)

export default UI
