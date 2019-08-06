import React from 'react'
import { Card, Button,Modal } from 'antd'
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import './index.less'

export default class Richs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          editorState: EditorState.createEmpty(),
          visible:false,
          editorContent:''
        };
      }
    componentWillReceiveProps(nextProps) {
        if (this.props.getSysResult !== nextProps.getSysResult && nextProps.getSysResult.data) {
            const contentBlock = htmlToDraft(nextProps.getSysResult.data.roomnotes);
            if (contentBlock) {
                const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                const editorState = EditorState.createWithContent(contentState);
                this.setState({ editorState })
            }
        }
    }
    onEditorStateChange=(editorState) => {
        this.setState({
          editorState,
        });
      }
      getHtml=()=>{
        var editorContent = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
        this.setState({
            editorContent,
            visible:true
        })
      }
    
    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Card>
                    <Button onClick={()=>{this.setState({editorState: EditorState.createEmpty()})}}>清楚内容</Button>
                    <Button onClick={this.getHtml}>获取富文本</Button>
                </Card>
                <Card>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                />
                </Card>
                <Modal 
                   title="获取富文本"
                   visible={this.state.visible}
                   onCancel={()=>{
                       this.setState({
                           visible:false
                       })
                   }}
                >
                {this.state.editorContent}
                </Modal>

            </div>
        )
    }
}