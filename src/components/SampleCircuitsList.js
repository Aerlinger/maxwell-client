import React from 'react';

import ElementListItem from './ElementListItem';

import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';

import SvgIcon from 'material-ui/SvgIcon';
import OpenIcon from 'material-ui/svg-icons/navigation/expand-less';
import CloseIcon from 'material-ui/svg-icons/navigation/expand-more';

import Maxwell from 'maxwell'

const HomeIcon = (props) => (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </SvgIcon>
);

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 500,
    height: 900,
    overflowY: 'auto'
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
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
    padding: '8px 12px',
    position: 'relative',
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
  },
  leftIcon: {
    margin: 2
  },
  tabs: {
    marginTop: 10
  }
};

class SampleCircuitsList extends React.Component {

  render() {

    // Todo this should be a recursive function
    let circuit_library = Maxwell.Circuits;
    let outerList = [];

    for (let category_name in circuit_library) {
      let category_circuits = circuit_library[category_name];

      let items = [];

      for (let sub_circuit_id in category_circuits) {
        let sub_circuit = category_circuits[sub_circuit_id];

        if (typeof(sub_circuit) == "string") {
          items.push(<ListItem
              innerDivStyle={styles.innerDivStyle}
              primaryText={sub_circuit}
              />
          );
        } else {
          let subitems = [];

          for (let sub_sub_circuit_id in sub_circuit) {
            let sub_sub_circuit_name = sub_circuit[sub_sub_circuit_id];

            subitems.push(
                <ListItem primaryText={sub_sub_circuit_name} innerDivStyle={styles.innerDivStyle}/>
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

