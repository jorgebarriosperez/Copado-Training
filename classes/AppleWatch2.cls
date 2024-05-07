Public with sharing Class AppleWatch2{
 Public Static void appleWatchmethod(list<Opportunity> lopt ){
    for (Opportunity opp : lopt) {
        Task t        = new Task();
        //TEST EN DEV4444444444444
        //TEST EN DEV233333333333
        t.Subject     = 'Apple Watch Promo';
        t.Description = 'Send them one ASAP ========>';
        t.Priority    = 'High';
        t.WhatId      = opp.Id;
        //TEST AHORAAAAAAAAAAAA
        insert t;
        //TEST EN DEV1 ----  {!Environment.testvariablesjorege2024}
        //{!Environment.testvariablesjorege2024}    para env variables
             }
  }
 }