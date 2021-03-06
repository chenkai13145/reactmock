import React, { Component } from 'react';
import { message } from 'antd'
import './index.less'
export class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
                        // {
                        //     name: '线路运输距离(km)',
                        //     checkbox: false
                        // }
                    ]
                },
                {
                    name: '运输安全分析',
                    list: [
                        // {
                        //     name: '安全事件类型对比(次)',
                        //     checkbox: false
                        // },
                        // // {
                        // //     name: '高风险次数与有效干预占比(%)',
                        // //     checkbox: false
                        // // },
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
        this.checkList = []
    }

   chartarr=[
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
                // {
                //     name: '线路运输距离(km)',
                //     checkbox: false
                // }
            ]
        },
        {
            name: '运输安全分析',
            list: [
                // {
                //     name: '安全事件类型对比(次)',
                //     checkbox: false
                // },
                // // {
                // //     name: '高风险次数与有效干预占比(%)',
                // //     checkbox: false
                // // },
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
    ]
/**
 * item//当前项
 * i
 * 
 */ str = []
    oncahngBox = (item, index, index2, checkbo) => {
        if (!checkbo) {
            if (this.checkList.length >= 4) {
                message.error('最多选择6个选项')
                return;
            } else {
                this.checkList.push(item.list[index2])
            }
        } else {
            let index = this.checkList.findIndex(iu => {
                return item.list[index2].name.includes(iu.name)
            })
            this.checkList.splice(index, 1)
        }
        item.list[index2].checkbox = !checkbo
        this.setState({
            ['chartType'[index]]: item
        })
        this.props.parentsFnHome(this.checkList)
    }
    oncahngBoxs = (e) => {
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //      return{}
    // }
    componentWillMount() {
        //按钮初始时，选中checkbox值
        this.str = []
        // let enben=[]
        // let obj={}
        // this.props.chek.forEach(item=>{
        //     obj[item.name]=item
        // })
        // let data=Object.values(obj)
        this.props.chek.forEach(items => {
            this.str.push(items.name)
            this.checkList.push({name:items.name,checkbox:true})
            this.state.chartType.some((item, index) => {
                let indexs = item.list.findIndex(iy => {
                    return iy.name===items.name
                })
                if (indexs !== -1) {
                   this.chartarr[index].list[indexs].checkbox=true
                    // this.setState({
                    //     ['chartType'[index].list[indexs].checkbox]:true
                    // })
                }
            })

        })
        this.setState({
            chartType:this.chartarr
        })

    }

    //删选
    renderUl() {
        return (<ul>
            {
                this.state.chartType.map((items, index) => {
                    return (<li key={index}>
                        <strong>{items.name}</strong>
                        <p>
                            {items.list.map((item, index2) => {
                                return (<span key={index2} onClick={item.name==='线路交付及时率(%)'||item.name==='线路承运量(辆)'?()=>{}:() => {this.oncahngBox(items, index, index2, item.checkbox) }}>
                                    <input type="checkbox" onChange={this.oncahngBoxs} checked={item.name==='线路交付及时率(%)'||item.name==='线路承运量(辆)'?true:item.checkbox} />
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
