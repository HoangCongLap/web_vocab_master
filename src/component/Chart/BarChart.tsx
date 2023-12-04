import { Button, Center, Stack } from "@chakra-ui/react";
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
        minHeight: "91vh",
        display: "flex",
      }}
    >
      <Stack style={{ width: "70%", margin: "0 auto", marginTop: "120px" }}>
        <Bar options={options} data={data} />
        <p
          style={{
            justifyItems: "center",
            marginTop: "10px",
            fontSize: "20px",
            marginBottom: "30px",
            margin: "20px auto 0px",
          }}
        >
          Chuẩn bị ôn tập: ... từ
        </p>
        <Button
          margin={"0 auto"}
          marginTop={"20px"}
          width={"60%"}
          color={"white"}
          borderRadius={25}
          fontSize={20}
          background={"linear-gradient(83deg, #58cc02 19.02%, #23ac38 90.81%)"}
          boxShadow={"0 6px 0 0 #209b32"}
          _hover={{
            background: "linear-gradient(83deg, #7bea00 9.02%, #2fbf33 90.81%)",
            boxShadow: "0 6px 0 0 #209b32",
          }}
        >
          ÔN TẬP NGAY
        </Button>
      </Stack>
    </div>
  );
}
