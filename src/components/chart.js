import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

//sparklines gets data from api so no need to use redux
function average(data) {
  return  _.round(_.sum(data)/data.length);
}
export default (props) => {
  let style = {
    height: 120,
    width: 180
  }
  return (
    <div>
      <Sparklines style={style} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  )
}
