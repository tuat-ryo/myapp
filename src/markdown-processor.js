import React, { Component } from 'react'
import remark from 'remark'
import reactRenderer from 'remark-react'
import RemarkLowlight from 'remark-react-lowlight'
import TweetEmbed from 'react-tweet-embed'

import Card, { CardContent, CardMedia } from 'material-ui/Card';

// highlight.js/lib/languages/ 以下から読み込み可能な全ての言語を列挙しています (2018/01/15 時点)
const langs = ['1c', 'accesslog', 'actionscript', 'ada', 'apache', 'applescript', 'cpp', 'arduino', 'armasm', 'xml', 'asciidoc', 'aspectj', 'autohotkey', 'autoit', 'avrasm', 'axapta', 'bash', 'basic', 'bnf', 'brainfuck', 'cal', 'capnproto', 'ceylon', 'clojure', 'clojure-repl', 'cmake', 'coffeescript', 'coq', 'cos', 'crmsh', 'crystal', 'cs', 'csp', 'css', 'd', 'markdown', 'dart', 'delphi', 'diff', 'django', 'dns', 'dockerfile', 'dos', 'dsconfig', 'dts', 'dust', 'elixir', 'elm', 'ruby', 'erb', 'erlang-repl', 'erlang', 'excel', 'fix', 'fortran', 'fsharp', 'gams', 'gauss', 'gcode', 'gherkin', 'glsl', 'go', 'golo', 'gradle', 'groovy', 'haml', 'handlebars', 'haskell', 'haxe', 'hsp', 'htmlbars', 'http', 'inform7', 'ini', 'irpf90', 'java', 'javascript', 'json', 'julia', 'kotlin', 'lasso', 'ldif', 'less', 'lisp', 'livecodeserver', 'livescript', 'lsl', 'lua', 'makefile', 'mathematica', 'matlab', 'maxima', 'mel', 'mercury', 'mipsasm', 'mizar', 'perl', 'mojolicious', 'monkey', 'moonscript', 'nginx', 'nimrod', 'nix', 'nsis', 'objectivec', 'ocaml', 'openscad', 'oxygene', 'parser3', 'pf', 'php', 'pony', 'powershell', 'processing', 'profile', 'prolog', 'protobuf', 'puppet', 'purebasic', 'python', 'q', 'qml', 'r', 'rib', 'roboconf', 'rsl', 'ruleslanguage', 'rust', 'scala', 'scheme', 'scilab', 'scss', 'smali', 'smalltalk', 'sml', 'sqf', 'sql', 'stan', 'stata', 'step21', 'stylus', 'swift', 'taggerscript', 'yaml', 'tap', 'tcl', 'tex', 'thrift', 'tp', 'twig', 'typescript', 'vala', 'vbnet', 'vbscript', 'vbscript-html', 'verilog', 'vhdl', 'vim', 'x86asm', 'xl', 'xquery', 'zephir']

// ```javascript などとは書きたくないので、エイリアスを定義できるようにしました
const langAliases = {
  'cpp': ['c++'],
  'xml': ['html'],
  'bash': ['sh', 'shell', 'zsh'],
  'coffeescript': ['coffee'],
  'javascript': ['js'],
}

const lang2module = () => {
  let ret = {}
  for (let lang of langs) {
    ret[lang] = require('highlight.js/lib/languages/' + lang)
  }
  for (let lang in langAliases) {
    for (let langAka of langAliases[lang]) {
      ret[langAka] = require('highlight.js/lib/languages/' + lang)
    }
  }
  return ret
}

const aWrapper = (props) => (
  props.href.match(/twitter\.com\/.*\/status/) ? (
    <div>
      <TweetEmbed id={props.href.match(/(\d+)/)[1]} />
    </div>
  ) : (
    props.href.match(/slideshare\.net/) ? (
      <div>
        <iframe src={props.href} width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style={{border:"1px solid #CCC", borderWidth:"1px", marginBottom:"5px", maxWidth: "100%"}} allowfullscreen> </iframe> <div>
          <strong>
            <a href="https://www.slideshare.net/kousuiiwasa98/jubatus-76683189" title="Jubatus" target="_blank">Jubatus</a>
          </strong>
           from
           <strong>
             <a href="//www.slideshare.net/kousuiiwasa98" target="_blank">Kousui Iwasa</a>
           </strong>
         </div>
      </div>
    ) : (
      <a target='_blank' {...props}>
        {props.children}
      </a>
    )
  )
)

class pWrapper extends Component {
  render () {
    console.log(this.props.children)
    const props = this.props
    const style = (() => {
      let ret = {}
      props.children.filter((s) => {
        return typeof(s) == 'string' && s.match(/\!s /)
      }).map((s) => {
        let styles = s.match(/\!s (.*)/)[1].split(',')
        styles.map((s_) => {
          ret[s_.split(':')[0]] = s_.split(':')[1]
        })
      })
      return ret
    })()

    console.log(style)

    return (
      <p style={style}>
        {props.children.map((s) => {
          return typeof(s) == 'string' && s.match(/\!s /) ? '' : s
        })}
      </p>
    )
  }
}

const imgWrapper = (props) => (
  props.title ? (
    <Card style={{marginBottom: '30px'}}>
      


          {props.title}


          {props.alt}


    </Card>
  ) : (
    <img src={props.src}>
      {props.children}
    </img>
  )
)

const processor = remark().use(reactRenderer, {
  sanitize: false,
  remarkReactComponents: {
    code: RemarkLowlight(lang2module()),
    a: aWrapper,
    p: pWrapper,
    img: imgWrapper,
  }
})


export default processor
