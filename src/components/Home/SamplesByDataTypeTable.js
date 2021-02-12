import React, { Component } from 'react';
import ReactTable from 'react-table';
import initialState from '../../initialState';

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
                id: "dataType",
                accessor: 'dataType'
            },
            {
                Header: "HEALTHY REFERENCE TISSUE",
                id: "healthyTissue",
                accessor: 'healthyTissue'
            },
            {
                Header: "CKD TISSUE",
                id: "ckdTissue",
                accessor: 'ckdTissue'
            },
            {
                Header: "AKI TISSUE",
                id: "akiTissue",
                accessor: 'akiTissue'
            },
        ]
    };

    render() {
        return(
            <div>
                <ReactTable
                    style={{border: 'none'}}
                    data={this.state.summary}
                    ref={this.reactTable}
                    sortable={false}
                    columns={this.state.columns}
                    className='-striped -highlight'
                    showPagination={false}
                    noDataText={'No data found'}
                    minRows = {0}
                />
            </div>
        );
    }
}

export default SamplesByDataTypeTable;