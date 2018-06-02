import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import './css/font.css'
import AOS from 'aos'
import '../node_modules/aos/dist/aos.css';

class Posts extends Component {
    constructor(props) {
        super(props);
        AOS.init();
    }
    state = {
      posts: []
    }
    componentDidMount = () => {
    fetch(this.props.fil)
    .then(response => {
      return response.json()
    })
    .then(response => {
      this.setState({
        posts: response
      })
    })
  }
  render() {
    const { posts } = this.state

    return (
        <div>
            <div className='articles' style={{marginTop:50}} >
                記事一覧
            </div>
            <Grid
            direction='row'
            spacing = {40}
            >
              {posts.map((post) => (
                  <div>
                      <Grid item style={{padding: "20px 0"}}>
                      {/*alignSelfで画面一杯に引き伸ばし*/}
                      {/*display: 'flex'をつけると横並びにコンテンツを並べられる*/}
                          <Card style = {{ display: 'flex',height:200,alignSelf: 'stretch',textAlign:'center',}} elevation = {15} data-aos="fade-up">
                              <CardMedia
                                image={post.image}
                                title="Contemplative Reptile"
                                style={{width: 350,height: 150,marginLeft:60,marginTop:30}}
                              />
                              <CardContent style={{flex: '1 0 auto',marginTop:30}}>

                                  <Typography type="headline" align= "left" color="textSecondary">
                                    <Link to={this.props.lin + post.id}>
                                        <h3>{post.title}</h3>
                                    </Link>
                                  </Typography>
                                  <Typography type="subheading" align= "left" color="textSecondary">
                                        {post.comment}
                                  </Typography>
                                  <Typography type="subheading" align= "left" color="textSecondary">
                                        {post.date}
                                  </Typography>
                              </CardContent>
                          </Card>
                    </Grid>
                </div>
            ))}
          </Grid>
    </div>
    )
  }
}
{/*defaultとは、　「importする際に特に指定がなければそのクラスや関数を呼ぶ」というものです。*/}
export default Posts
