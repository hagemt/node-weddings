// @flow
/* eslint-env browser */
import { CSSTransitionGroup } from 'react-transition-group'
import React from 'react'

import imageLink from './images/sunset.jpg'
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
	<CSSTransitionGroup
		transitionName="invitation"
		transitionAppear={true}
		transitionAppearTimeout={1000}
		transitionEnter={false}
		transitionLeave={false}>
		<div className="flex-centered invitation">
			<img alt={imageText} src={imageLink} />
			<div className="flex-leftish invitation-text">
				<h1 className="invitation-header">&#x1f491;&nbsp;Please Join Us,</h1>
				<p>
					<span>the families of <a href={mailtoTor}>&#x1f3A9;&nbsp;Tor Eivind Hagemann</a></span>
					<span>and <a href={mailtoLeah}>&#x1f470;&nbsp;Leah Julianne Simpson,</a> together</span>
					<span>at <a href={weatherLink}>&#x1f553;&nbsp;4pm on Sunday, August 20th, 2017</a></span>
				</p>
				<p>
					<span>at <a href={venueLink}>&#x1f492;&nbsp;Indian Ladder Farms</a> in Altamont, New York</span>
					<span>to share in the first of many celebrations of their marriage.</span>
				</p>
				<p>
					<span>Intimate ceremony will be held outside, in the shade,</span>
					<span>followed by reception and refreshments, into sunset.</span>
				</p>
				<p>
					<span className="invitation-footer">&#x1f1e9;&#x1f1f0; + &#x1f1ee;&#x1f1f9; + &#x1f1fa;&#x1f1f8;</span>
				</p>
				<p>
					<span>P.S. For early arrivals, some nearby attractions:</span>
					<ul>
						<li><a href="https://parks.ny.gov/parks/128/">John Boyd Thacher State Park</a> open all year</li>
						<li><a href="http://www.altamontfair.com/">The Altamont Fair</a> from 15th&mdash;20th August, 2017</li>
						<li><a href="http://www.spac.org">Performing Arts Center</a> in <a href="http://www.saratoga.com/">Saratoga</a></li>
						<li><a href="http://www.proctors.org/">Proctors Theatre</a> in Downtown Schenectady</li>
						<li>
							<a href="http://www.rpi.edu/">Rensselaer Polytechnic Institute</a>
							<br />
							<span>(university campus where Leah and Tor met)</span>
						</li>
					</ul>
				</p>
				<p>
					<span>For those less familiar with the area, accommodations and shopping:</span>
					<ul>
						<li><a href="https://www.yelp.com/biz/hotel-indigo-albany-latham-latham">Hotel Indigo (near airport)</a></li>
						<li><a href="https://www.yelp.com/biz/colonie-center-albany">Colonie Center Mall</a></li>
						<li><a href="https://www.yelp.com/biz/crossgates-mall-albany">Crossgates Mall</a></li>
					</ul>
				</p>
			</div>
		</div>
	</CSSTransitionGroup>
)

export default UI
