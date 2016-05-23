describe('itv api usage', function() {

  beforeEach(function() {
    jasmine.Ajax.install();
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

// mock out ajax call
  it('get all the channels when you need it', function() {
    var doneFn = jasmine.createSpy('success');

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(args) {
        if (this.readyState == this.DONE) {
          doneFn(this.responseText);
        }
      };

    xhr.open('GET', 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/channels?broadcaster=ITV');
    xhr.send();

    expect(jasmine.Ajax.requests.mostRecent().url).toBe('http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/channels?broadcaster=ITV');
    expect(doneFn).not.toHaveBeenCalled();
  });
});