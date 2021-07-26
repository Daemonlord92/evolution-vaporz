import React from 'react';
import {
	Card,
	CardTitle,
	CardBody
} from 'reactstrap';

const Home = () => {
	return (
		<Card style={{width: '80%' }}>
			<CardTitle style={{ width: '100%',justifyContent: 'center'}}>
				<h3>
					E-volution VaporZ is located in Nashville, Tennessee at 2221 Murfreesboro Pike 37217. We carry a wide variety of Vaping supplies and Mods, for your E-Cigarette. Come by and see us, or give us a call at 615-818-0530. You won't be disappointed. Must be 21 or older to purchase.
				</h3>
			</CardTitle>
		</Card>
		)
}

export default Home;