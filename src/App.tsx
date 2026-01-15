import { Layout, Row, Col, Spin, Alert, Card } from "antd";
import useData from "./hooks/useData";
import { TableList } from "./components/TableList";
import Map from "./components/Map";

const { Header, Content } = Layout;

export default function App() {
  const { data, loading, error } = useData();

  if (loading) return <Spin fullscreen />;
  if (error) return <Alert type="error" message={error.message} />;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "#fff", fontSize: 18 }}>
        Обращения граждан
      </Header>

      <Content style={{ padding: 24 }}>
        <Row gutter={[16, 16]}>
          {/* Карта */}
          <Col xs={24} lg={10}>
            <Card title="Карта обращений">
              <Map data={data} />
            </Card>
          </Col>

          {/* Таблица */}
          <Col xs={24} lg={14}>
            <Card title="Список обращений">
              <TableList data={data} />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
