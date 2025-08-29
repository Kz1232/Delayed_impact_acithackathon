import Appointment from '../models/appointmentModel.js';

const createAppointment = async (data) => {
  const { service, date, time } = data;
  if (!service || !date || !time) {
    throw new Error('All fields are required');
  }
  // Optionally: Add logic to check for double-booking, etc.
  const appointment = new Appointment({ service, date, time });
  return await appointment.save();
};

export default { createAppointment };
