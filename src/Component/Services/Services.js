import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import packing from "../../images/packing.jpg";

const Services = () => {
    return (
        <div className='container'>
            <h1 className='text-color item-header text-center fw-bold'>Our Services</h1>
            <hr className='mb-5 mx-auto' style={{ height: "5px", color: "#002266", width: "100px", borderRadius: "5px" }} />
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card className='border-0 h-100'>
                        <Card.Img className='h-100' variant="top" src="https://www.ar-racking.com/gestor/recursos/uploads/imagenes/noticias/NORDFROST-lager-1.jpg" />
                        <Card.Body className='p-0'>
                            <hr style={{ height: "5px", color: "#002266", width: "100px", borderRadius: "5px" }} />
                            <Card.Title className='nav-brand text-color fs-3 fw-bold'>Deep Freezing</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0 h-100'>
                        <Card.Img className='h-100' variant="top" src="https://i0.wp.com/activescale.com/wp-content/uploads/2020/02/types-of-railcar-scales.jpg" />
                        <Card.Body className='p-0'>
                            <hr style={{ height: "5px", color: "#002266", width: "100px", borderRadius: "5px" }} />
                            <Card.Title className='nav-brand text-color fs-3 fw-bold'>Rail Transloading</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0 h-100'>
                        <Card.Img className='h-100' variant="top" src="https://www.cleanlink.com/resources/editorial/2019/warehouse-24695.jpg" />
                        <Card.Body className='p-0'>
                            <hr style={{ height: "5px", color: "#002266", width: "100px", borderRadius: "5px" }} />
                            <Card.Title className='nav-brand text-color fs-3 fw-bold'>Export Import</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0 h-100'>
                        <Card.Img className='h-100' variant="top" src="https://masters.ba/images/tq0qrd8d9e.jpg" />
                        <Card.Body className='p-0'>
                            <hr style={{ height: "5px", color: "#002266", width: "100px", borderRadius: "5px" }} />
                            <Card.Title className='nav-brand text-color fs-3 fw-bold'>Labeling</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0 h-100'>
                        <Card.Img className='h-100' variant="top" src="https://i0.wp.com/www.inventiva.co.in/wp-content/uploads/2022/02/warehouse-management-system-wms.jpg?resize=780%2C470&ssl=1" />
                        <Card.Body className='p-0'>
                            <hr style={{ height: "5px", color: "#002266", width: "100px", borderRadius: "5px" }} />
                            <Card.Title className='nav-brand text-color fs-3 fw-bold'>Inspection</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0 h-100'>
                        <Card.Img className='h-100' variant="top" src={packing} />
                        <Card.Body className='p-0'>
                            <hr style={{ height: "5px", color: "#002266", width: "100px", borderRadius: "5px" }} />
                            <Card.Title style={{ fontSize: "0px" }} className='nav-brand text-color fs-3 fw-bold fs-3 fw-bold'>Packing</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Services;