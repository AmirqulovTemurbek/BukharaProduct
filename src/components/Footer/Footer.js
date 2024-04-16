import React from 'react'
import FooterLogo from "../../../src/assets/Logo.png"
import "./footer.scss"
import {Link } from "react-router-dom"


export default function Footer() {
  return (
    <div>
        <div className='footer'>
            <div className='footer-logo'>
                <img src={FooterLogo} />   
                <p>
                'Bukhara Natural Product' уже много лет 
                является компанией, которая производит 
                хлопчатобумажные ткани для использования 
                во всем мире    
                </p> 
            </div>
            <div className='nav--menu'>
                <ul id='nav--list'>
                    <h2>меню</h2>
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
            </div>
            <div className='contact'>
                <ul id='nav--list'>
                    <h2>Контакты</h2>
                    <li className='nav--item'>
                        г. Бухара, ул. Алпомыш 80.
                    </li>
                    <li className='nav--item'>
                        Bnpuz@bk.ru
                    </li>
                    <li className='nav--item'>
                        bnp_fabrik
                    </li>
                    <li className='nav--item'>
                        info@bnpfabric.com
                    </li>
                    <li className='nav--item'>
                        +998 93 383 75 85
                    </li>
                    <li className='nav--item'>
                        +998 93 960 78 00
                    </li>
                </ul>
            </div>
            <div className='message'>
                <h2>
                    Подпишитесь на нашу электронную почту
                </h2>
                <form className='wrapper'>
                    <label>
                        <input className='footerInput' type="email" name="EMAIL" placeholder="Enter Your Email" required />
                        <input className='btnInput' type='submit' value="Subscribe"/>
                    </label>
                </form>
            </div>
        </div>
    </div>
  )
}
