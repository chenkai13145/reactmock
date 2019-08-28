import React, { Component } from 'react';
import { message } from 'antd'
import './index.less' 
export class Filter extends Component {
    constructor(props) {
        super(props)
        this.state={
            // 图表类型
            chartType: [
                {
                    name: '运输统计',
                    list: [
                        {
                            name: '运单数(单)',
                            checkbox: false
                        },
                        {
                            name: '运量(辆)',
                            checkbox: false
                        },
                        {
                            name: '公铁水运量分析(辆)',
                            checkbox: false
                        },
                        {
                            name: '自有外协运量对比(单)',
                            checkbox: false
                        }
                    ]
                },
                {
                    name: '仓储统计',
                    list: [
                        {
                            name: '库存量(辆)',
                            checkbox: false
                        },
                        {
                            name: '入库量(辆)',
                            checkbox: false
                        },
                        {
                            name: '出库量(辆)',
                            checkbox: false
                        },
                        {
                            name: '长库龄商品车(辆)',
                            checkbox: false
                        }
                    ]
                },
                {
                    name: '作业指标',
                    list: [
                        {
                            name: '出库及时率(%)',
                            checkbox: false
                        },
                        {
                            name: '商品车滞留(辆)',
                            checkbox: false
                        },
                        {
                            name: '交付及时率(%)',
                            checkbox: false
                        }
                    ]
                },
                {
                    name: '线路分析',
                    list: [
                        {
                            name: '线路数(条)',
                            checkbox: false
                        },
                        {
                            name: '重复线路(条)',
                            checkbox: false
                        },
                        {
                            name: '线路交付及时率(%)',
                            checkbox: false
                        },
                        {
                            name: '线路承运量(辆)',
                            checkbox: false
                        },
                        {
                            name: '线路运输距离(km)',
                            checkbox: false
                        }
                    ]
                },
                {
                    name: '运输安全分析',
                    list: [
                        {
                            name: '安全事件类型对比(次)',
                            checkbox: false
                        },
                        {
                            name: '高风险次数与有效干预占比(%)',
                            checkbox: false
                        },
                        {
                            name: '危险行为时段分布(次)',
                            checkbox: false
                        },
                        {
                            name: '高风险行为次数(次)',
                            checkbox: false
                        }
                    ]
                },
                {
                    name: '资源利用',
                    list: [
                        {
                            name: '投资企业板车使用(%)',
                            checkbox: false
                        },
                        {
                            name: '投资企业满板率(%)',
                            checkbox: false
                        },
                        {
                            name: '自有车辆利用率(%)',
                            checkbox: false
                        },
                        {
                            name: '库位利用率(%)',
                            checkbox: false
                        }
                    ]
                },
                {
                    name: '运输数字化',
                    list: [
                        {
                            name: '数字化覆盖趋势指标',
                            checkbox: false
                        }
                    ]
                }
            ],
        }
        this.checkList=[]
    }
/**
 * item//当前项
 * i
 * 
 */
    oncahngBox=(item,index,index2,checkbo)=>{
        if(!checkbo){
            if(this.checkList.length>=6){
                message.error('最多选择6个选项')
                return;
             }else{
                this.checkList.push(item.list[index2])
             }
        }else{
            let index=this.checkList.findIndex(iu=>{
                return iu.name===item.list[index2].name
            })
            this.checkList.splice(index,1)
        }
        item.list[index2].checkbox=!checkbo
        this.setState({
            ['chartType'[index]]:item
        })
        this.props.parentsFnHome(this.checkList)
    }
    static getDerivedStateFromProps(nextProps, prevState) {

    }
    //删选
    renderUl() {
        return (<ul>
            {
                this.state.chartType.map((items,index) => {
                    return (<li>
                       <strong>{items.name}</strong> 
                        <p>
                            {items.list.map((item,index2) => {
                                return (<span onClick={()=>{this.oncahngBox(items,index,index2,item.checkbox)}}>
                                    <input type="checkbox" checked={item.checkbox} />
                                    <label>{item.name}</label>
                                </span>)
                            })}
                        </p>
                    </li>)
                })
            }
        </ul>)
    }

    render() {
        return (
            <div className='home_ul'>
                {this.renderUl()}
            </div>
        );
    }
}

export default Filter;
