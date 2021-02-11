/** zzzzzzzzzzzzzzzzzzzz
This is a test zone for Customer
wWWWWWWWW333WWWWWWWWWWw
*/
Public with sharing Class AppleWatch{
 Public Static void appleWatchmethod(list<Opportunity> lopt ){
    for (Opportunity opp : lopt) {
        Task t        = new Task();
        t.Subject     = 'Apple Watch Promo';
        t.Description = 'Send them one ASAP';
        
        
        t.Priority    = 'High';
        t.WhatId      = opp.Id;
        
        
        //TEST EN MUERTEEE DEV22222
        insert t;
        
        
        //TEST EN MUERTEEE DEV1
             }
  }
  
  
  
  Public Static void appleWatchmethod2(list<Opportunity> lopt ){
    for (Opportunity opp : lopt) {
        Task t        = new Task();
        t.Subject     = 'Apple Watch Promo';
        t.Description = 'Send them one ASAP';
        
        
        t.Priority    = 'High';
        t.WhatId      = opp.Id;
        
        
        //TEST EN MUERTEEE DEV22222
        insert t;
        
        
        //TEST EN MUERTEEE DEV13333
             }
  }
  
 }
