import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle , Breadcrumb,BreadcrumbItem} from 'reactstrap';
import DishDetail from './DishdetailComponent';
import { functionExpression } from '@babel/types';
import {Link} from 'react-router-dom';
import { Loading} from './LoadingComponent';
/*Class Component*/
/*class Menu extends Component {
    constructor(props) {
        super(props);
       this.state = {
            selectedDish: null
        }
}

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.props.onClick(dish.id)}> 
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
             <div className="row">
                    {menu}
             </div>

             
          </div>
        );
    }
} */



/*Functional component*/
function RenderMenuItem(props) {
    return(
        <Card>
        <Link to= {`/menu/${props.dish.id}`}> 
        <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
        <CardImgOverlay>
            <CardTitle>{props.dish.name}</CardTitle>
        </CardImgOverlay>
        </Link>
    </Card> 
    );
}

const Menu = (props) =>{
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish}  />
            </div>
        );
    });

    if (props.dishes.isLoading) {
        return (
            <div className='container'>
                <div className='row'>
                    <Loading />
                </div>
            </div>
        );
    }

    else if (props.dishes.errMess) {
        return (
            <div className='container'>
                <div className='row'>
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        );
    }
    
    else
        return (
        <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to ='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
}


export default Menu;


/* ====Component structure====
class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            
        );
    }
}












onClick={() => this.onDishSelect(dish)}


             <DishDetail dish={this.state.selectedDish} />
*/

/*
        onClick={() => props.onClick(props.dish.id)}
        
        onClick={props.onClick}
        */