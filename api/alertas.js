const ciudades = ["Dubai", "New York", "Londres", "Tokio", "Singapore"];
console.log("\n🔱 --- INICIANDO PROTOCOLO DE INGRESOS AUTOMÁTICOS --- 🔱\n");

setInterval(() => {
  const ciudad = ciudades[Math.floor(Math.random() * ciudades.length)];
  const monto = Math.floor(Math.random() * (15000 - 5000) + 5000);
  console.log(`🚀 NUEVA VENTA: $${monto} USD desde ${ciudad} | 🔐 HASH VERIFICADO`);
}, 3000);
