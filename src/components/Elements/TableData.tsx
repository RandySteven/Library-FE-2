import { TableProp } from "@/interfaces/props/TableProp";
import { Fragment } from "react";

export const TableData = (prop: TableProp) => {
    return <>
        <Fragment>
            <tr className="border border-black border-1">
                <td className="border border-black border-1">
                    {prop.keyData}
                </td>
                <td className="border border-black border-1">
                    {prop.value}
                </td>
            </tr>
        </Fragment>
    </>
}