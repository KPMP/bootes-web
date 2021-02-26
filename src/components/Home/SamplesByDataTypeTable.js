import React, { Component } from 'react';
import ReactTable from 'react-table';
import initialState from '../../initialState';
import { Row, Col } from 'reactstrap';

class SamplesByDataTypeTable extends Component {

    constructor(props) {
        super(props);
        this.getColumns = this.getColumns.bind(this);
        this.reactTable = React.createRef();

        this.state = {
            columns: this.getColumns(),
            summary: initialState.summary
        };
    }

    getColumns() {
        
        return [
            {
                Header: 'SAMPLES BY DATA TYPE',
                id: 'dataType',
                accessor: 'dataType',
                headerStyle: { whiteSpace: 'pre-wrap'}
            },
            {
                Header: () => (
                    <span>HEALTHY REFERENCE<br/>TISSUE</span>
                ),
                id: 'healthyTissue',
                accessor: 'healthyTissue',
                headerStyle: { whiteSpace: 'pre-wrap'}
            },
            {
                Header: () => (
                    <span>CKD<br/>TISSUE</span>
                ),
                id: 'ckdTissue',
                accessor: 'ckdTissue',
                headerStyle: { whiteSpace: 'pre-wrap'}
            },
            {
                Header: () => (
                    <span>AKI<br/>TISSUE</span>
                ),
                id: 'akiTissue',
                accessor: 'akiTissue',
                headerStyle: { whiteSpace: 'pre-wrap'}
            },
        ]
    };

    render() {
        return(
            <article id='summary-plot'>
                <Row className='mt-4'>
                    <Col xs='12'>
                        <ReactTable
                            style={{border: 'none'}}
                            data={this.state.summary}
                            ref={this.reactTable}
                            sortable={false}
                            columns={this.state.columns}
                            className='-striped'
                            showPagination={false}
                            noDataText={'No data found'}
                            minRows = {0}
                        />
                    </Col>
                </Row>
            </article>
        );
    }
}

export default SamplesByDataTypeTable;