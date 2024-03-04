import './index.less';
import useData from './hook';
import { Spin } from "@douyinfe/semi-ui";
import LiveList from './components/live-list';


const Index: React.FC = () => {
  const {
    liveKey,
    liveList,
    loading,
    videoRef,
    handleLiveKeyChange,
  } = useData();
  return (
    <Spin spinning={loading}>
      <video ref={videoRef} controls autoPlay />
      <LiveList
        liveList={liveList}
        liveKey={liveKey}
        onLiveKeyChange={handleLiveKeyChange}
      />
    </Spin>
  );
};

export default Index;
