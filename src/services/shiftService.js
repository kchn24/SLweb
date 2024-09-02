import axios from 'axios';
import authService from './authService';

const api = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${authService.getToken()}`,
  },
});

const getShifts = async () => {
  const response = await api.get('/shifts');
  return response.data;
};

const createShift = async (shift) => {
  const response = await api.post('/shifts', shift);
  return response.data;
};

const deleteShift = async (id) => {
  await api.delete(`/shifts/${id}`);
};

const shiftService = {
  getShifts,
  createShift,
  deleteShift,
};

export default shiftService;