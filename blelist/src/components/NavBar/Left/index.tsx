import React from "react";
import { Link } from "react-router-dom";

// component
import Icon from "@src/components/common/Icon";

const Left = () => {
  return (
    <Link to="/">
      <Icon shape="logo" width={40} height={40} />
    </Link>
  );
};

export default Left;
