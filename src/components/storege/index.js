import React from "react";

// import imgSearch from '../../assets/search.png';

// import './storege.scss';

        class Storege extends React.Component {
          handleSubmit = (e) => {
            e.preventDefault(); 
            const email = e.target.elements.email.value;
            localStorage.setItem('@welcome-app/email', email);
            window.location.reload();
          }
        
          handleLogout = () => {
            localStorage.removeItem('@welcome-app/email');
            window.location.reload();
          }
        
          render() {
            const email = localStorage.getItem('@welcome-app/email');
            if (email !== null) {
              return (
                <div style={styles.container}>
                  <p>cadastro efetuado, obrigada!</p>
                  <button onClick={this.handleLogout} style={styles.submitButton}>ok</button>
                </div>
              );
            }
            return (
              <form style={styles.container} onSubmit={this.handleSubmit}>
                <input style={styles.email} type="text" name="email" placeholder="e-mail" required />
                <button type="submit" style={styles.submitButton}>enviar</button>
              </form>
            );
          }
        }
        
        const styles = {
          container: {
            display: 'flex',
            textAlign: 'center',
            flexDirection: 'column',
            minWidth: '300px',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 20px',
            background: 'rgb(255, 255, 255)',
            borderRadius: '4px',
            padding: '30px 20px'
          },
          submitButton: {
            height: '40px',
            textAlign: 'center',
            alignItems: 'center',
            borderRadius: '4px',
            fontWeight: 'bold',
            fontSize: '14px',
            border: 0,
            color: '#fff',
            background: 'yellow',
            marginTop: '5px',
          },
          email: {
            height: '40px',
            padding: '0 15px',
            border: '1px solid #eee',
            borderRadius: '4px',
            marginBottom: '10px',
            color: '#444'
          }

        };


export default Storege;
