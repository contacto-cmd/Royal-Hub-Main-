import React from 'react';

export default function GlobalFinance() {
  return (
    <div style={{ backgroundColor: '#000', color: '#D4AF37', minHeight: '100vh', padding: '40px', fontFamily: 'Orbitron, monospace' }}>
      <header style={{ borderBottom: '2px solid #D4AF37', paddingBottom: '20px' }}>
        <h1>STREET EMPORIO ROYAL</h1>
        <p style={{ color: '#00ffff' }}>● SYSTEM OPERATIONAL // RFC: RIGR840827PJ0</p>
      </header>
      
      <main style={{ marginTop: '50px' }}>
        <div style={{ background: '#111', padding: '30px', borderRadius: '15px', border: '1px solid #333' }}>
          <h2>LIQUIDACIÓN DE ACTIVOS: FASE 1</h2>
          <p>Masa Crítica: $375,000,000 MXN (EFICINE)</p>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3>NODO 008: Fondo Hardware</h3>
              <p style={{ fontSize: '2rem' }}>$5,000 USD</p>
            </div>
            <a href="https://buy.stripe.com/aFadR9cXN1kH95P3vzbfO05" 
               style={{ background: '#D4AF37', color: '#000', padding: '20px 40px', fontWeight: 'bold', textDecoration: 'none', borderRadius: '10px' }}>
              PAGAR AHORA
            </a>
          </div>
        </div>
      </main>

      <footer style={{ marginTop: '50px', fontSize: '0.8em', opacity: 0.5 }}>
        VALIDACIÓN RSA-4096 VINCULADA A METAMASK: 0x42a3419B4Ed91cAad87acd7C34B593705be0eb6C
      </footer>
    </div>
  );
}
