// styles
import styles from "./Table.module.scss";
// components
import Button from "@/components/Globals/Button";

interface TableProps {
  cols?: any;
  rows?: any;
  phones?: any;
  emails?: any;
  telegrams?: any;
  headhunter?: any;
  social_media?: any;
  vk?: any;
}

// TODO: remove both this data from this file and place it in db

const contactsColsTableData = [
  { id: 1, title: "Вид контакта" },
  { id: 2, title: "Для экспорта" },
  { id: 3, title: "Источник" },
  { id: 4, title: "Действие" },
];

const actionsData = [
  { id: 1, value: "Позвонить", link: "callto:+" },
  { id: 2, value: "Написать", link: "mailto:" },
  { id: 3, value: "WhatsApp", link: "https://wa.me/" },
  { id: 4, value: "Telegram", link: "https://t.me/+" },
  { id: 5, value: "SMS", link: "sms:+" },
];

const Table = ({
  phones = {},
  emails = {},
  telegrams = {},
  vk = {},
}: TableProps) => {
  let data = { phones, emails, telegrams, vk };
  const filteredData = Object.entries(data)
    .filter((item) => item[1] !== null)
    .filter((item) => Object.values(item[1]).length);
  return (
    <>
      {filteredData.length ? (
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              {contactsColsTableData.map((col: any) => (
                <th key={col.id}>{col.title}</th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {filteredData.map((item: any) =>
              // item[0] === key
              // item[1] === values
              Object.values(item[1]).map((row: any, key: number) => (
                <tr
                  key={key}
                  style={{
                    borderBottom:
                      key === Object.values(item[1]).length - 1
                        ? "1px solid #00416633"
                        : "",
                  }}
                >
                  <td className={styles.firstCol}>
                    {key === 0 ? item[0] : ""}
                  </td>
                  <td>
                    <input type="checkbox" />
                    {item[0] !== "phones" ? (
                      <a
                        href={row.value ? row.value : row.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {row.value ? row.value : row.url}
                      </a>
                    ) : (
                      <span>{row.value}</span>
                    )}
                  </td>
                  <td>
                    <a href={row.source} target="_blank" rel="noreferrer">
                      {row.source}
                    </a>
                  </td>
                  <td className={styles.actionRow}>
                    {actionsData.map((action) => (
                      <a
                        href={action.link + row.value}
                        target="_blank"
                        rel="noreferrer"
                        key={action.id}
                      >
                        <Button
                          children={action.value}
                          borderType="default"
                          backgroundType="outline"
                          colorType="primary"
                        />
                      </a>
                    ))}
                    <Button
                      children="Ещё"
                      borderType="default"
                      backgroundType="fill"
                      colorType="success"
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      ) : (
        <span>Данные по контактам компании не найдены.</span>
      )}
    </>
  );
};

export default Table;
