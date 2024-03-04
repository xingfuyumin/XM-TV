import styles from './index.less';
import useData from './hook';
import { FC } from 'react';

type Props = {
}

const Index: FC<Props> = () => {
  const {

  } = useData();
  return (
    <div className={styles.root}>

    </div>
  );
};

export default Index;