import { BAR_PADDING, BAR_COLOR } from './constants';

function BarGroup(props) {
  const { d, barHeight, classes } = props;

  const widthScale = w => w * 10;
  const width = widthScale(d.value);
  const yMid = barHeight * 0.5;

  return (
    <g className={classes.barGroup}>
      <text className={classes.nameLabel} x="-6" y={yMid} alignmentBaseline="middle" >{d.name}</text>
      <rect y={BAR_PADDING * 0.5} width={width} height={barHeight - BAR_PADDING} fill={BAR_COLOR} />
      <text className={classes.valueLabel} x={width- 8} y={yMid} alignmentBaseline="middle" >{d.value}</text>
    </g>
  )
}

export default BarGroup;
