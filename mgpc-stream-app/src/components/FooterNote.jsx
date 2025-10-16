import React from 'react'

const FooterNote = () => {
    const year = new Date().getFullYear()
    return (
        <div className="footer-note">© {year} MGPC</div>
    )
}

export default FooterNote


