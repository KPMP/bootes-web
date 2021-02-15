import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ReactTable from 'react-table';
import initialState from '../../initialState';

class UpsetPlot extends Component {
    constructor(props) {
        super(props);
        this.getColumns = this.getColumns.bind(this);
        this.reactTable = React.createRef();

        this.state = {
            columns: this.getColumns(),
            summary: initialState.dataTypeByParticipant
        };
    }

    getColumns() {
        return [
            {
                Header: 'PARTICIPANTS',
                id: "diseaseType",
                accessor: 'diseaseType',
                maxWidth: 200
            },
            {
                Header: "SN RNAseq",
                id: "sn-rnaseq",
                accessor: 'sn-rnaseq',
                Cell: ({row}) => (
                    this.renderCell(row, 'sn-rnaseq', 'sc-rnaseq')
                ),
                maxWidth: 120,
                headerStyle: { wordWrap: 'break-word'}
            },
            {
                Header: "SC RNAseq",
                id: "sc-rnaseq",
                accessor: 'sc-rnaseq',
                Cell: ({row}) => (
                    this.renderCell(row, 'sc-rnaseq', 'lmd-rnaseq')
                ),
                maxWidth: 120
            },
            {
                Header: "LMD RNAseq",
                id: "lmd-rnaseq",
                accessor: 'lmd-rnaseq',
                Cell: ({row}) => (
                    this.renderCell(row, 'lmd-rnaseq', 'bulk-rnaseq')
                ),
                maxWidth: 120
            },
            {
                Header: "Bulk RNAseq",
                id: "bulk-rnaseq",
                accessor: 'bulk-rnaseq',
                Cell: ({row}) => (
                    this.renderCell(row, 'bulk-rnaseq', 'lmd proteomics')
                ),
                maxWidth: 120
            },
            {
                Header: "LMD Proteomics",
                id: "lmd proteomics",
                accessor: 'lmd proteomics',
                Cell: ({row}) => (
                    this.renderCell(row, 'lmd proteomics', '3d cytometry')
                ),
                maxWidth: 120
            },
            {
                Header: "3D Cytometry",
                id: "3d cytometry",
                accessor: '3d cytometry',
                Cell: ({row}) => (
                    this.renderCell(row, '3d cytometry', 'spatial metabolomics')
                ),
                maxWidth: 120
            },
            {
                Header: "Spatial Metabolomics",
                id: "spatial metabolomics",
                accessor: 'spatial metabolomics',
                Cell: ({row}) => (
                    this.renderCell(row, 'spatial metabolomics')
                ),
                maxWidth: 120
            },
        ]
    };

    renderCell(row, dataType, nextDataType) {
        let fontColor = 'black';
        if (row.diseaseType === 'AKI') {
            fontColor = '#0275d8';
        } else if (row.diseaseType === 'CKD') {
            fontColor = '#8B0000';
        }

        
        let lineStyle = { width: '112px', height: '47px', borderBottom: '1px solid black', position: 'absolute'}
        let bulletStyle = { fontSize: "22px", fontWeight: 900, textAlign: "center", display: "block", color: fontColor };



        // if (nextDataType !== undefined && row[dataType] === true && row[nextDataType] === true) {
        //     return <span className='row justify-content-center align-self-center' style={{color: fontColor}}><span style={bulletStyle}>&bull;<hr/></span></span>;
        // }
        if (row[dataType] === true) {
            return <span style={bulletStyle}>&bull;</span>;
        }
        // if (nextDataType !== undefined && row[dataType] == true && row[nextDataType] === true) {
        //     return <span style={{fontSize: "22px", fontWeight: 900, textAlign: "center", display: "block"}}>&bull;</span>;
        // } else if (nextDataType !== undefined && row[dataType] == true && row[nextDataType] === false){
        //     return <span style={{fontSize: "22px", fontWeight: 900, textAlign: "center", display: "block"}}>&bull;</span>;
        // } else if (nextDataType === undefined) {
        //     return <span style={{fontSize: "22px", fontWeight: 900, textAlign: "center", display: "block"}}>&bull;</span>;
        // }
    }

    render() {
        return(
            <article id="upset-plot">
                <Row className='mt-4'>
                    <Col xs='12'>
                        <h6>Overlap of Participants Across Data Types</h6>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col xs='12'>
                        <div>Explanation of data overlap upset plot</div>
                    </Col>
                </Row>
                <Row className='mt-4 mb-4'>
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
                            resizable={false}
                        />
                    </Col>
                </Row>
            </article>

        );
    }
}

export default UpsetPlot;