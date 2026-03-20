import React from 'react';

export default function GlobalFinance() {
  const styles = {
    container: { backgroundColor: '#000', color: '#D4AF37', minHeight: '100vh', padding: '40px', fontFamily: 'monospace' },
    panel: { background: '#111', padding: '25px', borderRadius: '15px', border: '1px solid #333', marginBottom: '20px' },
    pipeline: { marginTop: '30px', border: '1px solid #00ff88', padding: '20px', borderRadius: '10px' },
    button: { background: '#00ff88', color: '#000', border: 'none', padding: '15px', fontWeight: 'bold', width: '100%', cursor: 'pointer', borderRadius: '5px' },
    goldBtn: { background: '#D4AF37', color: '#000', padding: '15px 30px', fontWeight: 'bold', textDecoration: 'none', borderRadius: '5px', display: 'inline-block' }
  };

  return (
    <div style={styles.container}>
      <header style={{ borderBottom: '2px solid #D4AF37', paddingBottom: '20px' }}>
        <h1>STREET EMPORIO ROYAL</h1>
        <p style={{ color: '#00ffff' }}>● SINI OMEGA SUPREME V6.0 // RFC: RIGR840827PJ0</p>
      </header>
      
      <main style={{ marginTop: '40px' }}>
        <div style={styles.panel}>
          <h2>ESTADO DE LIQUIDACIÓN: FASE 1</h2>
          <p>Masa Crítica Certificada: $375,000,000 MXN</p>
          <hr style={{ borderColor: '#222' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3>NODO 008: Fondo Hardware</h3>
              <p style={{ fontSize: '1.8rem', color: '#fff' }}>$5,000 USD</p>
            </div>
            <a href="https://buy.stripe.com/aFadR9cXN1kH95P3vzbfO05" style={styles.goldBtn}>PAGAR AHORA</a>
          </div>
        </div>

        <div style={styles.pipeline}>
          <h3 style={{ color: '#00ff88' }}>⚡ TITAN CASH FLOW PIPELINE</h3>
          <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '0.7rem', color: '#fff', marginBottom: '15px' }}>
            <span>[ JWT ]<br/>Soberanía</span>
            <span>→</span>
            <span>[ GPU NODE ]<br/>Colateral</span>
            <span>→</span>
            <span>[ SAAS RENT ]<br/>Utilidad</span>
            <span>→</span>
            <span>[ BANCOPPEL ]<br/>CASH</span>
          </div>
          <button style={styles.button} onClick={() => alert('🔱 Iniciando transferencia de crédito a Bóveda Real...')}>
            LIQUIDAR CRÉDITO A CUENTA REAL
          </button>
        </div>
      </main>

      <footer style={{ marginTop: '50px', fontSize: '0.7em', opacity: 0.4 }}>
        VALIDACIÓN RSA-4096 // WALLET: 0x42a3419B4Ed91cAad87acd7C34B593705be0eb6C
      </footer>
    </div>
  );
}
