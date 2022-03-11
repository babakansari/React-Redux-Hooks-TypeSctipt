import React from "react";
import Typography from '@material-ui/core/Typography';
import { useSelector } from "react-redux";
import { Reducers } from "src/state/reducers";
import Link from '@material-ui/core/Link';

function RostersPage () {

  const state = useSelector( (reducers: Reducers) => reducers.crewReducer );

  return  (
    <div>
      <Typography variant="h2">Rosters</Typography>
      <br/>
      <tbody>
        {state.crewes.map(crew => {
          return (
            <tr key={crew}>
              <td>
                &gt;
              </td>
              <td>
                <Link href={"/Crew/" + crew} >{crew}</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </div>
  );
}

export default RostersPage;
