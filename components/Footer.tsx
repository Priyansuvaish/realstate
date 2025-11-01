'use client';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Disclaimer */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-bold mb-4 text-center">Disclaimer</h3>
          <p className="text-gray-300 text-sm leading-relaxed text-justify">
            The Project is being Developed by Vaishnavi Group. The Project is registered as &quot;Vaishnavi at One Krishna Brindavan&quot; with RERA No: PRM/KA/RERA/1251/310/PR/081025/008140, available at website:{' '}
            <a
              href="http://rera.karnataka.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              http://rera.karnataka.gov.in
            </a>
            . The information is presented as general information and no warranty is expressly or impliedly given that the completed development will comply in any degree with such artist&apos;s impression or anticipated appearance. Recipients are advised to apprise themselves of the necessary and relevant information of the project(s)/offer(s) prior to making any purchase decisions. The Sale is subject to terms of Application Form and Agreement for Sale. All specifications of the unit shall be as per the final agreement between the Parties. *The prices mentioned are an indicative Agreement Value. Stamp Duty Registration, GST and Other Charges over and above the Agreement Value. The amenities mentioned here are a part of Vaishnavi Krishna Brindavan and proposed future development. This is an initiative by Smita an Individual Channel Partner RERA Regn No. PRM/KA/RERA/1251/310/AG/220521/002906 to provide information about Vaishnavi Krishna Brindavan is not to be construed as an official site of Vaishnavi Group. Distance mentioned is as per google map. Drive time refers to the time taken to travel by a car based on normal traffic conditions during non-peak hours as per Google maps may vary according to the current traffic conditions. Information provided is based on Online sources, the developer does not provide any guarantee on the same.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            ⓒ 2025 VAISHNAVI GROUP. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
