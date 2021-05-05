import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import initialState from '../../initialState';

class SamplesPlot extends Component {

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
        yaxis: 'y2',
        y: [
            `<a href='https://qa-atlas.kpmp.org/repository/?facetTab=files&filters={"op":"and","content":[{"op":"in","content":{"field":"data_format","value":["fastq"]}},{"op":"in","content":{"field":"experimental_strategy","value":["Single-nucleus RNA-Seq"]}}]}'>Single-nucleus FASTQs</a>`,
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
                        autosize: false,
                        width: 850,
                        height: 500,
                        textposition:'auto',
                        textfont: {family:'FontAwesome'},
                        mode: 'text',
                        margin: {
                            l: 0,
                            r: 0,
                            b: 0,
                            t: 0,
                            pad: 0
                        },
                        hovermode: false,
                        xaxis: {
                            domain: [0.4, 1],
                            showticklabels: false,
                            zerolinecolor: '#cccccc',
                            showgrid: false,
                            showline: true,
                            align:'left',
                            automargin: true
                        },
                        yaxis2: {
                            anchor:'free',
                            showgrid: false,
                            position:0.03,
                            side:'right'
                        }
                    }}
                    config={{displayModeBar:false}}
                />
            </div>
        );
    }
}

export default SamplesPlot;