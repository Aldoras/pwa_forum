import React, {Component} from 'react';

const RoomItem = ({item}) => {
    return (
        <div className="col-sm-4 py-2">
        <div className="card h-100">
          <div className="card-block">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-text">{item.body}</p>
            <a href="#" className="btn btn-primary">Enter</a>
            <p className="card-text"><small className="text-muted">Room has {item.likes} likes</small></p>
          </div>
        </div>
        </div>
    );

}

export default RoomItem;