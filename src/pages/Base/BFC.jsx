/* eslint-disable no-plusplus */
import React from 'react';
import cls from 'classnames';
import styles from './BFC.less';

class Main extends React.Component {
  render() {
    return (
      <>
        <div className={styles.body1}>
          {/* body1 */}
          <div className={styles.aside}>aside</div>
          <div className={styles.main}>main</div>
        </div>
        <div className={styles.body2}>
          <div>hello</div>
          <div>hello</div>
        </div>
      </>
    );
  }
}
export default Main;
