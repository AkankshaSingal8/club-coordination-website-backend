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

db.events.insertOne({
  name: "Astronomy Club Star Party",
  description: "Join us for a night of stargazing and astronomy discussions.",
  domain: "Astronomy",
  start: "2023-09-20", 
  end: "2023-09-20",   
  venue: "Observatory",
  coordinator: "John Smith",
  status: "approved",
  registrationDeadline: "2023-09-15", 
  club: "Astronomy Club",
  participants: ["Participant3", "Participant4"],
  creationDate: "2023-08-15" 
})

db.events.insertOne({
  name: "Coding Tech Club Hackathon",
  description: "Participate in a coding hackathon and showcase your skills.",
  domain: "Coding",
  start: "2023-10-10",
  end: "2023-10-12",
  venue: "Tech Hub",
  coordinator: "Alex Johnson",
  status: "rejected",
  registrationDeadline: "2023-10-01",
  club: "Coding Tech Club",
  participants: ["Participant5", "Participant6"],
  creationDate: "2023-09-01"
})
