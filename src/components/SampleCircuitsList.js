import React from 'react';

import {List, ListItem} from 'material-ui/List';
import { Link } from 'react-router'

import Maxwell from 'maxwell'

const styles = {
  nestedListStyle: {
    borderLeft: '5px solid #555',
    backgroundColor: '#444',
    borderBottom: '1px solid #970000'
  },
  innerDivStyle: {
    // backgroundColor: '#333',
    fontSize: '10px',
    margin: 0,
    padding: '4px 4px 4px 12px'
  },
  rootListStyle: {
    borderBottom: '1px solid black',
    // borderTop: '1px solid black',
    fontSize: '12px',
    padding: '4px 12px',
    position: 'relative'
    // backgroundColor: '#333',
  },
  subnestedList: {
    backgroundColor: '#666',
    padding: '4px 4px 4px 4px',
    borderLeft: '5px solid #888'
  },
  parentListStyle: {
    // borderBottom: '1px solid #222',
    // borderTop: '1px solid #222',
    borderLeft: '5px solid #333',
    fontSize: '12px',
    padding: '8px 8px 8px 12px',
    marginLeft: 0,
    position: 'relative',
    fontWeight: 'bold'
  }
};

class SampleCircuitsList extends React.Component {
  render() {

    // Todo this should be a recursive function
    let circuit_library = Maxwell.SampleCircuits;
    let outerList = [];

    for (let category_name in circuit_library) {
      let category_circuits = circuit_library[category_name];

      let items = [];

      for (let sub_circuit_id in category_circuits) {
        let sub_circuit = category_circuits[sub_circuit_id];

        if (typeof(sub_circuit) == 'string') {
          items.push(

              <Link key={sub_circuit} to={sub_circuit_id}>
                <ListItem
                innerDivStyle={styles.innerDivStyle}
                primaryText={sub_circuit}

                >

                </ListItem>
              </Link>
          );
        } else {
          let subitems = [];

          for (let sub_sub_circuit_id in sub_circuit) {
            let sub_sub_circuit_name = sub_circuit[sub_sub_circuit_id];

            subitems.push(
                <ListItem
                    key={sub_sub_circuit_name}
                    primaryText={sub_sub_circuit_name}
                    innerDivStyle={styles.innerDivStyle}

                >
                </ListItem>
            );
          }

          items.unshift(<ListItem
                  primaryText={sub_circuit_id}
                  primaryTogglesNestedList={true}
                  initiallyOpen={false}
                  innerDivStyle={styles.parentListStyle}
                  nestedListStyle={styles.subnestedList}
                  nestedItems={subitems}
              />
          );
        }
      }

      let outerListItem = <ListItem
          key={category_name}
          primaryText={category_name}
          innerDivStyle={styles.rootListStyle}
          nestedListStyle={styles.nestedListStyle}
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedItems={items}/>;

      outerList.push(outerListItem);
    }

    return (
        <List>
          {outerList}
        </List>
    );
  }
}

export default SampleCircuitsList;

