import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out the adventure spots</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src={require('../images/img-home.jpg').default} 
                        text='Explore the hidden waterfall'
                        label='Adventure'
                        path='/services'
                        />
                         <CardItem
                        src={require('../images/img-8.jpg').default} 
                        text='Explore the hidden waterfall'
                        label='Desert Safari'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                    <CardItem
                        src={require('../images/img-home.jpg').default} 
                        text='Explore the hidden waterfall'
                        label='Adventure'
                        path='/services'
                        />
                         <CardItem
                        src={require('../images/img-8.jpg').default} 
                        text='Explore the hidden waterfall'
                        label='Desert Safari'
                        path='/services'
                        />
                          <CardItem
                        src={require('../images/img-home.jpg').default} 
                        text='Explore the hidden waterfall'
                        label='Adventure'
                        path='/services'
                        />
                         <CardItem
                        src={require('../images/img-8.jpg').default} 
                        text='Explore the hidden waterfall'
                        label='Desert Safari'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>   
        </div>
    )
}

export default Cards
