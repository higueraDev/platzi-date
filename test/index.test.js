const assert = require('assert');
const { getTimeStamp, getLongTime } = require('../src/index.js');

// Test getTimeStamp returns a number
const timestamp = getTimeStamp();
assert.strictEqual(typeof timestamp, 'number', 'Timestamp should be a number');
assert.ok(timestamp > 0, 'Timestamp should be positive');
console.log('✓ Test passed: getTimeStamp returns a valid timestamp');

