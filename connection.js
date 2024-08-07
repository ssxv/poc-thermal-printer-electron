const { ThermalPrinter, PrinterTypes } = require('node-thermal-printer');
const driver = require('@thiagoelg/node-printer');

const testConnection = async (printerName) => {
  console.log('testConnection');
  const printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: printerName,
    driver: driver,
  });

  const isConnected = await printer.isPrinterConnected();
  console.log('Printer connected:', isConnected);
  return isConnected;
}

module.exports = {
  testConnection
}