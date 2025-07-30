function Services() {
    return (
        <section id="services" style={styles.section}>
            <h2>💼 Our Services</h2>
            <div style={styles.grid}>
                <div style={styles.card}>
                    <h3>💻 Development</h3>
                    <p>Modern web and mobile development with clean code.</p>
                </div>
                <div style={styles.card}>
                    <h3>🎨 UI/UX Design</h3>
                    <p>User-centered designs that look and feel great.</p>
                </div>
                <div style={styles.card}>
                    <h3>📈 Strategy</h3>
                    <p>Business and marketing strategies that deliver results.</p>
                </div>
            </div>
        </section>
    )
}

const styles = {
    section: {
        padding: '60px 20px',
        textAlign: 'center'
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        flexWrap: 'wrap',
        marginTop: '30px'
    },
    card: {
        width: '220px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }
}

export default Services
