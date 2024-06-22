import './Team.css';

const teamMembers = [
   { name: "John Doe", role: "CEO", bio: "Leading the company with a vision.", imgSrc: "https://images.pexels.com/photos/3260957/pexels-photo-3260957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
   { name: "Jane Smith", role: "CTO", bio: "Innovating with technology.", imgSrc: "https://images.pexels.com/photos/1752126/pexels-photo-1752126.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
   { name: "Mike Johnson", role: "Project Manager", bio: "Ensuring projects are delivered on time.", imgSrc: "https://images.pexels.com/photos/2635314/pexels-photo-2635314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];

const Team = () => {
   return (
      <section className="team-section">
         <h2 className="section-title">Meet Our Team</h2>
         <div className="team-container">
            {teamMembers.map((member, index) => (
               <div key={index} className="team-card">
                  <img src={member.imgSrc} alt={member.name} className="team-photo" />
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Team;
