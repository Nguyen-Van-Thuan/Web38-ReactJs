import React from "react";

const SttInfo = ({ status }) => {
  // console.log(status);

  // if(status == "success") return "thanh cong"
  // if(status == "unSuccess") return "Khong thanh cong"
  // if(status == "error") return "loi"

  const INFO = {
    success: "Thanh cong",
    unSuccess: "kHONG THANH CONG",
    error: "Loi",
  };

  return INFO[status];
};

export default SttInfo;

// Viet 1 component kiem tra trang thai cua 1 ung dung. 3 trang thai: Thanh cong (success), Khong thanh cong (unSuccess), Loi(Error)
