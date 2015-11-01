/**
 * Created by koji on 15/11/01.
 */
import issue from './background';
import React from 'react';

class IssuesBunches extends React.Component{
  constructor(){
    super();
  }

  propTypes : {
    issuesBunches: React.propTypes.object.required
  }

  renderIssuesBunches(issuesBunches){
    let issuesBunchesArray = [];
    //console.log(issuesBunches);
    for (var issuesStatus in issuesBunches){
      //console.log(issuesBunches);
      //console.log(issuesStatus);
      //console.log(issuesBunches[issuesStatus]);
      //console.log({issuesBunch:{issuesStatus: issuesBunches[issuesStatus]}});
      let hash = {};
      hash[issuesStatus] = issuesBunches[issuesStatus];
      console.log(hash);
      issuesBunchesArray.push(<IssuesBunch issuesBunch={{issuesStatus:hash}} />);
    }
    //console.log(issuesBunchesArray);
    return issuesBunchesArray;
  }

  render(){
    "use strict";
    return(
      <table className="issuesBunches">
        {this.renderIssuesBunches(this.props.issuesBunches)}
      </table>
    );
  }
}

class IssuesBunch extends React.Component{
  constructor(){
    super();
  }

  propTypes :{
    issuesBunch: React.propTypes.object.required
  }

  render(){
    console.log(this.props.issuesBunch.issuesStatus);
    console.log("hellooooooooo");
    for (let status in this.props.issuesBunch.issuesStatus) {
      return(
        <tr className="issuesBunch">
          <td className="status"> {status} </td>
          <td className="issues_number"> {this.props.issuesBunch.issuesStatus[status]} </td>
        </tr>
      );
    }
  }
}
//console.log(issue.getTotalIssue());
chrome.runtime.sendMessage({
  type: "hello",
  text: "Yo!"
},
  (res) => {
    "use strict";
    //console.log(res.itemsNumberOfIssue);
    React.render(<IssuesBunches issuesBunches={res.itemsNumberOfIssue}/>, document.body);
  });
console.log("sendddddddddd");
//React.render(<IssuesBunches issuesBunches={issue.getItemsNumberOfIssue()}/>, document.body);
