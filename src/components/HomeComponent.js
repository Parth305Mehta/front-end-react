import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle} from 'reactstrap';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../share/baseUrl';

function RenderCard({item,isLoading,errMess}){
    if(isLoading){
        return(
            <Loading />
        );
    }
    else if(errMess){
        return(
            <h4>{errMess}</h4>
        );
    }

    else
        return(
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle><strong>{item.name}</strong></CardTitle>
                    {item.designation ? <CardSubtitle><strong>{item.designation}</strong></CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
}

function Home(props){
    return(
        <div className='container'>
            <div className='row align-items-start'>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.dish} isLoading={props.dishesLoading}  errMess={props.dishesErrMess}/>
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.promotion} isLoading={props.promosLoading}  errMess={props.promosErrMess}/>
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;