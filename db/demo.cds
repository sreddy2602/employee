namespace Details;
 
 
entity Student_Details {
 // @title : 'Sales Order Number'
  key employeeID: Int64;
  @title : ' employeeName'
  employeeName: String;
  @title : 'location'
  location: String;
  @title : 'experience'
  experience: Integer;
  @title : 'performance'
  performance: String;
  @title : 'qualification'
  qualification: String;
  @title : 'age'
  age: Integer;
  @title : 'domain'
  domain: String;
 
}
entity Qualification_Details{
    key PSNumber: String;
    Qualification:String;
    Percentage:Integer;
    Reward_Amount: Integer;
 
}