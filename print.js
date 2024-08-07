const { ThermalPrinter, PrinterTypes } = require('node-thermal-printer');
const driver = require('@thiagoelg/node-printer');

const print = async (printerName) => {
  const printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: printerName,
    driver: driver,
  });

  const isConnected = await printer.isPrinterConnected();
  console.log('Printer connected:', isConnected);
  const raw = `Hello World!!`;
  try {
    await printer.raw(raw);
    console.log('Print success.');
    return true;
  } catch (error) {
    console.error('Print error:', error);
    return false;
  }
}

module.exports = {
  print
}