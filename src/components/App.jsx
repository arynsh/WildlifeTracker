
import React from 'react';
import Home from './Home';
import Header from './Header';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   masterLogList: []
    // };
    // this.handleAddingNewLogToList = this.handleAddingNewLogToList.bind(this);
  }

//   handleAddingNewLogToList(newLog){
//     var newMasterLogList = this.state.masterLogList.slice();
//     newMasterLogList.push(newLog);
//     this.setState({masterLogList: newMasterLogList});
//   }

  render(){
      return (
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/LogList' render={()=><LogList LogList={this.state.masterLogList} />} />
            <Route path='/NewLog' render={()=><NewLogControl onNewLogCreation={this.handleAddingNewLogToList} />} /> */}
            <Route component={Error404} />
          </Switch>
        </div>
      );
  }
}

export default App;