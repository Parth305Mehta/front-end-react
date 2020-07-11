import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle ,Breadcrumb,BreadcrumbItem,Input,Button,Modal,ModalHeader,ModalBody,Label,Form,Col,Row,FormFeedback,FormGroup} from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import {baseUrl} from '../share/baseUrl';


/*Class Component*/
/*class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        console.log('Menu CoomponentDidMount invoked');
    }

    componentDidUpdate(){
        console.log('DishDetail ComponentDidUpdate invoked');
    }
    renderDish(dish) {
        if (dish != null){
            return(
                
                    <Card>
                        <CardImg  src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
            
            );

        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if (comments != null) {
          const commentsData = comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author} ,
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            );
          });
          return (
            <div >
              <h4>Comments</h4>
              <ul className="list-unstyled">{commentsData}</ul>
            </div>
          );
        } else {
          return <div></div>;
        }
      }

    render() {
        console.log('DishDetail component Render invoked');
        const dish = this.props.dish;
    if (dish == null) {
      return <div></div>;
    }
    const renDish = this.renderDish(dish);
    const renComment = this.renderComments(dish.comments);
    return (
      <div class='container'>
        <div class='row'>
            <div className=" col-12 col-md-5 m-1">  
                {renDish}
            </div>
            <div className='col-12 col-md-5 m-1' >
                {renComment}
            </div>
        </div>
      </div>
    );
  }
}*/


/*Functional Component*/
function RenderDish(props){
        if (props.dish != null){
            return(
                
                    <Card>
                        <CardImg  src={baseUrl + props.dish.image} alt={props.dish.name} />
                        <CardBody>
                        <CardTitle>{props.dish.name}</CardTitle>
                        <CardText>{props.dish.description}</CardText>
                        </CardBody>
                    </Card>
            
            );

        }
        else{
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments,postComment,dishId}) {
        if (comments != null) {
          const commentsData = comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author} ,
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            );
          });
          return (
            <div >
              <h4>Comments</h4>
              <ul className="list-unstyled">{commentsData}</ul>
              
              <CommentForm dishId={dishId} postComment={postComment}/>
              
            </div>
          );
        } else {
          return <div></div>;
        }
      }

      const DishDetail = (props) => {

        
        console.log('DishDetail component Render invoked');
        const dish = props.dish;
        if (props.isLoading) {
            return (
                <div className='container'>
                    <div className='row'>
                        <Loading />
                    </div>
                </div>
            );
        }

        else if (props.errMess) {
            return (
                <div className='container'>
                    <div className='row'>
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
    
    else if(props.dish != null ){
    return (
    <div className='container'>
      <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to ='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
        <div className='row'>
            <div className=" col-12 col-md-5 m-1">  
                <RenderDish dish={props.dish} />
            </div>
            <div className='col-12 col-md-5 m-1' >
                <RenderComments comments={props.comments} postComment = {props.postComment} dishId={props.dish.id}/>
                
            </div>
            
        </div>
    </div>
    );
  }

  else{
      return(
        <div></div>
      );
  }
}


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

  class CommentForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    
    }
    
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    
    
    handleSubmit(values){
        console.log("Current state is :" +JSON.stringify(values));
        alert("Current state is :" +JSON.stringify(values));
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
       
        
    }
    
        render(){
            return(
             
          <div>
              
              <Button outline  className='btn btn-default ' onClick={this.toggleModal}>
              <span className='fa fa-pencil fa-lg'></span>Submit Comment
            </Button>
             
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className='form-group'>
                              <Label htmlFor='rating' md={12} >Rating</Label>
                                <Col md={12}>
                                  <Control.select model='.rating' name="rating" id='rating' className='col-12'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='author' md={12} >Your Name</Label>
                                <Col md={12}>
                                    <Control.text model='.author'  id='author' name='author' placeholder='Your Name' className='form-control' validators={{
                                        required,minLength:minLength(3),maxLength:maxLength(15)
                                    }}
                                    />
                                    <Errors className='text-danger' model='.name' show='touched' messages={{
                                        required:'Required ',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength:'Must be 15 characters or less'
                                    }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                              <Label htmlFor='comment'  md={12}>Comment</Label>
                              <Col md={12}>
                                  <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="6" className='form-control'
                                ></Control.textarea>
                                
                                <Errors className='text-danger' model='.comment' show='touched' messages={{
                                              required:'Required '
                                              
                                }}/>
                              </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary" >Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
              </div>
               
            );
        }
    }





export default DishDetail;