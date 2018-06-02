import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {
  FacebookShareButton, FacebookIcon, FacebookShareCount,
  GooglePlusShareButton, GooglePlusIcon, GooglePlusShareCount,
  TwitterShareButton, TwitterIcon,
} from 'react-share'
import './css/Post.css'
import { HatenabookmarkButton } from 'react-social-sharebuttons'
import processor from './markdown-processor'

class ShareButtons extends Component {
  render () {
    const { url, title, decodedUrl } = this.props
    console.log(window.location.href)
    return (
      <div className='shares'>
        <TwitterShareButton url={"https://google.com"} title={title}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <FacebookShareButton url={decodedUrl} quote={title}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <GooglePlusShareButton url={decodedUrl} title={title}>
          <GooglePlusIcon size={32} round={true} />
        </GooglePlusShareButton>
        <HatenabookmarkButton url={window.location.href} title={title}/>
      </div>
    )
  }
}

class Post extends Component {
  state = {
    id: '',
    title: '',
    date: '',
    body: ''
  }

  componentDidMount = () => {
    const { id } = this.props.match.params
    if (!isNaN(id)) {
      fetch(this.props.text + id + '.md')
      .then(response => {
        return response.text()
      })
      .then(response => {
        this.setState({
          id:id,
          title: response.split(/\n/)[0].slice(1),
          date: response.split(/\n/)[1],
          body: response.split(/\n/).slice(2).join("\n"),
        })
        document.title = response.split(/\n/)[0].slice(1)
      })
    } else {
      this.setState({
        body: "Invalid Request"
      })
    }
  }

  render() {
    const { id, title, body, date } = this.state
    const url = 'https://okunimiso.github.io/posts/' + {id} + '/'
    const decodedUrl = 'https://okunimiso.github.io/?p=posts/' + {id} + '/'
    return (
        <div className='article'>
          <h1>{ title }</h1>
          <h3 style={{textAlign: 'right'}}><i>Posted on { date }</i></h3>
          <div className='shares'>
            <ShareButtons url={url} decodedUrl={decodedUrl} title={title} />
          </div>
          {processor.processSync(body).contents}
        </div>

    )
  }
}

export default Post
