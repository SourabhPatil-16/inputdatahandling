import React, { useState } from 'react';
import './style.css';

function Data() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({});

  function handleCreate(e) {
    e.preventDefault();
    setData([...data, formData]);
    setFormData({});
  }

  function handleDelete(index) {
    setData(data.filter((item, i) => i !== index));
  }

  return (
    <div>
      <h2>Data handling</h2>
      <form onSubmit={handleCreate}>
        <label>
          Name:
          <input
            type="text"
            value={formData.name || ''}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        &nbsp;&nbsp;
        <label>
          Degree:
          <input
            type="text"
            value={formData.degree || ''}
            onChange={(e) =>
              setFormData({ ...formData, degree: e.target.value })
            }
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name} - {item.degree}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Data;
