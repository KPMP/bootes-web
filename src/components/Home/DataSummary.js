import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SamplesByDataTypeTable from './SamplesByDataTypeTable';

class DataSummary extends Component {
    render() {
        return(
            <Col xs='8'>
                <Container className="mt-3 rounded border p-3 shadow-sm">
                    <Row><h5>Atlas Data Summary</h5></Row>
                    <Row className='mt-2'>
                        <Col xs='4'>
                        <img src='img/icon_person_solid.svg'/>
                        48 Biopsies
                        </Col>
                        <Col xs='4'>
                        <img src='img/icon_dataset_solid.svg'/>
                        21 Datasets
                        </Col>
                        <Col xs='4'>
                        <img src='img/icon_Biofluids_solid.svg'/>
                        9999 Samples
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        hi
                        <SamplesByDataTypeTable/>
                    </Row>
                </Container>
            </Col>

        );
    }
}

export default DataSummary;