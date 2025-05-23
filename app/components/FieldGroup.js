import React from "react";

const FieldGroup = ({ label, children }) => (
  <div className="flex flex-col gap-2">
    <label className="block text-sm text-rose-900 font-medium">{label}</label>
    <div className="flex flex-wrap gap-2"> {children}</div>
  </div>
);

export default FieldGroup;
