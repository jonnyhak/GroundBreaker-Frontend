
import React from 'react'
import {PieChart, Pie, Sector, Cell, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from "recharts"
import dateFormat from 'dateformat'

export default function UserReChart(props) {
    
    let dataObj = () => {
        let colors = ['red', 'green', 'blue', 'orange', 'yellow'];
        
        let projectBreakdown = []

        let investments = props.investments

        investments.forEach((inv, i) => {
            projectBreakdown.push({
                name: inv.project.developer_name,
                value: inv.amount,
                date: inv.date, 
                // date: dateFormat(inv.date, "mmmm dS, yyyy"), 
                color: colors[(i % colors.length)]
            })
        });
        
        return projectBreakdown
    }
    
    return (
        <div style={{textAlign: "center"}}>
            <div className="usercharts">

            <PieChart width={400} height={400}>
                <Pie dataKey="value" isAnimationActive={true} data={dataObj()} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                <Tooltip />
            </PieChart>

            <BarChart
            width={500}
            height={300}
            data={dataObj()}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
            barSize={20}
            >
                <XAxis dataKey="date" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis /> 
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
            </div>
        </div>
      
    )
}
