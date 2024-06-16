import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { Box, styled } from '@mui/material';
import { BorderTop } from '@mui/icons-material';
// import { BorderTop } from '@mui/icons-material';


const Root = styled(Box)({
    "& .MuiBarElement-root": {
        fill: '#27A9E0',
        rx: 10
    },
    "& .MuiChartsAxis-line": {
        display: "none"
    },
    "& .MuiChartsAxis-tick": {
        display: "none"
    },
    '& .MuiChartsAxis-directionY .MuiChartsAxis-tickLabel': {
        display: 'none',
    },
    "& .css-172kpif-MuiResponsiveChart-container": {
        position: 'relative',
        bottom: "20px",

    }
});

const dataset = [
    {
        expenses: 21,
        month: 'Jan',
    },
    {
        expenses: 100,
        month: 'Feb',
    },
    {
        expenses: 41,
        month: 'Mar',
    },
    {
        expenses: 73,
        month: 'Apr',
    },
    {
        expenses: 99,
        month: 'May',
    },
    {
        expenses: 144,
        month: 'June',
    },
    {
        expenses: 400,
        month: 'July',
    },
    {
        expenses: 249,
        month: 'Aug',
    },
    {
        expenses: 131,
        month: 'Sept',
    },
    {
        expenses: 55,
        month: 'Oct',
    },
    {
        expenses: 48,
        month: 'Nov',
    },
    {
        expenses: 25,
        month: 'Dec',
    },
];


const chartSetting = {
    series: [{ dataKey: 'expenses', }],
    height: 250,
    sx: {
        [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
            transform: 'translateX(-10px)',
        },
    },
};
export default function TickPlacementBars() {
    return (
        <Root>
            <Box style={{ width: '100%' }}>
                <BarChart
                    dataset={dataset}
                    xAxis={[
                        { scaleType: 'band', dataKey: 'month', },
                    ]}
                    {...chartSetting}
                />
            </Box>
        </Root>
    );
}
