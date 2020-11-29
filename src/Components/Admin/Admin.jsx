import React, { Component } from 'react';
import { auth,db } from '../../Firebase/Firebase';
import './admin.css';
import './create-post.css';

import { Route} from 'react-router-dom';



class Admin extends Component {
    constructor(){
    super()
        this.state = {
            email: '',
            password: '',
            currentUser : null,
            title:'',
            content:''
        
    }
}

    handleChange = (e) => {
        const { name , value } = e.target;
        this.setState({ [name] : value});
    }

    onSubmitForm = async event => {
        event.preventDefault();
        const { email , password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
           
        }
        catch(err) {
            console.log("error here")
        }
    }

    handlePostChange = (event) => {
        const { name, value} = event.target;
        this.setState({[name]: value})
    }

    onPostSubmit = (event) => {
        const {title, content} = this.state
        event.preventDefault();
        db.collection('Posts').add({
            title: title,
            content: content
        }).then(() => alert('posted'))
    }

    componentDidMount(){
        auth.onAuthStateChanged(user => {
            this.setState({currentUser : user})
        })
    }
    
    render(){
        
        return(
            <div className="Ajay">
                <Route exact path='/Admin' render={() => this.state.currentUser ? (
                    <div className="create-post">
                         <div className="post-form">
                            <input className="create-post-title" name="title" type="text" placeholder="title" onChange={this.handlePostChange} />
                            <input className="create-post-content" name="content" type="text" placeholder="content" onChange={this.handlePostChange} />
                            <input className="create-post-submit" type="submit" value="post" onClick={this.onPostSubmit}/>     
                            <input className="sign-out" type="submit" onClick={() => auth.signOut()} value="sign out" />                                   
                         </div>
                 </div>

                ) : (
                <div className="admin-container">
                <input name="email" onChange={this.handleChange} className="email" type="email" placeholder="Email" />
                <input name="password" onChange={this.handleChange} className="password" type="password" placeholder="password" />
                <input  className="login" type="submit" value="login" onClick={this.onSubmitForm}/>
                
                </div>

                )} />
                
            </div>
        )
    }
}

export default Admin;
   
