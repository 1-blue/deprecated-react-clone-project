import React from "react";
import { useQuery } from "react-query";
import ApexCharts from "react-apexcharts";
import { useRecoilValue } from "recoil";

// fetcher
import { fetchOHLCV } from "@src/fetchers";

// commom-components
import Spinner from "@src/components/common/Spinner";

// atom
import { isDarkAtom } from "@src/atoms";

interface IChartProps {
  coinId: string;
}
interface IOHLCV {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const Chart = ({ coinId }: IChartProps) => {
  const isDark = useRecoilValue<boolean>(isDarkAtom);
  const { isLoading, data } = useQuery<IOHLCV[]>([coinId, "ohlcv"], () => fetchOHLCV(coinId));

  if (isLoading) return <Spinner />;

  return (
    <>
      <ApexCharts
        type="candlestick"
        series={[
          {
            data: data?.map(v => ({
              x: v.time_open,
              y: [Math.round(v.open), Math.round(v.high), Math.round(v.low), Math.round(v.close)],
            })),
          },
        ]}
        options={{
          chart: {
            width: 486,
            height: 486,
            toolbar: {
              show: false,
            },
            foreColor: "#FDEBF7",
          },
          theme: {
            mode: "dark",
          },
          plotOptions: {
            candlestick: {
              colors: {
                upward: "#1C6DD0",
                downward: "#DA1212",
              },
            },
          },
          title: {
            text: "한달 최고가, 최저가, 시작가, 종가",
            align: "center",
            offsetY: 26,
            style: {
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#FDEBF7",
              fontFamily: "Yeon Sung, cursive",
            },
          },
          xaxis: {
            type: "datetime",
          },
          yaxis: {
            labels: {
              formatter: v => "$ " + v,
            },
          },
        }}
      />
    </>
  );
};

export default Chart;
