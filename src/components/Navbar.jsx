// // src/components/Navbar.jsx
// function Navbar() {
//     return (
//         <nav style={styles.nav}>
//             <h2 style={{ margin: 0 }}>TechNova</h2>
//             <div>
//                 <a href="#about">About</a>
//                 <a href="#contact">Contact</a>
//             </div>
//         </nav>
//     )
// }

// const styles = {
//     nav: {
//         background: '#2c4b50ff',
//         color: 'white',
//         padding: '15px 30px',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//     }
// }

// export default Navbar




function Navbar() {
    return (
        <nav style={styles.nav}>
            <h2 style={styles.logo}>TechNova</h2>
            <div>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#team">Team</a>

                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}

const styles = {
    nav: {
        background: '#2c3e50',
        color: 'white',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,


},
    logo: {
        margin: 0
    }
}

export default Navbar
