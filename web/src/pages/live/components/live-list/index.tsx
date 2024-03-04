import styles from './index.less';
import useData from './hook';
import { FC } from 'react';
import { LIVE_INFO } from '@/services/live';
import { List, Tabs } from '@douyinfe/semi-ui';
import classNames from 'classnames'

const { TabPane } = Tabs;

type Props = {
  liveKey: string,
  liveList: LIVE_INFO[],
  onLiveKeyChange: (v: string) => void,
}

const Index: FC<Props> = ({
  liveKey, liveList, onLiveKeyChange,
}) => {
  const {
    group,
    setGroup,
    groupMap,
  } = useData(liveKey, liveList);
  const renderList = (key: string) => {
    const list = groupMap[key] || [];
    if (!list.length) {
      return null;
    }
    return <List
      dataSource={list}
      className={styles.list}
      renderItem={item => <List.Item
        className={classNames(
          !item.src ? styles.disabled : null,
          liveKey === item.id ? styles.active : null,
          styles.item
        )}
        onClick={() => item.src ? onLiveKeyChange(item.id) : null}
      >{item.name}</List.Item>}
      grid={{
        gutter: 12,
        span: 8,
      }}
    />
  };
  return (
    <Tabs
      className={styles.root}
      activeKey={group}
      onChange={setGroup}
    >
      <TabPane tab="中央台" itemKey="中央台">{renderList('中央台')}</TabPane>
      <TabPane tab="地方台" itemKey="地方台">{renderList('地方台')}</TabPane>
      <TabPane tab="广播台" itemKey="广播台">{renderList('广播台')}</TabPane>
      <TabPane tab="其他" itemKey="其他">{renderList('其他')}</TabPane>
    </Tabs>
  );
};

export default Index;