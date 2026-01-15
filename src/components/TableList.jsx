import { Table, Select, Input, Space, Modal } from "antd";
import { useMemo, useState } from "react";

export const TableList = ({ data }) => {
  const [statusFilter, setStatusFilter] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const byStatus = statusFilter ? item.status === statusFilter : true;
      const bySearch =
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.address.toLowerCase().includes(search.toLowerCase());
      return byStatus && bySearch;
    });
  }, [data, statusFilter, search]);

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Категория", dataIndex: "category", key: "category" },
    { title: "Адрес", dataIndex: "address", key: "address", ellipsis: true },
    { title: "Статус", dataIndex: "status", key: "status" },
    { title: "Дата", dataIndex: "created_at", key: "created_at" },
  ];

  return (
    <>

      <Space style={{ marginBottom: 16 }} wrap>
        <Select
          allowClear
          placeholder="Статус"
          style={{ width: 160 }}
          onChange={setStatusFilter}
          options={[
            { value: "В работе", label: "В работе" },
            { value: "Решено", label: "Решено" },
            { value: "Отклонено", label: "Отклонено" },
          ]}
        />

        <Input.Search
          placeholder="Поиск по категории или адресу"
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: 250 }}
        />
      </Space>

      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        onRow={(record) => ({
          onClick: () => setSelectedItem(record),
        })}
      />

      
      <Modal
        open={!!selectedItem}
        onCancel={() => setSelectedItem(null)}
        footer={null}
        title={`Обращение #${selectedItem?.id}`}
      >
        {selectedItem && (
          <>
            <p><b>Категория:</b> {selectedItem.category}</p>
            <p><b>Адрес:</b> {selectedItem.address}</p>
            <p><b>Статус:</b> {selectedItem.status}</p>
            <p><b>Описание:</b> {selectedItem.description}</p>
          </>
        )}
      </Modal>
    </>
  );
};
