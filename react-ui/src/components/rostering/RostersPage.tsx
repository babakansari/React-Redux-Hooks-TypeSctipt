import React from "react";
import Typography from '@material-ui/core/Typography';
import { useSelector } from "react-redux";
import { Reducers } from "src/state/reducers";
import Link from '@material-ui/core/Link';
import { Crew } from "src/state/ApplicationState";

function RostersPage () {

  const state = useSelector( (reducers: Reducers) => reducers.crewReducer );

  return  (
    <div>
      <Typography variant="h2">Rosters</Typography>
      <br/>
      {state.crewes.length===0 ? 
        <Typography variant="caption">List is empty</Typography> : 
        <table>
          <tbody>
            {state.crewes.map(crew => {
              return (
                <tr key={crew.Name}>
                  <td>
                    &gt;
                  </td>
                  <td>
                    <Link href={"/Crew/" + crew.Name} >{crew.Name}</Link>
                  </td>
                  <td>
                    {crew.Rank}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      }
    </div>
  );
}

export default RostersPage;
