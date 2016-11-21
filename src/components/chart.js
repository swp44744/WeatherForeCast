import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {

  function average(data) {
    return(
      _.round(_.sum(data)/data.length)
    );

  }

  return(
    <div>
      <Sparklines data={props.data} width={180} height={120} margin={5}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)}{props.unit}
      </div>
    </div>

  );
}