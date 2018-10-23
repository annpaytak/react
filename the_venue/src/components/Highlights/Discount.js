import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../Utils/MyButton';

class Discount extends Component {

  state={
    discountSrart:0,
    discountEnd:30
  }

  porcentage = () => {
    if(this.state.discountSrart < this.state.discountEnd){
      this.setState({
        discountSrart: this.state.discountSrart + 1
      })
    }
  }

  componentDidUpdate(){
    setTimeout(()=>{
      this.porcentage()
    },30)
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal = {()=> this.porcentage()}
          >
            <div className="discount_porcentage">
              <span>{this.state.discountSrart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount-description">
              <h3>Purchase before 20th June</h3>
              <p>Lorem ipsum dolor sit amet, facilisis neglegentur id eam, falli nostro eam ut. Ne ubique graecis alienum per, id nostro feugiat usu. Id consul habemus disputationi mel, per eu case elitr. Duis noster intellegat mel te. Nam euismod civibus omnesque te. Ne ferri mollis aperiri mel.</p>

              <MyButton
                text="Purchase ticket"
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com"
              />

            </div>
          </Slide>

        </div>
      </div>
    );
  }
}

export default Discount;
