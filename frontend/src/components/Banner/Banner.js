import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import './banner.css'

export default function Banner() {

    let [banner, setBanner] = useState({})


    useEffect(() => {
        let logodetails = async () => {
            let { data } = await axios.get("http://localhost:8000/logo")
            setBanner(data)
        }
        logodetails()
    }, [])



    return (
        <div>
            <div className="banner_main">
                <div className="social_icon"></div>
                <>
                    <Row>
                        <Col lg={6}>
                            <div className="shape_main">
                                <img src="assets/images/banner/bubble-1.png" alt='bubble-1.png'/>
                            </div>
                        </Col>
                        <Col lg={6}></Col>
                    </Row>
                </>
            </div>
        </div>
    )
}
