import ReactCountdownClock from 'react-countdown-clock';

class Countdown extends Component {

myCallback = function () {
    console.log("test");
}

render() {
    return (
        <div className="Countdown">
        <ReactCountdownClock seconds={60}
        color="000"
        alpha={0.9}
        size={300}
        onComplete={this.myCallback} />
        </div>
    )
}
}
export default Countdown;