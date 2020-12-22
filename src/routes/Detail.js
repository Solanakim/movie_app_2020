import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        console.log(this.props);
        const { location, history } = this.props; {/* this.props에서 history 와 location을 가져온다. */ }
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) { 
            return(
                <div className="about__container">
                <span>
                    {location.state.summary}
                </span>
            <span>{location.state.title}, {location.state.year}</span>
              </div>
            ); 
        }
        else return null;
    }
}

export default Detail;