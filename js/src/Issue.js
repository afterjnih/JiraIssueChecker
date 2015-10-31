export default class Issue{
  constructor(userId, password){
    this.userId = userId;
    this.password = password;
  }

  setTotalIssue(totalIssue){
    this.totalIssue = totalIssue;
  }

  getTotalIssue(){
    //console.log('hello');
    return this.totalIssue;
    //return (new Date()).getSeconds().toString()
  }

  setItemsNumberOfIssue(issues){
    this.itemsNumberOfIssue = {};
    issues.forEach((issue) => {
      let statusName = issue.fields.status.name;
      if(statusName in this.itemsNumberOfIssue){
        ++this.itemsNumberOfIssue[statusName];
      }else{
        this.itemsNumberOfIssue[statusName] = 1;
      }
    });
  }

  getItemsNumberOfIssue(){
    return this.itemsNumberOfIssue;
  }

  parseJson(str){
   JSON.parse(str).issues.forEach((e) => {
     console.log(e);
   })
  }
}

