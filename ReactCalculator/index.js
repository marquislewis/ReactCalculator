class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //expression will display current key press
            expression: " ",
            //equation will show all key presses until calculated
            equation: " "
        };
        this.display = this.display.bind(this)
        this.allClear = this.allClear.bind(this)
        this.clear = this.clear.bind(this)
    }

    //using equation state, calculate answer
    calculate(){
        this.setState({
            expression: eval(this.state.equation),
            equation: eval(this.state.equation)
        });
        
    }
    
    //when keypressed display symbol apporitely
    display(symbol){
       this.setState({
           equation: this.state.equation + symbol,
           expression: symbol
       });
       if(symbol == "="){
           this.calculate();
       }

   }

   //AC completely clears everything
   allClear(){
        this.setState({
            equation: "0",
            expression: "Cleared"
        });
    }

    //C will delete last number from equation and update will update expression accordingly
    clear(){
        this.setState({
            equation: this.state.equation.slice(0, this.state.equation.length-1)
            
        });
        this.setState({
            expression: this.state.equation.slice(this.state.equation.length-2, this.state.equation.length-1)
            
        });
       
    }
    
    render(){
        return(
            <div className="calculator">
                <div name="grid"  class="container-fluid">
                    <div className="dis">
                        <p > {this.state.equation}</p>
                        <h1> {this.state.expression}</h1>
                    </div>
                    <div class="row">
                        <button onClick={this.allClear} type="button" class="btn btn-lg btn-danger " name="padButton AC">AC</button>
                        <button onClick={this.clear} type="button" class="btn btn-danger" name="padButton C">C</button>
                        <button onClick={()=>this.display("/")} type="button" class="btn btn-light" name="padButton div">/</button>
                        <button onClick={()=>this.display("*")} type="button" class="btn btn-light" name="padButton mult">x</button>
                    </div>
                    <div class="row">
                        <button onClick={()=>this.display("7")} type="button" class="btn btn-primary" name="padButton 7">7</button>
                        <button onClick={()=>this.display("8")} type="button" class="btn btn-primary" name="padButton 8">8</button>
                        <button onClick={()=>this.display("9")} type="button" class="btn btn-primary" name="padButton 9">9</button>
                        <button onClick={()=>this.display("-")} type="button" class="btn btn-light" name="padButton sub">-</button>
                    </div>
                    <div class="row">
                        <button onClick={()=>this.display("4")} type="button" class="btn btn-primary" name="padButton 4">4</button>
                        <button onClick={()=>this.display("5")} type="button" class="btn btn-primary" name="padButton 5">5</button>
                        <button onClick={()=>this.display("6")} type="button" class="btn btn-primary" name="padButton 6">6</button>
                        <button onClick={()=>this.display("+")} type="button" class="btn btn-light" name="padButton add">+</button>
                    </div>
                    <div class="row">
                        <button onClick={()=>this.display("1")} type="button" class="btn btn-primary" name="padButton 1">1</button>
                        <button onClick={()=>this.display("2")} type="button" class="btn btn-primary" name="padButton 2">2</button>
                        <button onClick={()=>this.display("3")} type="button" class="btn btn-primary" name="padButton 3">3</button>
                        <button onClick={()=>this.display(".")} type="button" class="btn btn-light" name="padButton dec" id="decimal">.</button>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <button onClick={()=>this.display("0")} type="button" class="btn btn-block btn-primary" name="padButton 0">0</button>
                        </div>
                        <div class="col-6">
                            <button onClick={()=>this.display("=")} type="button" class="btn btn-block btn-light" name="padButton equal">=</button>
                        </div>
                    </div>
            </div>
           </div>
           
        )
    };

    
}

ReactDOM.render(<Buttons />, document.getElementById('app'));