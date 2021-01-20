
import React, { Component } from 'react'
import { PieChart } from 'react-minimal-pie-chart'

class UserPieChart extends Component {
    
    
    dataObj = () => {
        let colors = ['red', 'green', 'blue', 'orange', 'yellow'];
        
        let projectBreakdown = []

        let investments = this.props.investments

        investments.forEach((inv, i) => {
            projectBreakdown.push({
                title: inv.project.developer_name,
                value: inv.amount,
                color: colors[(i % colors.length)]
            })
        });
        
        return projectBreakdown
    }
    
    render() {
        console.log(this.dataObj())
        return (
            <div>
                <h4>PieChart</h4>
                <PieChart 
                    animate="true" 
                    animationDuration="2000"
                    data={this.dataObj()}
                    label={({ dataEntry }) => dataEntry.title}
                    labelStyle={{
                        fontSize: '5px',
                        fontFamily: 'sans-serif'
                    }}
                />
                
            </div>
        )
    }
}

export default UserPieChart

