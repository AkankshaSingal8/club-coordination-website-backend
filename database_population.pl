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
  name: "Sample Event",
  description: "This is a sample event description.",
  domain: "Technology",
  start: "2023-08-15T10:00:00Z",
  end: "2023-08-15T18:00:00Z",
  venue: "Virtual",
  coordinator: "John Doe",
  status: "pending",
  registrationDeadline: "2023-08-10T23:59:59Z",
  club: "Tech Club",
  participants: ["Participant1", "Participant2"],
  creationDate: "2023-08-08T00:00:00Z"
})
