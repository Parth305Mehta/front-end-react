import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

import DishDetail from './DishdetailComponent';
import { functionExpression } from '@babel/types';
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
        <Card onClick={() => props.onClick(props.dish.id)}> 
            <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
            <CardImgOverlay>
                <CardTitle>{props.dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) =>{
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
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