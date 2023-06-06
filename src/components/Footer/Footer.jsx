import React from 'react'
import PageDivider from "../PageDivider/PageDivider.jsx";
import {BiCopyright} from "react-icons/bi";
import {MdOutlineLocationOn} from "react-icons/md";

const Footer = () => {
    return (
        <div className="footer">
            <PageDivider separated={true} dark={true}/>
            <div className="wrap">
                <div className="footer__inner">
                    <div className="footer__left">
                        <span className="footer__copy">Copyright
                            <span className="footer__icon"><BiCopyright/></span>
                        </span>
                        <span className="footer__author">Jelena Salopek</span>
                    </div>
                    <div className="footer__right">
                        <span className="footer__icon"><MdOutlineLocationOn/></span>
                        <span className="footer__locate">Weiden, Germany</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
