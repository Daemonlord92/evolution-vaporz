import React from 'react';
import { Timeline } from 'react-twitter-widgets'

const Twitter = () => {
	return(
		<>
			<Timeline
			  dataSource={{
			    sourceType: 'profile',
			    screenName: 'evolutionsmyrna'
			  }}
			  options={{
			    height: '600'
			  }}
			/>
		</>
		)
}

export default Twitter;