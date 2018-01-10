import React, {Component} from 'react';
import RoomItem from './rooms_item';

export default class RoomsList extends Component {
    constructor(props){
        super(props);

        this.state={activeRooms:[]};
    }
    componentDidMount(){
        fetch(`https://private-afab7b-aldoras.apiary-mock.com/rooms`)
           .then(result=>result.json())
      .then(activeRooms=>this.setState({activeRooms}))
    }
    render() {
        const roomItems = this.state.activeRooms.length ?
            this.state.activeRooms.sort((item)=>item.id).map(item=>{return <RoomItem key={item.title} item={item} />}) 
          : <p>Loading...</p>;
        return(
          <div className="row">
            {roomItems}
        </div>
     )
    }
}