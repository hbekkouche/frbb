# Printer Install
The ATM Kiosk uses a [Zebra 2030 Thermal Receipt printer](https://www.zebra.com/us/en/support-downloads/printers/kiosk/ttp2000.html).

Unfortunately the printer isn't supported by [CUPS](https://github.com/apple/cups/) natively and drivers need to be built for it to work on Linux. Reading through issues on the CUPS github page, I found [defect #3767](https://github.com/apple/cups/issues/3767) opened in 2011 that referenced why the Zebra 2030 didn't work with CUPS while falsely indicating it might work now. 



### Building and Installing Zebra 2030 TPP Printer Drivers on the Raspberry PI
1) sudo apt-get install build-essential git gcc
2) Zebra CUPS printer drivers for the 2030 printer are not found in the current version of CUPS but a driver for the printer is available on [SourceForge](https://sourceforge.net/projects/zebratechcups/files/) but I'm committing the file to this repository, not sure how long SourceForge will be available and it took a long timt to find the driver.



