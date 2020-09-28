export default class App extends Component {
  state = {
   show: true
  }
  
  fun() {
    this.setState({
      show: !http://this.state.show
    })
  }
  
  render() {
    return (
      <>
      {this.state.show ? (<h1>Hide me</h1>) :null }
      <button onClick={()=> http://this.fun()}>Click</button>
      </>
     );
  }
  
}
