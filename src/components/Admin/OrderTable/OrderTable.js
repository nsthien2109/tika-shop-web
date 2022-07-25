import React from "react";

const OrderTable = () => {
  return (
    <>
      <div className="table-dashboard card">
        <table className="table-auto">
          <thead className="header-table">
            <tr>
              <th>OrderID</th>
              <th>Billing name</th>
              <th>Date</th>
              <th>Total</th>
              <th>Payment status</th>
              <th className="payment-method-table">Payment method</th>
              <th className="view-detail-table">View details</th>
            </tr>
          </thead>
          <tbody className="content-table">
            <tr className="text-center">
              <td className="order-id">#OD001</td>
              <td>Nguyen Si Thien</td>
              <td>21-07-2022</td>
              <td>$149</td>
              <td className="paid">Paid</td>
              <td className="payment-method payment-method-table">
                <span>
                  <i className="ri-money-dollar-box-line"></i>
                </span>{" "}
                Cash on delivery
              </td>
              <td className="view-detail-table">
                <button className="button-detail">View detail</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderTable;
