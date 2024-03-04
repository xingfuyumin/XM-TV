
import { Outlet } from 'umi';
import styles from './index.less';
import Logo from '@/assets/logo.png';
import { Button, Layout, Nav } from '@douyinfe/semi-ui';
import useData from './hook';
import { IconMoon, IconSun } from '@douyinfe/semi-icons';

const { Header, Content } = Layout;

const Menus = [
  {
    itemKey: 'live',
    text: '电视直播',
  },
  {
    itemKey: 'tv',
    text: '电视剧',
    disabled: true,
  },
  {
    itemKey: 'movie',
    text: '电影',
    disabled: true,
  }
];
const Index: React.FC = () => {
  const {
    menyKey, isDark,
    handleMenuSelect, handleDarkModeChange,
  } = useData();
  return (
    <Layout className={styles.root}>
      <Header className={styles.header}>
        <Nav
          mode="horizontal"
          defaultSelectedKeys={[menyKey]}
          items={Menus}
          onSelect={handleMenuSelect}
          header={{
            logo: <img className={styles.logo} src={Logo} />,
          }}
          footer={
            <>
              <Button
                icon={isDark ? <IconMoon /> : <IconSun />}
                theme="borderless"
                type="tertiary"
                onClick={handleDarkModeChange}
              />
            </>
          }
        />
      </Header>
      <Content className={styles.content}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default Index;
