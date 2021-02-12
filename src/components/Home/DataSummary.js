import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SamplesByDataTypeTable from './SamplesByDataTypeTable';
import UpsetPlot from './UpsetPlot';

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
                    
                    <SamplesByDataTypeTable/>
                    <Row className='mt-4'>
                        <Col xs='12'>
                            <div>Learn more about our data types and methodologies</div>
                        </Col>
                    </Row>
                    <UpsetPlot/>
                </Container>
            </Col>

        );
    }
}

export default DataSummary;