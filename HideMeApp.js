export default class AppClickAndHideMe extends Component {
  state = {
   show: true
  }
  
  fun() {
    this.setState({
      show: !this.state.show
    })
  }
  
  render() {
    return (
      <>
      {this.state.show ? (<h1>Hide me</h1>) :null }
      <button onClick={()=>this.fun()}>Click and Hide me</button>
      </>
     );
  }
  
}
