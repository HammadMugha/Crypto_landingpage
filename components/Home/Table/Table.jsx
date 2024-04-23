import Container from "@/components/Container/Container";
import { tableData } from "@/utils/data";
import React from "react";

export default function Table() {
  return (
    <div className="py-[60px]">
      <Container>
        {/* table */}
        <table className="w-full bg-[#131830] p-6 rounded-lg">
          <thead>
            <td className="text-[#fff] p-4">Name</td>
            <td className="text-[#fff] p-4">#</td>
            <td className="text-[#fff] p-4">Price</td>
            <td className="text-[#fff] p-4">Change</td>
            <td className="text-[#fff] p-4">Market Cap</td>
            <td className="text-[#fff] p-4">Chart</td>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr key={i} className="text-[#FFF]">
                <td className="p-4">{item.number}</td>
                <td>
                    <div className="flex gap-3 items-center">
                        <img src={item.options.icon}/>
                        <h4>{item.options.title}</h4>
                        <span>{item.options.sub}</span>
                    </div>
                </td>
                <td><h3>{item.price}</h3></td>
                <td className={`text-[${item.change.color}]`}><h3>{item.change.value}</h3></td>
                <td><h3>{item.grip}</h3></td>
                <td>
                <img src={item.img}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
}
