# Printer Install
The ATM Kiosk uses a [Zebra 2030 Thermal Receipt printer](https://www.zebra.com/us/en/support-downloads/printers/kiosk/ttp2000.html).

Unfortunately the printer isn't supported by [CUPS](https://github.com/apple/cups/) natively and drivers need to be built for it to work on Linux. Reading through issues on the CUPS github page, I found [defect #3767](https://github.com/apple/cups/issues/3767) opened in 2011 that referenced why the Zebra 2030 didn't work with CUPS while falsely indicating it might work now. 



### Building and Installing Zebra 2030 TPP Printer Drivers
1) install git and build-utils

