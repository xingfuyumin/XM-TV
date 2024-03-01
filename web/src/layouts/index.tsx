
import { Outlet } from 'umi';
import styles from './index.less';
import { Layout, Menu } from 'antd';
import Logo from '@/assets/logo.png';
const { Header, Content } = Layout;

const Menus = [
  {
    key: 1,
    label: '电视直播',
  }
];
console.log(111);
const Index: React.FC = () => {
  return (
    <Layout className={styles.root}>
      <Header className={styles.header}>
        <img className={styles.logo} src={Logo} />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={Menus}
        />
      </Header>
      <Content className={styles.content}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default Index;
