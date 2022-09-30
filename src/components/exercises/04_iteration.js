import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = (props) => {
  const list = props.modules.map((f) =>
    <tr>
      <td>{f.name}</td>
      <td>{f.noLectures}</td>
      <td>{f.noPracticals}</td>
    </tr>
  )
  return (
    <table className={props.course}>
      <thead>
        <tr>
          <th>Name</th>
          <th>No lectures</th>
          <th>No practicals</th>
        </tr>
      </thead>
      <tbody>
        {list}
      </tbody>
    </table>
  );
};

export default Demo;
