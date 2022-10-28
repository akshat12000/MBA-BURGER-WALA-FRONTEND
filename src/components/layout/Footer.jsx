import React from 'react'
import {AiFillLinkedin,AiFillGithub} from "react-icons/ai";
import "../../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>MBA Burger Wala</h2>
            <p>We are trying to give you the best taste possible.</p><br/>
            <em>We give attention to genuine feedback.</em>
            <strong>All right reserved @mbaburgerwala</strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
            <a href="https://github.com/akshat12000"><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/akshat-bhatnagar-22a11a19b/"><AiFillLinkedin/></a>
        </aside>
    </footer>
  )
}

export default Footer