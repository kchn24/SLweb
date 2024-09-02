import React, { useState, useEffect } from 'react';
import shiftService from './services/shiftService';

function ShiftManagerPage() {
  const [shifts, setShifts] = useState([]);
  const [newShift, setNewShift] = useState({ date: '', startTime: '', endTime: '' });

  useEffect(() => {
    const fetchShifts = async () => {
      const fetchedShifts = await shiftService.getShifts();
      setShifts(fetchedShifts);
    };
    fetchShifts();
  }, []);

  const handleAddShift = async () => {
    const createdShift = await shiftService.createShift(newShift);
    setShifts([...shifts, createdShift]);
  };

  const handleDeleteShift = async (id) => {
    await shiftService.deleteShift(id);
    setShifts(shifts.filter((shift) => shift._id !== id));
  };

  return (
    <div>
      <h2>シフト管理ページ</h2>
      <input
        type="date"
        value={newShift.date}
        onChange={(e) => setNewShift({ ...newShift, date: e.target.value })}
      />
      <input
        type="time"
        value={newShift.startTime}
        onChange={(e) => setNewShift({ ...newShift, startTime: e.target.value })}
      />
      <input
        type="time"
        value={newShift.endTime}
        onChange={(e) => setNewShift({ ...newShift, endTime: e.target.value })}
      />
      <button onClick={handleAddShift}>シフト追加</button>

      <h3>あなたのシフト</h3>
      <ul>
        {shifts.map((shift) => (
          <li key={shift._id}>
            {shift.date} {shift.startTime} - {shift.endTime}
            <button onClick={() => handleDeleteShift(shift._id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShiftManagerPage;