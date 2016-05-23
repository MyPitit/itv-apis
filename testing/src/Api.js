require('jasmine-ajax');

jasmine.Ajax.requests.mostRecent().response({
  "status": 200,
  "contentType": 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/channels?broadcaster=ITV';
});

expect(doneFn).toHaveBeenCalledWith('Great');

