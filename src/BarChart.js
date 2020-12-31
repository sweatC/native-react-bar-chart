import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import BarGroup from './BarGroup';
import { BAR_HEIGHT, API_URL } from './constants';

const useStyles = createUseStyles({
  '@global': {
    body: {
      fontFamily: 'Lato, sans-serif',
      fontSize: '16px',
    }
  },
  container: {
    '&:hover $barGroup': {
      opacity: 0.3,
    },
    '& $barGroup': {
      '&:hover': {
        opacity: 1,
      }
    }
  },
  title: {
    fontSize: '1.4em',
    fontWeight: 300,
  },
  barGroup: {
    transition: 'opacity 0.3s',
    '&:hover $nameLabel': {
      fontWeight: 400,
    },
    '&:hover $valueLabel': {
      fontSize: '0.8em',
    },
  },
  nameLabel: {
    textAnchor: 'end',
    fontWeight: 300,
    fontSize: '1em',
    fill: '#333',
  },
  valueLabel: {
    textAnchor: 'end',
    fill: '#fff',
    fontWeight: 900,
    fontSize: '0.7em',
  }
});

function BarChart() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const barGroups = data?.map((d, i) => {
    return (
      <g key={i} transform={`translate(0, ${i * BAR_HEIGHT})`}>
        <BarGroup d={d} barHeight={BAR_HEIGHT} classes={classes} />
      </g>
    )
  })

  return (
    <svg width="800" height="300">
      <g className={classes.container}>
        <text className={classes.title} x="10" y="30">Most Popular Social Networking Sites</text>
        <g transform="translate(100,60)">
          {barGroups}
        </g>
      </g>
    </svg>
  )
}

export default BarChart;
