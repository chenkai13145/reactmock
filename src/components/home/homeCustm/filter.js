import React, { Component } from 'react';
// import { Row, Col } from 'antd'
import './index.less' 
export class Filter extends Component {
    constructor(props) {
        super(props)
         
    }
    param = {
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
    oncahngBox=(item)=>{
        console.log(item)
    }
    static getDerivedStateFromProps(nextProps, prevState) {

    }
    renderUl() {
        return (<ul>
            {
                this.param.chartType.map(item => {
                    return (<li>
                       <strong>{item.name}</strong> 
                        <p>
                            {item.list.map(item => {
                                return (<span onClick={()=>{this.oncahngBox(item)}}>
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
