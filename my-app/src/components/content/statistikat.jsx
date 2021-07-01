import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import logo from '.././images/logo.png';
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Votat e Numeruara",
    subcaption: "2021",
    xaxisname: "Partite",
    yaxisname: "Numri i votave",
    formatnumberscale: "1",
    plottooltext: "<b>$dataValue</b> vota ka <b>$seriesName</b> ",
    theme: "fusion",
  },
  categories: [
    {
      category: [
        {
          label: "2021",
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: "PDK",
      data: [
        {
          value: "1250000",
        },
      ],
    },
    {
      seriesname: "LDK",
      data: [
        {
          value: "700000",
        },
      ],
    },
    {
      seriesname: "VV",
      data: [
        {
          value: "1000000",
        },
      ],
    },
    {
      seriesname: "AAK",
      data: [
        {
          value: "250000",
        },
      ],
    },
    {
      seriesname: "AKR",
      data: [
        {
          value: "58500",
        },
      ],
    },
  ],
};

export class statistikat extends React.Component {
  render() {
    return (
      <div>
        <ReactFusioncharts
          type="mscolumn3d"
          width="100%"
          height="500"
          dataFormat="JSON"
          dataSource={dataSource}
        />

<div class="footerS">
          <img src={logo} class="imageF"></img>
            <i>&copy;</i>
          <p>Te gjitha te drejtat e rezervuara</p>
        </div>
      </div>
    );
  }
}

export default statistikat;
