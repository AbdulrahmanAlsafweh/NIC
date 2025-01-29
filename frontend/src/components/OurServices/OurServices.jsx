export default function OurServices() {
  return (
    <div className="flex  relative flex-col  md:flex-row items-stretch justify-center   md:min-h-[400px]  md:px-10 md:gap-10  md:pt-10    ">
      {/* Service 1 */}
      <div className="flex relative items-center flex-col md:gap-5 bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform flex-1">
        <img
          src="Assets/Images/technical-support.png"
          className="w-[80px] mb-4"
          alt="Technology Consulting"
        />

     

        <h3 className="font-Main font-bold text-center text-xl md:text-2xl text-blackk mb-2">
          Technology Consulting
        </h3>
        <p className="text-center font-Secondary text-sm md:text-base text-gray-700">
          Network Design, Implementation, Monitoring & Support System Design
        </p>
      </div>

      {/* Service 2 */}
      <div className="flex relative items-center flex-col md:gap-5 bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform flex-1">
        <img
          src="Assets/Images/customer-service.png"
          className="w-[80px] mb-4"
          alt="IT Support & Maintenance"
        />
      
        <h3 className="font-Main font-bold text-center text-xl md:text-2xl text-blackk mb-2">
          IT Support & Maintenance
        </h3>
        <p className="text-center font-Secondary text-sm md:text-base text-gray-700">
          Data Storage Backup, Data Security, Disaster Recovery Solutions,
          Security and Data Leak Prevention Solutions, Remote Monitoring &
          Management, On Demand IT Support, On Site IT Support
        </p>
      </div>

      {/* Service 3 */}
      <div className="flex relative items-center flex-col md:gap-5 bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform flex-1">
        <img
          src="Assets/Images/server.png"
          className="w-[80px] mb-4"
          alt="Online & Hosting Services"
        />

       
        <h3 className="font-Main font-bold text-center text-xl md:text-2xl text-blackk mb-2">
          Online & Hosting Services
        </h3>
        <p className="text-center font-Secondary text-sm md:text-base text-gray-700">
          Managed Hosting, Cloud Hosting Solutions, Optimized High Availability,
          Email Solutions, Online Backup solutions, CDN solutions, Monitoring &
          Support of Online Services
        </p>
      </div>
    </div>
  );
}
