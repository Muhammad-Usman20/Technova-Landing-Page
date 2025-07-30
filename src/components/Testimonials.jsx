function Testimonials() {
    return (
        <section style={styles.section}>
            <h2>💬 Testimonials</h2>
            <div style={styles.wrapper}>
                <blockquote style={styles.card}>
                    “TechNova made our launch smooth and successful!”<br />
                    <strong>- Ibad, CEO of Techoid</strong>
                </blockquote>
                <blockquote style={styles.card}>
                    “The best team we’ve worked with. Period.”<br />
                    <strong>- Hassan, CEO at FinTechPro</strong>
                </blockquote>
            </div>
        </section>
    )
}

const styles = {
    section: {
        background: '#f0f0f0',
        padding: '60px 20px',
        textAlign: 'center'
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '30px',
        marginTop: '30px'
    },
    card: {
        background: 'white',
        padding: '20px',
        borderRadius: '10px',
        width: '300px',
        boxShadow: '0 0 8px rgba(0,0,0,0.1)'
    }
}

export default Testimonials
