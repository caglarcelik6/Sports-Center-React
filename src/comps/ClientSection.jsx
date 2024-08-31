

const clientsData = [
  {
    name: "Martin Luther",
    position: "CFO",
    image: "Resimler/client1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, libero. Asperiores libero repellat consequuntur repellendus saepe quam aliquam dignissimos reprehenderit, fugit ex consectetur ea sit, illo sed esse veritatis nulla nesciunt similique enim excepturi modi?"
  },
  {
    name: "Sarah Walker",
    position: "CFO",
    image: "Resimler/client2.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, libero. Asperiores libero repellat consequuntur repellendus saepe quam aliquam dignissimos reprehenderit, fugit ex consectetur ea sit, illo sed esse veritatis nulla nesciunt similique enim excepturi modi?"
  }
];

const ClientSection = () => {
  return (
    <section className="all-clients">
      {clientsData.map((client, index) => (
        <div className="clients" key={index}>
          <div className="client-item">
            <img 
              src={client.image} 
              alt={`${client.name}'s photo`} 
              style={{ borderRadius: '50%' }} 
              width="50" 
            />
            <div className="p3">
              <h2>{client.name}</h2>
              <p>{client.position}</p>
            </div>
          </div>
          <div className="paragraph">
            <p>{client.description}</p>
          </div>
          <div className="path1"></div>
          <div className="path2"></div>
        </div>
      ))}
    </section>
  );
}

export default ClientSection;
