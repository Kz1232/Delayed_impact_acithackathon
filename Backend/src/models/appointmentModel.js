import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  service: { type: String, required: true },
  date: { type: String, required: true }, // Store as string for simplicity (YYYY-MM-DD)
  time: { type: String, required: true }, // Store as string (HH:mm)
  createdAt: { type: Date, default: Date.now }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;
