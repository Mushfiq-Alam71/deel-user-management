import './Services.css';

const servicesList = [
   {
      title: "Payroll Management",
      description: "Efficient and accurate payroll processing to ensure timely and correct salary disbursements."
   },
   {
      title: "Employee Onboarding",
      description: "Streamlined onboarding process to help new hires integrate quickly and efficiently."
   },
   {
      title: "Performance Monitoring",
      description: "Continuous performance tracking and feedback to help employees achieve their goals."
   },
   {
      title: "Leave Management",
      description: "Simplified leave application and approval process for employees."
   },
   {
      title: "Training & Development",
      description: "Comprehensive training programs to enhance employee skills and career growth."
   }
];

const Services = () => {
   return (
      <section className="services-section">
         <h2 className="section-title text-4xl font-bold">Our Services</h2>
         <div className="services-container">
            {servicesList.map((service, index) => (
               <div key={index} className="service-card">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Services;
