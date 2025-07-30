function Team() {
    return (
        <section id="team" style={styles.section}>
            <h2>👨‍💻 Our Team</h2>
            <div style={styles.members}>
                <div style={styles.member}>
                    <div style={styles.circle}>👨‍💼</div>
                    <h4>Ali Raza</h4>
                    <p>Founder & CEO</p>
                </div>
                <div style={styles.member}>
                    <div style={styles.circle}>👩‍💻</div>
                    <h4>Sana Sheikh</h4>
                    <p>Lead Developer</p>
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
    members: {
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        flexWrap: 'wrap'
    },
    member: {
        width: '180px'
    },
    circle: {
        fontSize: '60px',
        backgroundColor: '#ddd',
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        margin: '0 auto 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default Team
