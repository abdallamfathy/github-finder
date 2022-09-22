import React from 'react'
const footerYear = new Date().getFullYear()
const Footer = () => {
  return (
    <div>
        <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
        <div>
            <p>Copyright &copy; {footerYear} All rights reserver @abdllamfathy</p>
        </div>
        </footer>
    </div>
  )
}

export default Footer