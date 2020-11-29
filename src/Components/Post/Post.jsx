import React,{ Component } from 'react';
import './post.css';
import { db } from '../../Firebase/Firebase';

class Post extends Component {
    constructor(){
        super()
        this.state ={
            posts: []
        }
        }
    
    componentDidMount(){
        db.collection('Posts').get().then(snapshot =>{
            const myPost = []
            snapshot.docs.map(doc => {
                const postData = doc.data();
                myPost.push(postData)  
                })
                this.setState({ posts: myPost})
            })
    

    }


    render(){
        return (
            <div className="post">
                {
                    this.state.posts.map( post => {
                        return(
                            <div className="post-wrapper" key={Math.random()}>
                             <span className="post-title">{post.title}  </span>
                              <span className="post-content">{post.content}  </span>
                              </div>
                              
                        )
                    })
                }
        
            </div>
        )
    }
}

export default Post;