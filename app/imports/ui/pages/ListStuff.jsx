import React from 'react';
import _ from 'lodash';
import { Button, Table, Popup } from 'semantic-ui-react';

const tableData = [
  { date: '5/1/21', time: '7:30am', location: 'Queens Kapiolani', vaccine: 'Pfizer' },
  { date: '5/1/21', time: '7:45am', location: 'Queens Punchbowl', vaccine: 'Moderna' },
  { date: '5/1/21', time: '8:00am', location: 'CVS Kalihi', vaccine: 'J&J' },
  { date: '5/1/21', time: '8:15am', location: 'CVS Mililani', vaccine: 'Pfizer' },
  { date: '5/2/21', time: '7:30am', location: 'CVS Kapolei', vaccine: 'Pfizer' },
  { date: '5/2/21', time: '7:30am', location: 'Kapiolani Medical Center', vaccine: 'Moderna' },
];

function exampleReducer(state, action) {
  switch (action.type) {
  case 'CHANGE_SORT':
    if (state.column === action.column) {
      return {
        ...state,
        data: state.data.slice().reverse(),
        direction:
              state.direction === 'ascending' ? 'descending' : 'ascending',
      };
    }

    return {
      column: action.column,
      data: _.sortBy(state.data, [action.column]),
      direction: 'ascending',
    };
  default:
    throw new Error();
  }
}

function Scheduler() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    data: tableData,
    direction: null,
  });
  const { column, data, direction } = state;

  return (
    <Table sortable celled fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === 'date' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'date' })}
          >
              Date
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'time' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'time' })}
          >
              Time
          </Table.HeaderCell>
          <Table.HeaderCell
          >
              Location
          </Table.HeaderCell>
          <Table.HeaderCell
          >
            Vaccine
          </Table.HeaderCell>
          <Table.HeaderCell>
            Select
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(({ time, location, date, vaccine }) => (
          <Table.Row key={date}>
            <Table.Cell>{date}</Table.Cell>
            <Table.Cell>{time}</Table.Cell>
            <Table.Cell>{location}</Table.Cell>
            <Table.Cell>{vaccine}</Table.Cell>
            <Table.Cell><Popup content='YOU HAVE CONFIRMED YOUR APPOINTMENT! GO TO PROFILE TO CHECK FOR LOCATION AND TIME, A FULLY IMPLEMENTED UI WILL HAVE YOUR APPOINTMENT LOCATION ON THE MAP TAB' on='click' pinned trigger={<Button color='green' content='Confirm' />}
            /></Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default Scheduler;
