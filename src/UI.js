/* eslint-env browser */
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import imageLink from './sunset.jpg'
const imageText = 'Indian Ladder Farms'

const emailSubject = 'Family Wedding in NY'
const emailBody = 'Just FYI, ...'

const emailLeah = 'smilee62991@gmail.com'
const emailTor = 'tor.hagemann@gmail.com'

const mailtoLeah = `mailto:${emailLeah}?cc=${emailTor}&subject=${emailSubject}&body=${emailBody}`
const mailtoTor = `mailto:${emailTor}?cc=${emailLeah}&subject=${emailSubject}&body=${emailBody}`

const venueLink = 'http://www.indianladderfarms.com/'
const weatherLink = 'https://www.google.com/search?q=weather+12009'
//const weatherLink = 'https://www.google.com/search?q=weather+12009+august+20th+2017'
//const weatherLink = 'http://www.accuweather.com/en/us/altamont-ny/12009/daily-weather-forecast/2083603?day=80'

const UI = () => (
	<ReactCSSTransitionGroup
		transitionName="invitation"
		transitionAppear={true}
		transitionAppearTimeout={5000}
		transitionEnter={false}
		transitionLeave={false}>
		<div className="flex-centered invitation">
			<img alt={imageText} src={imageLink} />
			<h1>Please Join Us,</h1>
			<p>
				<span>the families of <a href={mailtoTor}>Tor Eivind Hagemann</a></span>
				<span>and <a href={mailtoLeah}>Leah Julianne Simpson,</a> together</span>
				<span>at <a href={weatherLink}>4pm on Sunday, August 20th, 2017</a></span>
			</p>
			<p>
				<span>at <a href={venueLink}>Indian Ladder Farms</a> in Altamont, New York</span>
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
