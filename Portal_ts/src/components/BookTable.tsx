import React from "react";
import "../styles/table.scss";

import { ExampleBooksData } from "../tempdata/Books";

export default function BookTable() {
  return (
    <>
      <table>
        <tr>
          <th>Название</th>
          <th>Автор</th>
          <th>Год издания</th>
          <th>Издательство</th>
        </tr>
        {ExampleBooksData.value.map(book => {
        return(
          <tr>
            <td>{book.ОсновноеЗаглавие}</td>
            <td>{book.Автор}</td>
            <td>{book.ГодИздания}</td>
            <td>{book.ИздательствоПредставление}</td>
          </tr>
        );
      })}
      </table>

    </>
  );
}
