import React from "react";
import { Space, Switch } from "antd";
export default function TableCompany() {
  return (
    <>
      <tr>
        <td>1</td>
        <td>Công ty XYZ Tech</td>
        <td >123 Đường ABC, Quận 1, TP.HCM</td>
        <td>hr@companyxyz.com</td>
        <td>Product</td>
        <td>50-100</td>
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
