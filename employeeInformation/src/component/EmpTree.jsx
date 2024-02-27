import React, { useState } from 'react';
import './EmpTree.css'; // Import CSS file for styling
import employees from '../Data/empInfo.js';

const TreeNode = ({ employee, employees, level }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const directReports = employees.filter(emp => emp.reportsTo === employee.id);

  return (
    <div className="tree-node" style={{ marginLeft: `${level * 20}px` }}>
      <div className="node-content">
        <button className="expand-button" onClick={toggleExpand}>
          {directReports.length > 0 && (expanded ? '-' : '+')}
        </button>
        <span className="employee-name" onClick={toggleExpand}>
          {employee.name} ({employee.id})
        </span>
      </div>
      {expanded && directReports.length > 0 && (
        <ul className="nested">
          {directReports.map(report => (
            <TreeNode key={report.id} employee={report} employees={employees} level={level + 1} />
          ))}
        </ul>
      )}
    </div>
  );
};

const EmpTree = () => {
  const topLevelEmployees = employees.filter(emp => emp.reportsTo === null);

  return (
    <div className="tree">
      {topLevelEmployees.map(employee => (
        <TreeNode key={employee.id} employee={employee} employees={employees} level={0} />
      ))}
    </div>
  );
};

export default EmpTree;
