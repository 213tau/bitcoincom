// api/location.js
module.exports = (req, res) => {
  const { latitude, longitude } = req.body;

  // Process the latitude and longitude data as needed (e.g., log it, store it, etc.)
  console.log(`Received location: Latitude: ${latitude}, Longitude: ${longitude}`);

  // Respond with the received data
  res.status(200).json({ message: 'Location received successfully!', latitude, longitude });
};
