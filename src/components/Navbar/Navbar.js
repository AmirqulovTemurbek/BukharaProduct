import React, { Component } from 'react'
import Logo from "../../assets/Logo.png"
import {Link } from "react-router-dom"
import "./navbar.scss"
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";


 class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    
render(){
    return (
        <div className='container'>       
            <nav>
                <a className='nav--logo'>
                    <img src={Logo} />
                </a>
                <ul id='nav--list' className={this.state.clicked ? "nav--list active " : "nav--list"}>
                    <li className='nav--item'>
                        <Link className='nav--link'>
                            Главная
                        </Link>
                    </li>
                    <li className='nav--item'>
                        <Link className='nav--link'>
                            Коллекция
                        </Link>
                    </li>
                    <li className='nav--item'>
                        <Link className='nav--link' to="/about">
                            О Нас
                        </Link>
                    </li>
                    <li className='nav--item'>
                        <Link className='nav--link'>
                            Контакты
                        </Link>
                    </li>
                </ul>

                <div id="mobile" onClick={this.handleClick}>
                    {this.state.clicked ? <FaTimes /> : <FaBarsStaggered /> }
                </div>
            </nav>
        </div>
    )
    }
 }
export default Navbar