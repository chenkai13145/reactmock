import React from 'react'
import BpmnModeler from 'bpmn-js/lib/Modeler'
import propertiesPanelModule from 'bpmn-js-properties-panel'
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda'
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda'

import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';
import './index.less'
export default class FlowSheet extends React.Component {
    constructor(props) {
        super(props)
        this.content=React.createRef();
        this.canvas=React.createRef();
        this.saveDiagram=React.createRef();
        this.saveSvg=React.createRef();
    }
    params={
         // bpmn建模器
         bpmnModeler:null,
         container: null,
         canvas: null,
         idTmr: null
    }
    componentDidMount() {
        // 获取到属性ref为“content”的dom节点
        this.params.container = this.content.current
        // 获取到属性ref为“canvas”的dom节点
        const canvas = this.canvas.current
        this.params.bpmnModeler=new BpmnModeler({
            container: canvas,
            // 添加控制板
            propertiesPanel: {
                parent: '#js-properties-panel'
            },
            additionalModules: [
                // 左边工具栏以及节点
                propertiesProviderModule,
                // 右边的工具栏
                propertiesPanelModule
            ],
            moddleExtensions: {
                camunda: camundaModdleDescriptor
            }
        })
        // 下载画图
        let _this = this
        // 获取a标签dom节点
        const downloadLink = this.saveDiagram.current
        // console.log(downloadLink)
        const downloadSvgLink = this.saveSvg.current
        // 给图绑定事件，当图有发生改变就会触发这个事件
       
        this.params.bpmnModeler.on('commandStack.changed', function () {
            _this.saveSVG(function (err, svg) {
                _this.setEncoded(downloadSvgLink, 'diagram.svg', err ? null : svg)
            })
            console.log(_this)
            _this.saveDiagrams(function (err, xml) {
                _this.setEncoded(downloadLink, 'diagram.xml', err ? null : xml)
            })
        })
        this.createNewDiagram(this.params.bpmnModeler)
    }

    createNewDiagram() {
        const bpmnXmlStr = '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_0fppxr8" targetNamespace="http://bpmn.io/schema/bpmn">\n' +
            '  <bpmn:process id="Process_1" isExecutable="false">\n' +
            // '    <bpmn:startEvent id="StartEvent_1" name="begin&#10;">\n' +
            // '      <bpmn:outgoing>SequenceFlow_0nrfbee</bpmn:outgoing>\n' +
            // '    </bpmn:startEvent>\n' +
            // '    <bpmn:task id="Task_0ho18x0" name="hello&#10;">\n' +
            // '      <bpmn:incoming>SequenceFlow_0nrfbee</bpmn:incoming>\n' +
            // '      <bpmn:outgoing>SequenceFlow_00ho26x</bpmn:outgoing>\n' +
            // '    </bpmn:task>\n' +
            // '    <bpmn:task id="Task_1ymuvem" name="world">\n' +
            // '      <bpmn:incoming>SequenceFlow_00ho26x</bpmn:incoming>\n' +
            // '      <bpmn:outgoing>SequenceFlow_18df8vb</bpmn:outgoing>\n' +
            // '    </bpmn:task>\n' +
            // '    <bpmn:endEvent id="EndEvent_1c0ed2n" name="end">\n' +
            // '      <bpmn:incoming>SequenceFlow_18df8vb</bpmn:incoming>\n' +
            // '    </bpmn:endEvent>\n' +
            // '    <bpmn:sequenceFlow id="SequenceFlow_0nrfbee" sourceRef="StartEvent_1" targetRef="Task_0ho18x0" />\n' +
            // '    <bpmn:sequenceFlow id="SequenceFlow_00ho26x" sourceRef="Task_0ho18x0" targetRef="Task_1ymuvem" />\n' +
            // '    <bpmn:sequenceFlow id="SequenceFlow_18df8vb" sourceRef="Task_1ymuvem" targetRef="EndEvent_1c0ed2n" />\n' +
            '  </bpmn:process>\n' +
            '  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n' +
            '    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">\n' +
            // '      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n' +
            // '        <dc:Bounds x="173" y="102" width="36" height="36" />\n' +
            // '        <bpmndi:BPMNLabel>\n' +
            // '          <dc:Bounds x="178" y="145" width="27" height="27" />\n' +
            // '        </bpmndi:BPMNLabel>\n' +
            // '      </bpmndi:BPMNShape>\n' +
            // '      <bpmndi:BPMNShape id="Task_0ho18x0_di" bpmnElement="Task_0ho18x0">\n' +
            // '        <dc:Bounds x="485" y="244" width="100" height="80" />\n' +
            // '      </bpmndi:BPMNShape>\n' +
            // '      <bpmndi:BPMNShape id="Task_1ymuvem_di" bpmnElement="Task_1ymuvem">\n' +
            // '        <dc:Bounds x="712" y="391" width="100" height="80" />\n' +
            // '      </bpmndi:BPMNShape>\n' +
            // '      <bpmndi:BPMNShape id="EndEvent_1c0ed2n_di" bpmnElement="EndEvent_1c0ed2n">\n' +
            // '        <dc:Bounds x="1056" y="568" width="36" height="36" />\n' +
            // '        <bpmndi:BPMNLabel>\n' +
            // '          <dc:Bounds x="1065" y="611" width="19" height="14" />\n' +
            // '        </bpmndi:BPMNLabel>\n' +
            // '      </bpmndi:BPMNShape>\n' +
            // '      <bpmndi:BPMNEdge id="SequenceFlow_0nrfbee_di" bpmnElement="SequenceFlow_0nrfbee">\n' +
            // '        <di:waypoint x="209" y="120" />\n' +
            // '        <di:waypoint x="347" y="120" />\n' +
            // '        <di:waypoint x="347" y="284" />\n' +
            // '        <di:waypoint x="485" y="284" />\n' +
            // '      </bpmndi:BPMNEdge>\n' +
            // '      <bpmndi:BPMNEdge id="SequenceFlow_00ho26x_di" bpmnElement="SequenceFlow_00ho26x">\n' +
            // '        <di:waypoint x="585" y="284" />\n' +
            // '        <di:waypoint x="649" y="284" />\n' +
            // '        <di:waypoint x="649" y="431" />\n' +
            // '        <di:waypoint x="712" y="431" />\n' +
            // '      </bpmndi:BPMNEdge>\n' +
            // '      <bpmndi:BPMNEdge id="SequenceFlow_18df8vb_di" bpmnElement="SequenceFlow_18df8vb">\n' +
            // '        <di:waypoint x="812" y="431" />\n' +
            // '        <di:waypoint x="934" y="431" />\n' +
            // '        <di:waypoint x="934" y="586" />\n' +
            // '        <di:waypoint x="1056" y="586" />\n' +
            // '      </bpmndi:BPMNEdge>\n' +
            '    </bpmndi:BPMNPlane>\n' +
            '  </bpmndi:BPMNDiagram>\n' +
            '</bpmn:definitions>\n'
        // 将字符串转换成图显示出来
        this.params.bpmnModeler.importXML(bpmnXmlStr, function (err) {
            if (err) {
                console.error(err)
            } else {
                // 这里还没用到这个，先注释掉吧
                // that.success()
            }
        })
    }
    xmlFn() {
        let htmlStr = document.getElementsByClassName('viewport')[0];
        console.log(htmlStr)
    }
    // 下载为SVG格式,done是个函数，调用的时候传入的
    saveSVG(done) {
        // 把传入的done再传给bpmn原型的saveSVG函数调用
        this.params.bpmnModeler.saveSVG(done)
    }
    // 下载为SVG格式,done是个函数，调用的时候传入的
    saveDiagrams(done) {
        // 把传入的done再传给bpmn原型的saveXML函数调用
        this.params.bpmnModeler.saveXML({ format: true }, function (err, xml) {
            done(err, xml)
        })
    }
    // 当图发生改变的时候会调用这个函数，这个data就是图的xml
    setEncoded(link, name, data) {
        // 把xml转换为URI，下载要用到的
        const encodedData = encodeURIComponent(data)
        // 获取到图的xml，保存就是把这个xml提交给后台
        this.xmlStr = data
        // 下载图的具体操作,改变a的属性，className令a标签可点击，href令能下载，download是下载的文件的名字
        if (data) {
            link.className = 'active'
            link.href = 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData
            link.download = name
        }
    }
    render() {
        return (
            <div className="flowsheet">
            <div className="containers" ref={this.content}>
                <div className="canvas" ref={this.canvas}></div>
                <div id="js-properties-panel" className="panel"></div>
                <ul className="buttons">
                    <li>
                        <a ref={this.saveDiagram} href="javascript:;" title="download BPMN diagram">下载xml</a>
                    </li>
                    <li>
                        <a ref={this.saveSvg} href="javascript:;" title="download as SVG image">下载图片</a>
                    </li>
                </ul>
            </div>
            </div>
        )
    }
}