db.clubs.insertOne({
  name: "Astronuts Club",
  description: "A club for space enthusiasts",
  coordinator: "Akanksha",
  events: ["Stargazing Session", "Chandrayan Landing"],
  email: "astronuts@sc.iiitd.ac.in",
  members: ["Alice", "Bob", "Charlie"],
  creationDate: "2023-08-05"
});

db.events.insertOne({
  name: "Art Club Event",
  description: "Join us for a creative art club event.",
  domain: "Art",
  start: "2023-08-15", 
  end: "2023-08-16",   
  venue: "Art Studio",
  coordinator: "Aditi",
  status: "pending",
  registrationDeadline: "2023-08-10", 
  club: "Art Club",
  participants: ["Participant1", "Participant2"],
  creationDate: "2023-08-08" 
})