import React from 'react';
import DetailsThumb from './DetailsThumb ';

class Test extends React.Component{


  state = {
    products: [
      {
        "_id": "1",
        "title": "Nike Shoes",
        "src": [
            "https://s.alicdn.com/@sc04/kf/H18eba55ca309476ca403454269f52124Q.jpg_300x300.jpg",
            "https://static.aadi.com.bd/__sized__/products/31888-208599-cap-aarong-744435-1-thumbnail-1080x1080-70.jpg",
            "https://m.media-amazon.com/images/I/71TPrh4okNL._AC_SX466_.jpg",
            "https://s.alicdn.com/@sc04/kf/H18eba55ca309476ca403454269f52124Q.jpg_300x300.jpg"
          ],
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 23,
        "colors":["red","black","crimson","teal"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt="" width='300px' height='300' />
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default Test;