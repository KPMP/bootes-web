import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

class LeftContent extends Component {
    render() {
        return(
              <Row>
                <Container className="mt-3 rounded border p-3 shadow-sm">
                  KIDNEY PRECISION MEDICINE PROJECT
                  <h5>Kidney Tissue Atlas</h5>
                  lorum ipsum ....
                </Container>
                <Container className="mt-3 rounded border p-3 shadow-sm">
                  <h5>Atlas Explorer</h5>
                  <div>View summary data visualizations across the various KPMP 'omics' 
                    technologies by gene, and how your marker correlates to clinical 
                    phenotypes.
                  </div>
                  <div className='mt-3'>
                    <Button color='primary' href='/explorer' size='lg' block>Go to Explorer</Button>
                  </div>
                </Container>
                <Container className="mt-3 rounded border p-3 shadow-sm">
                  <h5>Atlas Repository</h5>
                  <div>
                    Lorum ipsum...
                  </div>
                  <div className='mt-3'>
                    <Button color='primary' href='/repository' size='lg' block>Go to Repository</Button>
                  </div>
                </Container>              
              </Row>
        );
    }
}

export default LeftContent;