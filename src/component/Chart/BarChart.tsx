import { Button, Stack } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Layout from "../Layout";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
    },
  },
};

const labels = ["1", "2", "3", "4", "5"];
//  const xValues = ["1", "2", "3", "4", "5"];
const yValues = [5, 9, 4, 2, 7];
const barColors = ["#EB5757", "#FFCB08", "blue", "#2F80ED", "#213782"];
export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: yValues,
      backgroundColor: barColors,
    },
  ],
};

export default function BarChart() {
  return (
    <div
      style={{
        // display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Stack style={{ width: "60%" }}>
        <Bar options={options} data={data} />
      </Stack>
      <p
        style={{
          justifyItems: "center",
          marginTop: "10px",
          fontSize: "20px",
          marginBottom: "30px",
        }}
      >
        Chuẩn bị ôn tập: ... từ
      </p>
      <Button>ÔN TẬP NGAY</Button>
    </div>
  );
}
