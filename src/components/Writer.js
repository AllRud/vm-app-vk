import React from 'react'
import MyStatefulEditor from '../containers/rte'
import ReactHtmlParser from 'react-html-parser'
import { connect } from 'react-redux'
import { create } from '../actions/NewActions'
import { MathJax, MathJaxContext } from "better-react-mathjax";

import '../containers/Rte.css'


class WriterRte extends React.Component {
  constructor(props) {
    super(props)
    this.handlRtlTextChange = this.handlRtlTextChange.bind(this)
    this.state = {
      rtlText: '',
      parseText: '',
    }
  }

  componentDidMount() {
    this.props.create(true)
  }

  componentWillUnmount() {
    this.props.create(false);
  }


  handlRtlTextChange(value) {
    //this.setState({parseText: ''})
    console.log("v = ",value.e)
    this.setState({ rtlText: value.e })
    console.log("e = ", this.state.rtlText)
    /**Парсинг в HTML закоментирован
     * если раскоментировать эти две строки и в MathJax на 110 строке поставить this.state.parseText то при удалении строк в редакторе приложение падает с ошибкой что описана ниже */
    //const parse = ReactHtmlParser(this.state.rtlText)
    //this.setState({parseText: parse})

/** Это костыль для предотвращения падения при сдвиге отпарсеного текста
 * нашел здесь https://github.com/facebook/react/issues/11538#issuecomment-417504600
 * решение от  gaearon commented on 31 Aug 2018
 * проблема в этом  - Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
 * Если применить этот костыль то приложение не падает, но при парсинге формулы начинают дублироваться

    if (typeof Node === 'function' && Node.prototype) {
      const originalRemoveChild = Node.prototype.removeChild;
      Node.prototype.removeChild = function(child) {
        if (child.parentNode !== this) {
          if (console) {
            console.error('Cannot remove a child from a different parent', child, this);
          }
          return child;
        }
        return originalRemoveChild.apply(this, arguments);
      }

      const originalInsertBefore = Node.prototype.insertBefore;
      Node.prototype.insertBefore = function(newNode, referenceNode) {
        if (referenceNode && referenceNode.parentNode !== this) {
          if (console) {
            console.error('Cannot insert before a reference node from a different parent', referenceNode, this);
          }
          return newNode;
        }
        return originalInsertBefore.apply(this, arguments);
      }
    }**/
  }


  render() {

    const config = {
      "fast-preview": {
        disabled: true
      },
      tex2jax: {
        inlineMath: [
          ["$", "$"],
          ["\\(", "\\)"]
        ],
        displayMath: [
          ["$$", "$$"],
          ["\\[", "\\]"]
        ]
      },
      messageStyle: "none",

    };
    const a = "`$$\\sum_{n = 100}^{1000}\\left(\\frac{10\\sqrt{n}}{n}\\right)$$`"
    //const b = ReactHtmlParser(this.state.rtlText)
    console.log('a =', a)
    //console.log('b =', b)
    return (
      <div className="Rtl-editor">
        <MyStatefulEditor onHandlRtlTextChange={this.handlRtlTextChange} />
        <div className="mathText">
            <MathJaxContext
            version={2}
            config={config}
            onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
            onTypeset = {() => (this.setState({parseText: ''}))}
            >
              <MathJax
                  hideUntilTypeset={"first"}
                  inline= "true"
                  dynamic
                  >
                  {this.state.rtlText}

              </MathJax>
            </MathJaxContext>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    create: store.isNew,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    create: (isNew) => dispatch(create(isNew)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WriterRte)
