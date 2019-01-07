const helloGET = require('../../index').helloGET;

describe('helloGET', () => {
  let req, res;
  beforeEach(() => {
    req = {
      method: '',
    };
    res = {
      // status: function() {return this},
      status: jest.fn(function(){return this;}),
      send: jest.fn(),
    };
  });

  test('should print "GET request" if request method is GET', () => {
    req.method = 'GET';

    helloGET(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith('GET request');
  });
  test('should print "PUT request" if request method is PUT', () => {
    req.method = 'PUT';

    helloGET(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith('PUT request');
  });
  test('should print "Something blew up!" if request method is not PUT nor GET', () => {
    req.method = 'POST';

    helloGET(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({ error: 'Something blew up! GET/PUT Only' });
  });
});
