import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import logo from ".././images/logo.png";
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Votat e Numëruara",
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

const dataSource2 = {
  chart: {
    caption: "Pjesemarrja ne votime",
    subcaption: "2021",
    xaxisname: "Qyteti",
    yaxisname: "Popullsia",
    formatnumberscale: "1",
    plottooltext: "<b>$dataValue</b> vota ka ne <b>$seriesName</b> ",
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
      seriesname: "Prishtine",
      data: [
        {
          value: "500000",
        },
      ],
    },
    {
      seriesname: "Gjilan",
      data: [
        {
          value: "300000",
        },
      ],
    },
    {
      seriesname: "Gjakove",
      data: [
        {
          value: "520000",
        },
      ],
    },
    {
      seriesname: "Peje",
      data: [
        {
          value: "600000",
        },
      ],
    },
    {
      seriesname: "Prizren",
      data: [
        {
          value: "230000",
        },
      ],
    },
  ],
};

const dataSource3 = {
  chart: {
    caption: "Numri i deputeteve per secilen parti",
    subcaption: "Totali i deputeteve eshte 120",
    showvalues: "1",
    showpercentintooltip: "0",
    // numberprefix: "$",
    enablemultislicing: "1",
    theme: "fusion",
  },
  data: [
    {
      label: "PDK",
      value: "25",
    },
    {
      label: "VV",
      value: "30",
    },
    {
      label: "AAK",
      value: "10",
    },
    {
      label: "LDK",
      value: "22",
    },
    {
      label: "AKR",
      value: "5",
    },
  ],
};

const dataSource4 = {
  chart: {
    caption: "Pjesemarrja ne votime",
    yaxisname: "Popullsia",
    subcaption: "[2005-2021]",
    // numbersuffix: " mph",
    rotatelabels: "1",
    setadaptiveymin: "1",
    theme: "candy",
  },
  data: [
    {
      label: "2005",
      value: "1200000",
    },
    {
      label: "2007",
      value: "1100000",
    },
    {
      label: "2009",
      value: "1300000",
    },
    {
      label: "2011",
      value: "1150000",
    },
    {
      label: "2013",
      value: "800000",
    },
    {
      label: "2015",
      value: "1520000",
    },
    {
      label: "2017",
      value: "1000000",
    },

    {
      label: "2019",
      value: "1250000",
    },
    {
      label: "2021",
      value: "1200000",
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

        <ReactFusioncharts
          type="pie3d"
          width="100%"
          height="300"
          dataFormat="JSON"
          dataSource={dataSource3}
        />

        <ReactFusioncharts
          type="mscolumn3d"
          width="100%"
          height="500"
          dataFormat="JSON"
          dataSource={dataSource2}
        />

        <ReactFusioncharts
          type="line"
          width="100%"
          height="30%"
          dataFormat="JSON"
          dataSource={dataSource4}
        />

        <div class="footerS">
          <img src={logo} class="imageF"></img>
          <i>&copy;</i>
          <p>Republika e Kosovës - Te gjitha te drejtat e rezervuara</p>
        </div>
      </div>
    );
  }
}

export default statistikat;
