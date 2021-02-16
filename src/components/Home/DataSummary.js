import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SamplesByDataTypeTable from './SamplesByDataTypeTable';
import UpsetPlot from './UpsetPlot';

class DataSummary extends Component {
    render() {
        return(
            <Container className="mt-3 rounded border p-3 shadow-sm">
                <Row><h5>Atlas Data Summary</h5></Row>
                <Row className='mt-2 summary-stats'>
                    
                        <div class='stats-container'>
                            <article className='stats-text'>
                                <img className='inline-block stats-icon' src='img/icon_person_solid.svg'/>
                                <span className='inline-block'>
                                    <div className='stats-number'>48</div>
                                    <div className='stats-label'>Biopsies</div>
                                </span>
                            </article>
                        </div>
                        <div class='stats-container'>
                            <article className='stats-text'>
                                <img className='inline-block stats-icon' src='img/icon_dataset_solid.svg'/>
                                <span className='inline-block'>
                                    <div className='stats-number'>21</div>
                                    <div className='stats-label'>Datasets</div>
                                </span>
                            </article>
                        </div>
                        <div class='stats-container'>
                            <article className='stats-text'>
                                <img className='inline-block stats-icon' src='img/icon_Biofluids_solid.svg'/>
                                <span className='inline-block'>
                                    <div className='stats-number'>999</div>
                                    <div className='stats-label'>Samples</div>
                                </span>
                            </article>
                        </div>
                </Row>
                
                <SamplesByDataTypeTable/>
                <Row className='mt-4'>
                    <Col xs='12'>
                        <a href=''>Learn more about our data types and methodologies</a>
                    </Col>
                </Row>
                <UpsetPlot/>
            </Container>

        );
    }
}

export default DataSummary;