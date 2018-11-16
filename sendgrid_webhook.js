const localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'rsmesvarhtjezws' }, (err, tunnel) => {
   console.log('LT running');
});
