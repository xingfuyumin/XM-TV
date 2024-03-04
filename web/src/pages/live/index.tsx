import styles from './index.less';
import useData from './hook';
import { Spin } from "@douyinfe/semi-ui";
import LiveList from './components/live-list';
import classNames from 'classnames'


const Index: React.FC = () => {
  const {
    liveKey,
    liveList,
    loading,
    videoRef,
    isPc,
    handleLiveKeyChange,
  } = useData();
  return (
    <div className={classNames(styles.root, isPc ? styles.pc : null)}>
      <Spin spinning={loading}>
        <video ref={videoRef} controls autoPlay className={styles.video} />
        <LiveList
          liveList={liveList}
          liveKey={liveKey}
          onLiveKeyChange={handleLiveKeyChange}
          isPc={isPc}
        />
      </Spin>
    </div>
  );
};

export default Index;
