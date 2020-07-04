import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle ,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


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
                        <CardImg  src={props.dish.image} alt={props.dish.name} />
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

    function RenderComments({comments}) {
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

      const DishDetail = (props) => {
        console.log('DishDetail component Render invoked');
        const dish = props.dish;
    if (props.dish == null) {
      return <div></div>;
    }
    
    return (
      <div class='container'>
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
        <div class='row'>
            <div className=" col-12 col-md-5 m-1">  
                <RenderDish dish={props.dish} />
            </div>
            <div className='col-12 col-md-5 m-1' >
                <RenderComments comments={props.comments}/>
            </div>
        </div>
      </div>
    );
  }






export default DishDetail;