import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../share/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../share/comments';
import { PROMOTIONS } from '../share/promotions';
import { LEADERS } from '../share/leaders';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions:PROMOTIONS,
        leaders:LEADERS
        
    };
  }

  
  render() {

    const HomePage = () =>{
      return(
        <Home dish={this.state.dishes.filter((dish) =>dish.featured)[0]}
        promotion={this.state.promotions.filter((promotion) =>promotion.featured)[0]}
        leader={this.state.leaders.filter((leader) =>leader.featured)[0]}
        />
      );
    }

const DishWithId = ({match}) => {
  return(
    <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
    comments={this.state.comments.filter((comment) =>comment.dishId === parseInt(match.params.dishId,10))}
    />
  );
}

    return (
      <div>
        <Header />
        <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />  
        <Route path='/menu/:dishId' component={DishWithId} />
        <Route exact path='/contactus' component={Contact} />
        <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;



/*<Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>*/




        /* selectedDish: null*/


        /*onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }
*/


/*<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
<DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />*/