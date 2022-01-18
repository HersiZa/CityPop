import React from 'react';
import { Redirect } from "react-router-dom";

let url =  'http://api.geonames.org/search?name_equals=';
let format = '&cities=cities1000&orderby=population&type=json&username=weknowit';

class SearchforCity extends Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                redirect: false,
                isLoaded: false,
                userInput: '',
                errorMSG: ''
            }
        }

        setRedirect = () => {// Updates the redirect state
        this.setState({
            redirect: true
        })
    }

        setisLoaded = () => { //Update the loading state
            this.setState({
                isLoaded: !this.state.isLoaded
            })
        }

        handleClick(error){
            if(this.state.userInput==""){
                alert("Enter a city")
            }else
            {
                this.setisLoaded()
                this.componentDidMount()
            }
        }


    componentDidMount(){
        fetch(url + this.state.userInput + format)
            .then (res => res.json())
            .then.setState({
                isLoaded: true,
                items: json,
            })
    }

    render(){
   

        if (!isLoaded){
            return <div>Loading...</div>
        }
        return(
            <div classname = "SearchforCity">
            Data has been loaded
            </div>
        )
    }

    
}