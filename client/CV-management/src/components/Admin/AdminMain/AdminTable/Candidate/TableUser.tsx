import React from "react";
import { Space, Switch } from "antd";
export default function TableUser() {
  return (
    <>
      <tr>
        <td>1</td>
        <td>Dương Nguyễn</td>
        <td>Nam</td>
        <td>0987654321</td>
        <td>lab70018@gmail.com</td>
        <td>TP. Hồ Chí Minh</td>
        <td>
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
