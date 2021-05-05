import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SamplesTable from './SamplesTable';
import SamplesByDataTypeTable from './SamplesByDataTypeTable';

class DataSummary extends Component {
    render() {
        return(
            <Container className="landing mt-3 rounded border p-3 shadow-sm">
                <Row><h3 className="subtitle">Kidney Precision Medicine Project</h3></Row>
                <Row><h1 className="title">Kidney Tissue Atlas</h1></Row>
                <Row><p>The Kidney Tissue Atlas is a set of interactive tools built to promote retrieval, exploration, discovery, and analysis of the KPMP data by the greater research community.</p></Row>

                <Col xs='12'>
                    <a href='http://google.com'>Learn more about our data types and methodologies</a>
                </Col>

                <Row><h2 className="data-summary">Atlas Data Summary</h2></Row>
                <Row><h5 className="sub-header">What data can I find in the Atlas Explorer?</h5></Row>
                <Row><p>A subset of the raw data from the Data Repository has been analyzed and made available for interactive mining in the Atlas Explorer.</p></Row>

                <div>
                    <SamplesByDataTypeTable/>
                </div>
                


               <Row><h5 className="sub-header lowered">What data can I find in the Data Repository?</h5></Row>
               <Row><p>The datasets available in the repository are a combination of raw and processed data from KPMP participant biopsies and reference tissue samples.</p></Row>

                
               <Row><p>Current data types in the repository include:</p></Row>

               <SamplesTable/>
               <Row><h5 className="lock"><i class="fa fa-lock" aria-hidden="true"></i> = Controlled data. <a className="learn-link" href="/">Learn how to access controlled data.</a></h5></Row>

                <Row className='mt-4'>
                </Row>
            </Container>

        );
    }
}

export default DataSummary;