import React from "react";
import { render } from "react-dom";
import HighchartsReact from "highcharts-react-official";
// Import Highcharts
import Highcharts from "highcharts";
import highchartsGantt from "highcharts/modules/gantt";

highchartsGantt(Highcharts);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"ganttChart"}
          options={{
            yAxis: {
              type: "category",
              grid: {
                enabled: true,
                columns: [{ title: "Xyz", categories: ["x", "y"] }]
              }
            },
            series: [
              {
                data: [
                  { x: 0, x2: 100000, y: 0 },
                  { x: 100000, x2: 200000, y: 1 }
                ]
              }
            ]
          }}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
