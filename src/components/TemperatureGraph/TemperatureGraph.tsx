import React from 'react'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'
import { ChartDataPoint } from '../WeatherPage/WeatherPage'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart'

type TemperatureGraphProps = {
    chartData: ChartDataPoint[]
}

const chartConfig = {
    temp: {
        label: "Avg Temp",
        color: "var(--chart-1)",
    },
    tempMax: {
        label: "Max Temp",
        color: "var(--chart-2)",
    },
    tempMin: {
        label: "Min Temp",
        color: "red",
    },
} satisfies ChartConfig;

const TemperatureGraph: React.FC<TemperatureGraphProps> = ({
    chartData,
}) => {

    return (
        <>
            {/* <div style={{ flex: "1 1 400px", background: "rgba(255,255,255,0.9)", padding: "1rem", borderRadius: "12px", boxShadow: "2px 2px 8px rgba(0,0,0,0.1)" }}>
                <h3 style={{ textAlign: "center", color: "#5c3d2e", marginBottom: "1rem" }}>Temperature Graph</h3>
            </div>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="date" stroke="#5c3d2e" />
                        <YAxis stroke="#5c3d2e" />
                        <Tooltip />
                        <Line type="monotone" dataKey="temp" stroke="#8b5e3c" strokeWidth={2} />
                        <Line type="monotone" dataKey="tempMax" stroke="#c27b4f" strokeWidth={2} strokeDasharray="3 3" />
                        <Line type="monotone" dataKey="tempMin" stroke="#a86f52" strokeWidth={2} strokeDasharray="3 3" />
                    </LineChart>
                </ResponsiveContainer> */}
            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>Temperature Variation</CardTitle>
                    <CardDescription>Temperature variation over the past week</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Line
                                dataKey="temp"
                                type="bump"
                                stroke="var(--color-temp)"
                                strokeWidth={2}
                                dot={<CustomizedDot />}
                                activeDot={() => <></>}
                                filter="url(#rainbow-line-glow)"
                            />
                            <Line
                                dataKey="tempMax"
                                type="bump"
                                stroke="var(--color-tempMax)"
                                strokeWidth={2}
                                dot={false}
                                filter="url(#rainbow-line-glow)"
                            />
                            <Line
                                dataKey="tempMin"
                                type="bump"
                                stroke="var(--color-tempMin)"
                                strokeWidth={2}
                                dot={false}
                                filter="url(#rainbow-line-glow)"
                            />
                            <defs>
                                <filter
                                    id="rainbow-line-glow"
                                    x="-20%"
                                    y="-20%"
                                    width="140%"
                                    height="140%"
                                >
                                    <feGaussianBlur stdDeviation="10" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                            </defs>
                        </LineChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </>
    )
}

export default TemperatureGraph


const CustomizedDot = (
    props: React.SVGProps<SVGCircleElement> & { value?: number }
) => {
    const { cx, cy, stroke, value } = props;

    return (
        <g>
            {/* Main dot */}
            <circle cx={cx} cy={cy} r={9} fill={stroke} />
            <text
                className="dark:text-black text-white"
                x={cx}
                y={cy}
                textAnchor="middle"
                dy={8}
                fontSize={8}
                fontWeight={600}
                fill="currentColor"
                transform="translate(0, -5)"
            >
                {value?.toString()}
            </text>
        </g>
    );
};