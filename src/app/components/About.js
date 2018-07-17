import { h } from 'preact' // eslint-disable-line no-unused-vars

export default () => (
  <div className='About page'>
	<div className='about-wrapper'>
		<h2>About Math per Minute</h2>
		<p>I wanted to get some exposure to progressive web apps, and after losing the math speed round in Jackbox Party Pack 3's trivia game, I decided to build a math speed test of my own.</p>
		<p>Read more about me on my <a href="https://brismuth.com/" target="_blank">blog</a>, or look me up on <a href="https://stackoverflow.com/users/1569320/brismuth" target="_blank">Stack Overflow</a>.</p>
		<h2>Features</h2>
		<ul>
			<li>Counts the number of addition and subtraction problems you can solve in a minute</li>
			<li>Progressive web app</li>
			<li>Mobile friendly</li>
			<li>Offline support</li>
		</ul>
		<p>If you want to see how many math problems you can do in one minute, <a href="/">click here</a>.</p>
	</div>
  </div>
)
