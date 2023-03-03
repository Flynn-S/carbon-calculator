import { ResponsiveLine } from "@nivo/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const LineGraph = ({ data }) => {
  console.log(data);
  // data.data.forEach((line) => {
  return (
    <ResponsiveLine
      data={data}
      // color={color}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "0",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "time",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "carbon offset (kg)",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      lineWidth={4}
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      isInteractive={false}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

// return (
//   {data.data.map((line) => {
//     <ResponsiveLine

//     // colors={data.data.map((line) => line.color)}
//     margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//     xScale={{ type: "point" }}
//     yScale={{
//       type: "linear",
//       min: "0",
//       max: "auto",
//       stacked: false,
//       reverse: false,
//     }}
//     yFormat=" >-.2f"
//     axisTop={null}
//     axisRight={null}
//     axisBottom={{
//       orient: "bottom",
//       tickSize: 5,
//       tickPadding: 5,
//       tickRotation: 0,
//       legend: "time",
//       legendOffset: 36,
//       legendPosition: "middle",
//     }}
//     axisLeft={{
//       orient: "left",
//       tickSize: 5,
//       tickPadding: 5,
//       tickRotation: 0,
//       legend: "carbon offset (kg)",
//       legendOffset: -40,
//       legendPosition: "middle",
//     }}
//     lineWidth={4}
//     enablePoints={false}
//     pointSize={10}
//     pointColor={{ theme: "background" }}
//     pointBorderWidth={2}
//     pointBorderColor={{ from: "serieColor" }}
//     pointLabelYOffset={-12}
//     isInteractive={false}
//     legends={[
//       {
//         anchor: "bottom-right",
//         direction: "column",
//         justify: false,
//         translateX: 100,
//         translateY: 0,
//         itemsSpacing: 0,
//         itemDirection: "left-to-right",
//         itemWidth: 80,
//         itemHeight: 20,
//         itemOpacity: 0.75,
//         symbolSize: 12,
//         symbolShape: "circle",
//         symbolBorderColor: "rgba(0, 0, 0, .5)",
//         effects: [
//           {
//             on: "hover",
//             style: {
//               itemBackground: "rgba(0, 0, 0, .03)",
//               itemOpacity: 1,
//             },
//           },
//         ],
//       },
//     ]}
//   />
//   })}
// )

export default LineGraph;
