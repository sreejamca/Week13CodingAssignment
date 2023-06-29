import React,{Component} from 'react'
export default class Nav extends Component{
    render(){
        return(
         <nav className='nav'>
            <ul>
            <li> <a href="Home">Home</a></li>
            <li><a href="Contact">Contact</a></li>
            <li><a href="Learn">Learn</a></li>
            </ul>
         </nav>
        )
    }
}