import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import appStyles from "../../App.module.css"
import postPageStyle from "../../styles/PostPage.module.css"



const PostPage = () => {
    return (
        <Row className="h-100">
          <Col className="py-2 p-0 p-lg-2" lg={8}>
            <p className={postPageStyle.TextColour}>Popular profiles for mobile</p>
            <p className={postPageStyle.TextColour}>Post component</p>
            <Container className={appStyles.Content}>
              Comments
            </Container>
          </Col>
          <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
            Popular profiles for desktop
          </Col>
        </Row>
      );
    }

export default PostPage