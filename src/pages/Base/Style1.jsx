/* eslint-disable no-plusplus */
import React from 'react';
import cls from 'classnames';
import styles from './Style1.less';
/**
 * less 参考 http://lesscss.cn/functions/
 * https://www.cnblogs.com/codeByWei/p/11111126.html
 */
const HotText = props => <b>{props.children}</b>;
class Main extends React.Component {
  render() {
    const showJson = [
      {
        name: 'flex，项目分配剩余空间',
        classname: [styles.row, styles.flex1],
        layout: 'row',
        children: new Array(2).fill('').map((e, i) => ({ content: `${e}` })),
      },
      {
        name: 'flex，两端对齐，项目间距等分',
        classname: [styles.row, styles.flex2],
        layout: 'row',
        children: new Array(6).fill('').map((e, i) => ({ content: `${e}` })),
      },
      {
        name: 'flex，默认值。内容宽度，左对齐，高度适应容器',
        classname: [styles.row, styles.flex3],
        layout: 'row',
        children: new Array(6).fill('').map((e, i) => ({ content: `${e}` })),
      },
      {
        name: 'flex，自动换行，垂直居中。设定项目宽度',
        classname: [styles.row, styles.flex4],
        layout: 'row',
        children: new Array(18).fill('').map((e, i) => ({ content: `${e}` })),
      },
      {
        name: 'flex，自动换行，水平居两侧，垂直上下对齐，内容宽度',
        classname: [styles.row, styles.flex5],
        layout: 'row',
        children: new Array(18).fill('').map((e, i) => ({ content: `${e}` })),
      },
      {
        name: '伪类选择器：nth……',
        classname: [styles.row, styles.nthbox1, styles.flex10],
        layout: 'row',
        children: new Array(10).fill('').map((e, i) => ({ content: `${e}` })),
      },
      {
        name: '伪类选择器：first-child、first-of-type、last-child……',
        classname: [styles.column],
        children: [
          { content: '父元素的第一个元素【ps】', classname: styles.ps },
          { content: '父元素的第二个元素' },
          { content: '父元素的第三个元素，非首元素，非尾元素【ps】', classname: styles.ps },
          {
            children: [
              { content: '父元素的第一个元素【ps】', classname: styles.ps },
              { content: '父元素的最后一个元素【ps】', classname: styles.ps },
            ],
          },
          {
            children: [
              { content: '父元素的第一个元素' },
              { content: '父元素的第一个【ps】元素', classname: styles.ps },
              { content: '父元素的最后一个【ps】元素', classname: styles.ps },
              { content: '父元素的最后一个元素' },
            ],
          },
          { children: [{ content: '父元素的唯一元素【ps】', classname: styles.ps }] },
          {
            children: [
              { content: '父元素的第一个元素' },
              { content: '父元素的第二个元素，第一个【ps】元素', classname: styles.ps },
            ],
          },
          { content: '父元素的最后一个元素【ps】', classname: styles.ps },
        ],
      },
    ];
    // 添加唯一索引

    const setArrId = (arr, citems) => {
      arr.forEach((e, i) => {
        if (e.content !== undefined) {
          citems.push(e);
        }
        if (e.children) {
          setArrId(e.children, citems);
        }
      });
    };
    const setArrMain = arr => {
      const count = 0;
      const citems = [];
      setArrId(arr, citems);
      citems.forEach((e, i) => {
        e.id = i + 1;
      });
    };
    showJson.forEach(e => {
      setArrMain(e.children);
    });
    // console.log('TCL: Main -> render -> showJson', showJson);

    return (
      <>
        <h2>Flex-复杂结构，行内溢出文本显示… <a href="https://www.html.cn/archives/10319">为什么</a></h2>
        <div className={styles.tbox1Wrap}>
          <div className={styles.tbox1}>
            <div className={styles.lbox1}>
              <div className={styles.lbox11}>左1</div>
              <div className={styles.lbox12}>
                <div className={styles.left}>
                  <div className={styles.long1}>
                    左2-1-长文本长文本长文本长文本长文本长文本长文本长文本
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.text1}>左2-2</div>
                </div>
              </div>
              <div className={styles.lbox13}>
                <div className={styles.long1}>
                  左3-长文本长文本长文本长文本长文本长文本长文本长文本长文
                </div>
              </div>
            </div>
            <div className={styles.rbox1}>右1</div>
          </div>
        </div>

        <h2>文本溢出-单行、多行</h2>
        <div>
          <div className={styles.textBox1}>
            单行长文本长文本长文本长文本长文本长文本长文本长文本
          </div>
          <div className={styles.textBox2}>
            多行长文本长文本长文本长文本长文本长文本长文本长文本
          </div>

          <h2>单词换行</h2>
          <div className={styles.textBox3}>
            Hi&nbsp;&nbsp;, This is a incomprehensibilities long word. <br />
            你好&nbsp;&nbsp;， 这 是一个不可思议的长单词
          </div>
        </div>

        <h2>Flex 全属性示例、伪类选择器示例</h2>
        <div className={styles.box1}>
          {showJson.map((x, i) => (
            <div key={i} className={cls(styles.body, x.classname)}>
              <b className={styles.title}>
                {i + 1}.{x.name}
              </b>
              <div className={cls(styles.list)}>
                {x.children.map((y, j) => {
                  if (y.children) {
                    return (
                      <div key={j}>
                        {y.children.map((z, k) => (
                          <div key={z.id} className={z.classname}>
                            {[i + 1, j + 1, k + 1, `$${z.id}`, z.content].filter(e => e).join('.')}
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <div key={j} className={cls(styles.item, y.classname)}>
                      {x.layout === 'row'
                        ? `$${y.id}`
                        : [i + 1, j + 1, `$${y.id}`, y.content].filter(e => e).join('.')}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <br />
        <h4>以上涉及的选择内容包括：</h4>
        <ul className={styles.remark}>
          <li>
            <HotText>:nth-child(2n+1)</HotText>
            会选中$1、$3、$5……所有基数元素。原理：假定n为0开始累加计算得 1、3、5……
          </li>
        </ul>
        <ul className={styles.remark}>
          <li>
            <HotText>.ps:first-child</HotText>会选中$1、$4、$10。原理：首先 .ps 会筛选出页面所有的
            ps 元素，:first-child 再从这些 ps 元素中选中是其父元素的首个子元素。
          </li>
          <li>
            <HotText>.ps:last-child</HotText>会选中$5、$10、$12、$13。原理同上。
          </li>
          <li>
            <HotText>.ps:first-of-type</HotText>与<HotText>.ps:first-child</HotText>
            比较，会选中$1、$4、$10，但不会再选中$7、$12。原理：首先，筛选出是父元素内第一个出现的标签，其次，进一步筛选出类名是
            ps 的结果，因为上面例子中使用的都是 div 标签，所以最终结果和
            <HotText>.ps:first-child</HotText>一致。特别注意，
            <HotText>伪类 of-type 第一步是先筛标签。</HotText>
          </li>
          <li>
            <HotText>.ps:last-of-type</HotText>会选中$5、$10、$12、$13外，还会选中$8。
          </li>
          <li>
            <HotText>.ps:only-child</HotText>会选中 $10，原理：首先 .ps 会筛选出所有的 ps
            元素，然后一一确认这些 ps 元素哪些没有任何的兄弟元素。
          </li>
          <li>
            <HotText>.ps:only-of-type</HotText>与<HotText>:only-child</HotText>
            比较，选中 $10 外，还会选中 $12。
          </li>
        </ul>
        <ul className={styles.remark}>
          <li>inline元素设置 float、absolute、fixed 后，将会块化</li>
          <li>float 会使元素脱离文本流</li>
          <li>inline-block 存在间隙问题！办法：设置父容器 font-size:0;</li>
          <li>display:table 定义的容器具有包裹性，即宽度由内容决定</li>
          <li>display:table-cell 属性的常用标签：td、th</li>
          <li>display:block 块级元素的特点在与独占一行</li>
        </ul>
      </a>
    );
  }
}
export default Main;
