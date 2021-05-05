import React, { Component } from 'react';
import ReactTable from 'react-table';
import Plot from 'react-plotly.js';
import initialState from '../../initialState';
import { Row, Col } from 'reactstrap';

class SamplesByDataTypeTable extends Component {

    constructor(props) {
        super(props);
        this.reactTable = React.createRef();

        this.state = {
            summary: initialState.summary
        };
    }

    render() {
    var data = [{
        type: 'bar',
        x: [440, 66, 51, 210, 56, 51, 48, 89, 5, 8, 4, 4, 400, 103, 2].reverse(),
        marker: {color: 'rgb(40, 60, 94)'},
        text: [440, 66, 51, 210, 56, 51, 48, 89, 5, 8, 4, 4, 400, 103, 2].reverse(),
        textposition:'outside',
        
        y: [
            `<i class="fa fa-lock" aria-hidden="true"></i><a href='https://qa-atlas.kpmp.org/repository/?facetTab=files&filters={"op":"and","content":[{"op":"in","content":{"field":"data_format","value":["fastq"]}},{"op":"in","content":{"field":"experimental_strategy","value":["Single-nucleus RNA-Seq"]}}]}'>Single-nucleus FASTQs</a>`,
            `<a href='https://qa-atlas.kpmp.org/repository/?facetTab=files&filters={"op":"and","content":[{"op":"in","content":{"field":"data_format","value":["bam"]}},{"op":"in","content":{"field":"experimental_strategy","value":["Single-nucleus RNA-Seq"]}}]}'>Single-nucleus BAMs</a>`,
            `<a href='https://qa-atlas.kpmp.org/repository/?facetTab=files&filters={"op":"and","content":[{"op":"in","content":{"field":"experimental_strategy","value":["Single-nucleus RNA-Seq"]}},{"op":"in","content":{"field":"workflow_type","value":["Expression Matrix"]}}]}'>Single-nucleus expression matrices</a>`,
            `<a href='https://qa-atlas.kpmp.org/repository/?facetTab=files&filters={"op":"and","content":[{"op":"in","content":{"field":"data_format","value":["fastq"]}},{"op":"in","content":{"field":"experimental_strategy","value":["Single-cell RNA-Seq"]}}]}'>Single-cell FASTQs</a>`,
            `<a href='https://qa-atlas.kpmp.org/repository/?facetTab=files&filters={"op":"and","content":[{"op":"in","content":{"field":"data_format","value":["bam"]}},{"op":"in","content":{"field":"experimental_strategy","value":["Single-cell RNA-Seq"]}}]}'>Single-cell BAMs</a>`,
            `<a href='https://qa-atlas.kpmp.org/repository/?facetTab=files&filters={"op":"and","content":[{"op":"in","content":{"field":"experimental_strategy","value":["Single-cell RNA-Seq"]}},{"op":"in","content":{"field":"workflow_type","value":["Expression Matrix"]}}]}'>Single-cell expression matrices</a>`,
            `<a href='https://qa-atlas.kpmp.org/repository/?facetTab=files&filters={"op":"and","content":[{"op":"in","content":{"field":"data_format","value":["fastq"]}},{"op":"in","content":{"field":"experimental_strategy","value":["Sub-segmental LMD Transcriptomics"]}}]}'>LMD RNA FASTQs</a>`,
            `<a href='https://qa-atlas.kpmp.org/repository/?facetTab=files&filters={"op":"and","content":[{"op":"in","content":{"field":"data_format","value":["bam"]}},{"op":"in","content":{"field":"experimental_strategy","value":["Sub-segmental LMD Transcriptomics"]}}]}'>LMD RNA BAMs</a>`,
            `<a href='https://qa-atlas.kpmp.org/repository/?facetTab=files&filters={"op":"and","content":[{"op":"in","content":{"field":"experimental_strategy","value":["Sub-segmental LMD Transcriptomics"]}},{"op":"in","content":{"field":"workflow_type","value":["Non-normalized Expression Matrix","Normalized Expression Matrix"]}}]}'>LMD expression matrices</a>`,
            `<a href='https://qa-atlas.kpmp.org/repository/?facetTab=files&filters={"op":"and","content":[{"op":"in","content":{"field":"data_format","value":["fastq"]}},{"op":"in","content":{"field":"experimental_strategy","value":["Bulk Total/mRNA"]}}]}'>Bulk RNA FASTQs</a>`,
            `<a href='https://qa-atlas.kpmp.org/repository/?facetTab=files&filters={"op":"and","content":[{"op":"in","content":{"field":"data_format","value":["bam"]}},{"op":"in","content":{"field":"experimental_strategy","value":["Bulk Total/mRNA"]}}]}'>Bulk RNA BAMs</a>`,
            `<a href='https://qa-atlas.kpmp.org/repository/?facetTab=files&filters={"op":"and","content":[{"op":"in","content":{"field":"experimental_strategy","value":["Bulk Total/mRNA"]}},{"op":"in","content":{"field":"workflow_type","value":["Non-normalized Expression Matrix"]}}]}'>Bulk RNA Expression matrices</a>`,
            `<a href='https://qa-atlas.kpmp.org/repository/?facetTab=files&filters={"op":"and","content":[{"op":"in","content":{"field":"experimental_strategy","value":["Light Microscopic Whole Slide Images"]}}]}'>LM WSI</a>`,
            `<a href='https://qa-atlas.kpmp.org/repository/?facetTab=files&filters={"op":"and","content":[{"op":"in","content":{"field":"workflow_type","value":["Experimental Metadata"]}}]}'>Experimental metadata</a>`,
            `<a href='https://qa-atlas.kpmp.org/repository/?facetTab=files&filters={"op":"and","content":[{"op":"in","content":{"field":"data_type","value":["Clinical Study Data"]}}]}'>Clinical dataset</a>`,
            
    ].reverse(),
        orientation: 'h'
      }];
      
      
        return(
            <div className="samples-plot">
            <Plot
             data={data}
             layout={{
                textposition:'auto',
                margin: {
                    l: 225,
                    r: 25,
                    b: 25,
                    t: 25,
                    pad: 4
                },
                hovermode: false,
                xaxis: {
                    showticklabels: false,zeroline: false, showgrid: false, showline: true, align:'left',
                },
                yaxis: {anchor:'free', position:0.05, side:'right'}
                // axis=dict(domain=[0.15, 0.9])
                
             }}
             config={{displayModeBar:false }}
             />
            {/* <Plot divId="umapPlot" data={this.state.plotData}
            layout={ { annotations: this.state.plotAnnotations, width: 460, showlegend: false,
                yaxis: { zeroline: false, showgrid: false, showline: true },
                xaxis: { zeroline: false, showgrid: false, showline: true },
                autosize: false,
                // hovermode: 'closest',
                // dragmode: 'pan',
                margin: {
                    l: 25,
                    r: 25,
                    b: 25,
                    t: 25,
                    pad: 4
                } } }
            config={{
                displaylogo: false,
                // toImageButtonOptions: { filename: this.getExportFilename() },
                modeBarButtonsToRemove: ['hoverCompareCartesian', 'hoverClosestCartesian', 'zoom2d', 'toggleSpikelines', 'toggleHover', 'select2d', 'lasso2d']}}
      /> */}
                  </div>
        );
    }
}

export default SamplesByDataTypeTable;