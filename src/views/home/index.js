import React from 'react'
import {Card} from 'antd'
import Filter from '@/components/home/homeCustm/filter'
export default class Home extends React.Component{
    render(){
        return(
            <div>
                {/* 删选 */}
                <Filter/>
                <Card>

                </Card>
            </div>
        )
    }
}