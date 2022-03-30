import React from "react";

export default React.forwardRef(({ type, placeholder }, ref) => {
  return <input ref={ref} type={type} placeholder={placeholder}></input>;
});

// const fowardedRef = React.forwardRef(Input);

// export default fowardedRef;
