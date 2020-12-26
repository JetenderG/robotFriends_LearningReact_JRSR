import {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'
//State an Object the describes the application in which change (re-render conponents)
class App extends Component { //this is smart components as it has state also has class
    constructor(){
        super()//Call the constructor of components
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots : users })
    )};
    onSearchChange = (event) =>{
            this.setState({ searchfield: event.target.value})
        }
    render () {
        const {robots, searchfield} = this.state
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return (!robots.length)?
             <h1>Loading</h1> :
             (
            <div className='tc'>
             <h1 className='f2'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                     <CardList robots={filteredRobots}/> 
                </ErrorBoundary>
            </Scroll>
            </div>
        );
        }
    }
export default App;