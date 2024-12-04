import { Link } from "react-router-dom"
import { Container, Button, Row, Col } from 'react-bootstrap'

import ReviewsList from "../../../components/Reviews/ReviewsList/ReviewsList"

import "./ReviewsPage.css"

const ReviewsPage = () => {
    return (
        <div className="ReviewsPage">

            <Container className="text-center">
                <Row className="mt-5 d-flex align-items-center">
                    <Col>
                        <h3 className="section-title">Reviews</h3>
                        <hr />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <ReviewsList />
                </Row>
                <Button variant="dark" className="styled-button-2" to={'/'} as={Link}>Volver a la Home</Button>
            </Container>

        </div>
    )
}

export default ReviewsPage