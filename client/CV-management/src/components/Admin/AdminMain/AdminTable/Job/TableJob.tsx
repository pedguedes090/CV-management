import React from "react";
import imgCalendar from "../../../../../assets/AdminImg/Calendar.png";
import imgDelete from "../../../../../assets/AdminImg/Vector.png";
import { Space, Switch } from "antd";
export default function TableJob() {
  return (
    <>
      <tr>
        <td>1</td>
        <td>Full-stack Developer</td>
        <td >FPT Software</td>
        <td>victorkesangtao@gmail.com</td>
        <td className="relative ">
          <input
            className="w-[156px] h-[36px] rounded-[5px] border border-[#E4E5E8] text-center"
            type="date"
          />
          <img
            className="absolute left-[20px] top-1/2 -translate-y-1/2 w-[16px] h-[16px]"
            src={imgCalendar}
          />
          <img
            className="absolute top-1/2 -translate-y-1/2 right-[20px] w-[14px] h-[14px]"
            src={imgDelete}
          />
        </td>
        <td>
          <div className="flex gap-[10px] justify-center">
            <input
              className="w-[67px] h-[32px] rounded-[5px] border border-[#79747E] text-center"
              type="text"
              placeholder="$20,000"
            />
            <span>-</span>
            <input
              className="w-[67px] h-[32px] rounded-[5px] border border-[#79747E] text-center"
              type="text"
              placeholder="$20,000"
            />
          </div>
        </td>
        <td >
          <Space vertical>
            <Switch
              className="green-switch switch-large"
              checkedChildren="ON"
              unCheckedChildren="OFF"
              defaultChecked
            />
          </Space>
        </td>
        <td>
          <div>Truy cập</div>
        </td>
      </tr>
      
    </>
  );
}
