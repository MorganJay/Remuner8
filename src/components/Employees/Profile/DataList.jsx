import React from 'react';

const DataList = ({ data }) => {
  return (
    <ul className="personal-info">
      {data.map(({ title, text }) => (
        <li key={title}>
          <div className="title">{title}</div>
          <div className="text">{text}</div>
        </li>
      ))}
    </ul>
  );
};

DataList.defaultProps = {
  data: [{ title: 'Hello', text: 'World' }]
};

export default DataList;
