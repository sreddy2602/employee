using { Details as db } from '../db/demo';
 
service Detail{
 
    entity Student_Details as projection on db.Student_Details;
    entity Qualification_Details as projection on db.Qualification_Details
    }