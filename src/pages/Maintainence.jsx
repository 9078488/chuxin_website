import React from 'react';

const Maintenance = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>网站维护中...</h1>
      <p style={styles.paragraph}>楚信环保科技（上海）有限公司</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#666',
  },
};

export default Maintenance;