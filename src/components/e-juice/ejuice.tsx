import React from 'react';
import {
	Card,
	CardTitle,
	CardBody,
	ListGroup,
	ListGroupItem
} from 'reactstrap';

const Ejuice = () => {
	return (
			<Card style={{width: '80%', margin: '5rem auto' }}>
				<CardTitle style={{ width: '100%',justifyContent: 'center'}}>
					<h3>
						E-Juices
					</h3>
				</CardTitle>
				<CardBody>
					<ListGroup>
						<ListGroupItem>
							Alt Zero
						</ListGroupItem>
						<ListGroupItem>
							Aqua
						</ListGroupItem>
						<ListGroupItem>
							Barista Brew
						</ListGroupItem>
						<ListGroupItem>
							Basixs
						</ListGroupItem>
						<ListGroupItem>
							Big Bottle Co.
						</ListGroupItem>
						<ListGroupItem>
							Candy King
						</ListGroupItem>
						<ListGroupItem>
							Charlie's Chalk Dust
						</ListGroupItem>
						<ListGroupItem>
							Dinner Lady
						</ListGroupItem>
						<ListGroupItem>
							Element Drip
						</ListGroupItem>
						<ListGroupItem>
							Excision
						</ListGroupItem>
						<ListGroupItem>
							Havana
						</ListGroupItem>
						<ListGroupItem>
							Humble Juice Co.
						</ListGroupItem>
						<ListGroupItem>
							Hometown Hero
						</ListGroupItem>
						<ListGroupItem>
							Jam Monster
						</ListGroupItem>
					</ListGroup>
					<h4>
						Also many more and we are constantly getting new juices!
					</h4>
					<h4>
						So come in and check out our great juice selection.
					</h4>
				</CardBody>
			</Card>
		)
}

export default Ejuice;