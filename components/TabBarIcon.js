import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={23}
        style={{ marginBottom: -8}}
        color={Colors.tabIconDefault}
      />
    );
  }
}

// import React from 'react';
// import { Icon } from 'expo';

// import Colors from '../constants/Colors';

// export default class TabBarIcon extends React.Component {
//   render() {
//     return (
//       <Icon.Ionicons
//         name={this.props.name}
//         size={26}
//         style={{ marginBottom: -3 }}
//         color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
//       />
//     );
//   }
// }