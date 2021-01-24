
import React from 'react'
import {PieChart, Pie, Sector, Cell, Tooltip } from "recharts"

export default function UserReChart(props) {
    
    let dataObj = () => {
        let colors = ['red', 'green', 'blue', 'orange', 'yellow'];
        
        let projectBreakdown = []

        let investments = props.investments

        investments.forEach((inv, i) => {
            projectBreakdown.push({
                name: inv.project.developer_name,
                value: inv.amount
                // color: colors[(i % colors.length)]
            })
        });
        
        return projectBreakdown
    }
    
    return (
        <PieChart width={400} height={400}>
            <Pie dataKey="value" isAnimationActive={true} data={dataObj()} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
            <Tooltip />
        </PieChart>
    )
}
